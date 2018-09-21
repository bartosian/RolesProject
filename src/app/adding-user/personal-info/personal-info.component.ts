import {Component, EventEmitter, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../../models/user';


@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {

  form: FormGroup;
  requestSent = false;
  addNewUser: EventEmitter<User>;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]]
    });

    this.addNewUser = new EventEmitter<User>();
  }
  onSubmit(e) {
    e.preventDefault();
    this.requestSent = true;
    const { email, firstName, lastName } = this.form.value;
    const formData = { email, firstName, lastName };

    this.addNewUser.emit(formData);
    this.requestSent = false;
  }

}
