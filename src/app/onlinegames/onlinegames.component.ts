import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';



@Component({
  selector: 'app-onlinegames',
  templateUrl: './onlinegames.component.html',
  styleUrls: ['./onlinegames.component.scss']
})
export class OnlinegamesComponent implements OnInit {
  loading: boolean = false;
  online: any[] = [];

  constructor(  private _Service:ServiceService ) { }

  ngOnInit(): void {
   this.loading=true
    this._Service.onlineGame().subscribe((response) => {
      this.online = response.slice(20, 70);
      this.loading = false;

    }, ((error) => {

      this.loading = false;

    }))
  }

}
