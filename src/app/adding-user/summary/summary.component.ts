import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UsersService} from '../../services/users.service';
import {User} from '../../models/user';
import {ApiService} from '../../services/api.service';

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
              private usersService: UsersService,
              private apiService: ApiService) { }

  ngOnInit() {
    this.user = this.usersService.getUsersInfo().pop();
    this.basicRoles = this.usersService.getBasicRolesInfo();
    this.roles = this.usersService.getRolesInfo().pop();
    this.roles = this.roles.map(r => {
      return this.basicRoles[r - 1].name;
    });
  }

  prevPage() {
    this.router.navigate(['main', 'roles']);
  }

  sendDataToSever() {
    const data = { ...this.user, roles: this.roles };
    this.apiService.sendData(data);
    this.router.navigate(['/']);
  }

}
