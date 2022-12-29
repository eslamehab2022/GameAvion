import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthFormsService } from '../auth-forms.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _Router:Router,private service:AuthFormsService) { }

  ngOnInit(): void {
  }


  login :FormGroup = new FormGroup({

    email: new FormControl(null, [Validators.email,Validators.required]),
    paass:  new FormControl(null,[Validators.pattern(/^[A-Z]{3}[a-z]{8}$/) ,Validators.required]),

  })

  goOnline(info: FormGroup) {
   this.service.logins(info)
    localStorage.setItem('logins', info.value);
    this.login.reset({});
    this._Router.navigate(['/onlinegames'])



  }


}

