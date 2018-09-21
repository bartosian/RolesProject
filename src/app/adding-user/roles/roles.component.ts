import { Component, OnInit } from '@angular/core';
import {Role} from '../../models/role';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  rolesArr;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.rolesArr = [
      {id: 1, name: "Admin"},
      {id: 2, name: "Developer"},
      {id: 3, name: "TeamLead"},
      {id: 4, name: "Manager"}
    ];
  }

  onSubmit(form: NgForm) {
    const roles = form.value.roles;
    this.router.navigate(['main', 'sum']);
  }

  prevPage() {
    this.router.navigate(['main']);
  }
}
