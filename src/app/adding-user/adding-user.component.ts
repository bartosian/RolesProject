import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-adding-user',
  templateUrl: './adding-user.component.html',
  styleUrls: ['./adding-user.component.css']
})
export class AddingUserComponent implements OnInit {

  users: Array<User>;

  constructor() { }

  ngOnInit() {}

  addNewUser(user: User) {
    const users = this.users.slice();
    this.users = [...users, user];
  }

}
