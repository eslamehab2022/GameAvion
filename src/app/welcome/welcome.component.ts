import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(  private _Router:Router ) { }

  ngOnInit(): void {

  }


  letsGO() {

    this._Router.navigate(['/Register'])
  }
}
