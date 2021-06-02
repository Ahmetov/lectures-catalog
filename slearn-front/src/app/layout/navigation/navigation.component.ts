import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from "../../service/token-storage.service";
import {Router} from "@angular/router";
import {UserService} from "../../service/user.service";
import {Role} from "../../model/role";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  public roles: Role[] = [];
  isAdmin: boolean | undefined;

  constructor(private storageService: TokenStorageService,
              private router: Router,
              private userService: UserService) { }

  ngOnInit(): void {
    this.loadRoles();
  }

  loadRoles(): void {
    this.userService.getCurrentUserRoles().subscribe(data => {
      this.roles = data;
      this.roles.map(r => r.name).includes("admin") ? this.isAdmin = true : this.isAdmin = false;
    })
    this.isAdmin = false;
  }

  logout(): void {
    this.storageService.logOut();
    this.router.navigate(['/login']);
  }
}
