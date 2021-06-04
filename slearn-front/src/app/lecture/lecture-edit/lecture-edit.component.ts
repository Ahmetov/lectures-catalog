import { Component, OnInit } from '@angular/core';
import {Lecture} from "../../model/lecture";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../service/user.service";
import {LectureService} from "../../service/lecture.service";

@Component({
  selector: 'app-lecture-update',
  templateUrl: './lecture-edit.component.html',
  styleUrls: ['./lecture-edit.component.css']
})
export class LectureEditComponent implements OnInit {

  public lecture: Lecture = {content: "", description: "", image: "", name: ""};
  public id: number;

  constructor(private activateRoute: ActivatedRoute, private lectureService: LectureService, private router: Router) {
    this.id = activateRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.lectureService.getById(this.id).subscribe(resp => {
      this.lecture = resp;
    })
  }

  update() {
    this.lectureService.update(this.lecture).subscribe(resp => {
      this.router.navigate(['/lectures/manage']);
    })
  }
}
