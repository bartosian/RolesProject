import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UsersService} from '../../services/users.service';
import {User} from '../../models/user';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  user: User;
  roles: any;
  basicRoles: any;

  constructor(private router: Router,
              private usersService: UsersService) { }

  ngOnInit() {
    this.user = this.usersService.getUsersInfo().pop();
    this.basicRoles = this.usersService.getBasicRolesInfo();
    this.roles = this.usersService.getRolesInfo().pop();
  }

  prevPage() {
    this.router.navigate(['main', 'roles']);
  }

}
