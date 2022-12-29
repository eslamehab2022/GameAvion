import { HttpClient, JsonpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthFormsService {

  logs = new BehaviorSubject(null);
  users = new BehaviorSubject(null);
  docs: any;
  head: any;
  constructor() {
    if (localStorage.getItem('fors') != null) {
  }

   }



  formReg(us:FormGroup) {

    this.docs = us.value;
    localStorage.setItem('fors', JSON.stringify(this.docs))
    this.users.next(this.docs)


  }


  logins( go:FormGroup) {

    this.head = go.value
   localStorage.setItem('login', this.head)
   this.logs.next(this.head)
}



}
