import { Component, OnInit } from '@angular/core';
import {Role} from '../../models/role';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  rolesArr;

  constructor() {
  }

  ngOnInit() {
    this.rolesArr = [
      {id: 1, name: "Admin"},
      {id: 2, name: "Developer"},
      {id: 3, name: "TeamLead"},
      {id: 4, name: "Manager"}
    ];
  }
}
