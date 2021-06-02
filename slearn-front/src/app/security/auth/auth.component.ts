import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../service/user.service";
import {AuthService} from "../../service/auth.service";
import {TokenStorageService} from "../../service/token-storage.service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  credentials = {email: '', password: ''};

  constructor(public router: Router,
              public authService: AuthService,
              public tokenService: TokenStorageService) {
  }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.router.navigate(['lectures'])
    }
  }

  login(): void {
    this.authService.authenticate({email: this.credentials.email, password: this.credentials.password})
      .subscribe(response => {
        this.tokenService.saveToken(response.jwt);
        this.tokenService.saveUser(response);
        this.router.navigate(['/lectures']);
        window.location.reload();
      }, error => {
        console.log(error)
      })
  }
}
