import { Component, OnInit } from '@angular/core';
import {LectureService} from "../service/lecture.service";
import {Lecture} from "../model/lecture";
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {LectureUpdateComponent} from "./lecture-update/lecture-update.component";

@Component({
  selector: 'app-lecture',
  templateUrl: './lecture.component.html',
  styleUrls: ['./lecture.component.css']
})
export class LectureComponent implements OnInit {
  public lectures: Lecture[] = [];
  public lecture: Lecture = {content: "", description: "", image: "", name: ""};

  constructor(private lectureService: LectureService,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.lectureService.getAll().subscribe(data => {
      this.lectures = data;
    })
  }

  save(): void {
    this.lectureService.create(this.lecture).subscribe(data => {
      console.log(this.lecture.name);
      this.lectures.push(this.lecture);
      this.lectureService.getAll().subscribe(data => {
        this.lectures = data;
      })
    });
  }

  delete(id: number | undefined, index: number): void {
    if (id !== undefined) {
      this.lectureService.delete(id).subscribe(data => {
        this.lectures.splice(index, 1);
      });
    }
  }

  edit(): void {
    let dialogRef = this.dialog.open(LectureUpdateComponent, {
      height: '400px',
      width: '600px',
    });

  }
}
