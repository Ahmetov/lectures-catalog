import {Component, OnInit} from '@angular/core';
import {LectureService} from "../service/lecture.service";
import {Lecture} from "../model/lecture";
import {Router} from "@angular/router";
import {ReportService} from "../service/report.service";

@Component({
  selector: 'app-lecture',
  templateUrl: './lecture.component.html',
  styleUrls: ['./lecture.component.css']
})
export class LectureComponent implements OnInit {
  public lectures: Lecture[] = [];
  public lecture: Lecture = {content: "", description: "", image: "", name: ""};

  constructor(private lectureService: LectureService, private reportService: ReportService, private router: Router) {
  }

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

  report(id: number | undefined): void {
    if (id !== undefined) {
      this.reportService.getLectureReport(id).subscribe(resp => {
        let downloadURL = window.URL.createObjectURL(resp);
        let link = document.createElement('a');
        link.href = downloadURL;
        link.download = "report.pdf";
        link.click();
      });
    }
  }

}
