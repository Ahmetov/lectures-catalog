import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {LectureService} from "../../../service/lecture.service";
import {Lecture} from "../../../model/lecture";

@Component({
  selector: 'app-lecture-view-details',
  templateUrl: './lecture-view-details.component.html',
  styleUrls: ['./lecture-view-details.component.css']
})
export class LectureViewDetailsComponent implements OnInit {
  public lecture: Lecture = {content: "", description: "", image: "", name: ""};
  private id: number;

  constructor(private activateRoute: ActivatedRoute, private lectureService: LectureService) {
    this.id = activateRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.lectureService.getById(this.id).subscribe(resp => {
      this.lecture = resp;
    })
  }

}
