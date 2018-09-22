import {Component, EventEmitter, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../../models/user';
import {Router} from '@angular/router';
import {UsersService} from '../../services/users.service';


@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router,
              private usersService: UsersService ) {}

  ngOnInit() {
    this.form = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    const { email, firstName, lastName } = this.form.value;
    const formData = { email, firstName, lastName };
    this.usersService.users.push(formData);
    console.log(this.usersService.users);
    this.router.navigate(['main', 'roles']);
  }

}
