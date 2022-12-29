import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthFormsService } from '../auth-forms.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  Date: any[] = [];

  constructor(private _Router: Router, private forms: AuthFormsService) {}

  ngOnInit(): void {}

  userDate: [] = [];
  refisterForms: FormGroup = new FormGroup({
    names: new FormControl(null, [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(10),
    ]),
    emails: new FormControl(null, [Validators.required, Validators.email]),
    phone: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^(010|011|012|015)[0-9]{8}$/),
    ]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^[A-Z]{3}[a-z]{10}$/),
    ]),
    area: new FormControl(null, [Validators.required]),
  });

  submitForm(masseg: FormGroup) {
    this.userDate = masseg.value;
    this.forms.formReg(masseg);
    localStorage.setItem('date', JSON.stringify(masseg.value));
    this.refisterForms.reset({});
    this._Router.navigate(['/login']);
  }
}
