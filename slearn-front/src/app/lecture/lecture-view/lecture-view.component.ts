import { Component, OnInit } from '@angular/core';
import {Lecture} from "../../model/lecture";
import {LectureService} from "../../service/lecture.service";

@Component({
  selector: 'app-lecture-view',
  templateUrl: './lecture-view.component.html',
  styleUrls: ['./lecture-view.component.css']
})
export class LectureViewComponent implements OnInit {

  public lectures: Lecture[] = [];


  constructor(private lectureService: LectureService) { }


  ngOnInit(): void {
    this.lectureService.getAll().subscribe(resp => {
      this.lectures = resp;
    })
  }



}
