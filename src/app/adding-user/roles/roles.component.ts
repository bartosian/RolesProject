import { Component, OnInit } from '@angular/core';
import {Role} from '../../models/role';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {UsersService} from '../../services/users.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  rolesArr: Array<Role>;

  constructor(private router: Router,
              private usersService: UsersService) {
  }

  ngOnInit() {
    this.rolesArr = this.usersService.getBasicRolesInfo();
  }

  onSubmit(form: NgForm) {
    const roles = form.value.roles;
    this.usersService.roles.push(roles);
    console.log(this.usersService.roles);
    this.router.navigate(['main', 'sum']);
  }

  prevPage() {
    this.router.navigate(['main']);
  }
}
