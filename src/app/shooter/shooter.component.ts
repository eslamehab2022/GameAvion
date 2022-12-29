import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-shooter',
  templateUrl: './shooter.component.html',
  styleUrls: ['./shooter.component.scss']
})
export class ShooterComponent implements OnInit {
  loading: boolean = false;

  games: any[] = [];
  constructor( private _service:ServiceService) { }

  ngOnInit(): void {
this.loading=true
    this._service.shooter().subscribe((response) => {
      this.games = response.slice(0, 60);
      this.loading = false;
    }, ((error) => {
      this.loading = true;
    }))






  }

}
