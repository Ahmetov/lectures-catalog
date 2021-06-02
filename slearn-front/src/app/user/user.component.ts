import { Component, OnInit } from '@angular/core';
import {Lecture} from "../model/lecture";
import {User} from "../model/user";
import {UserService} from "../service/user.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public users: User[] = [];
  public user: User = {address: "", email: "", firstname: "", lastname: "", phone: ""};

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAll().subscribe(data => {
      this.users = data;
    })
  }

}
