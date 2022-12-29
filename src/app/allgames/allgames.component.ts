import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-allgames',
  templateUrl: './allgames.component.html',
  styleUrls: ['./allgames.component.scss']
})
export class AllgamesComponent implements OnInit {
  loading: boolean = false;
  action: any[] = [];
  constructor( private _service:ServiceService) { }

  ngOnInit(): void {
  this.loading=true
    this._service.actionGame().subscribe((response) => {
      this.action = response.slice(25, 50);
      this.loading = false;


    }, ((error) => {
      this.loading = true;


    }))
  }

}
