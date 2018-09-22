import { Injectable } from '@angular/core';
import {Role} from '../models/role';
import {User} from '../models/user';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: Array<User>;
  roles: Array<Role>;
  userData: Subject<User>;
  rolesData: Subject<Role>;
  rolesPrint = [
    {id: 1, name: 'Admin'},
    {id: 2, name: 'Develope'},
    {id: 3, name: 'TeamLea'},
    {id: 4, name: 'Manage'}
  ];

  constructor() {
    this.users = [];
    this.roles = [];
  }

  sendNewUser(user: User) {
    this.userData.next(user);
  }

  sendRoles(roles: any) {
    this.rolesData.next(roles);
  }

  getUsersInfo() {
    return this.users.slice();
  }

  getRolesInfo() {
    return this.roles.slice();
  }
  getBasicRolesInfo() {
    return this.rolesPrint.slice();
  }
}
