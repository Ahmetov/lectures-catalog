import { Component, OnInit } from '@angular/core';
import {Lecture} from "../../model/lecture";

@Component({
  selector: 'app-lecture-update',
  templateUrl: './lecture-update.component.html',
  styleUrls: ['./lecture-update.component.css']
})
export class LectureUpdateComponent implements OnInit {

  lecture: Lecture = {content: "", description: "", image: "", name: ""};

  constructor() { }

  ngOnInit(): void {
  }

}
