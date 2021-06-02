import {Component, OnInit} from '@angular/core';
import {UserService} from "../../service/user.service";
import {Lecture} from "../../model/lecture";
import {User} from "../../model/user";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public user: User = {address: "", email: "", firstname: "", lastname: "", password: "", passwordRepeat: "", phone: ""};

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
  }

  registration(): void {
    this.userService.create(this.user).subscribe(data => {
      console.log(this.user);
    });
  }
}
