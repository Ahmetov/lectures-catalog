import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  credentials = {username: '', password: ''};
  authenticated = false;

  constructor(public router: Router, public userService: UserService) { }

  ngOnInit(): void {
  }

  login(): void {
    this.userService.authenticate(this.credentials).subscribe(response => {
      if (response['name']) {
        this.authenticated = true;
      } else {
        this.authenticated = false;
      }
      this.router.navigate(['/lectures']);
    })
    console.log("no auth");
  }
}
