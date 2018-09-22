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
  selectedRoles: any;

  constructor(private router: Router,
              private usersService: UsersService) {
  }

  ngOnInit() {
    this.rolesArr = this.usersService.getBasicRolesInfo();
    this.selectedRoles = this.usersService.getRolesInfo();
  }

  onSubmit(form: NgForm) {
    const roles = form.value.roles;
    this.usersService.roles.push(roles);
    this.router.navigate(['main', 'sum']);
  }

  prevPage() {
    this.router.navigate(['main']);
  }
}
