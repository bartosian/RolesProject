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
    {roleId: 1, name: 'Admin'},
    {roleId: 2, name: 'Developer'},
    {roleId: 3, name: 'TeamLead'},
    {roleId: 4, name: 'Manager'}
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
