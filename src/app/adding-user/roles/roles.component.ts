import { Component, OnInit } from '@angular/core';
import {Role} from '../../models/role';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  roles: Array<Role>;

  constructor() {
  }

  ngOnInit() {
    this.roles = [
      {id: 1, name: " "}
    ];


  }
}
