import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthFormsService } from '../auth-forms.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  islogin: boolean = false;
  constructor(private forms: AuthFormsService,private _Router:Router) {


   }

  ngOnInit(): void {

    this.forms.logs.subscribe(() => {

      if (this.forms.logs.getValue()!=null ) {

        this.islogin = true;



      }
      else {
        this.islogin = false;

    }

})

  }



  logout() {
    localStorage.clear();
    this.islogin = false;
    this._Router.navigate(['/Register'])


  }

}
