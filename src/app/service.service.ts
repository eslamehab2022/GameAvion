import { HttpClient,  HttpHeaders, HttpParams} from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';HttpHeaders

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  constructor(private _HttpClient: HttpClient  ) { }

    // methods shooterGame get This Date


  shooter(): Observable<any>  {

    let headers = new HttpHeaders().set('X-RapidAPI-Key', 'ad50b2e775msh61c68c891bd09a1p1b3c0bjsn0c6f68a5d70d')
      .set('X-RapidAPI-Host', 'free-to-play-games-database.p.rapidapi.com');
    let Url = 'https://free-to-play-games-database.p.rapidapi.com/api/games';

    return this._HttpClient.get(Url,{headers},)
  }


    // methods onlineGame get This Date

  onlineGame(): Observable<any> {

    let headers = new HttpHeaders().set('X-RapidAPI-Key', 'ad50b2e775msh61c68c891bd09a1p1b3c0bjsn0c6f68a5d70d')
    .set('X-RapidAPI-Host', 'free-to-play-games-database.p.rapidapi.com')
    let Url = 'https://free-to-play-games-database.p.rapidapi.com/api/games';

    return this._HttpClient.get(Url,{headers})


    }

    // methods actionGame get This Date

    actionGame(): Observable<any> {

      let headers = new HttpHeaders().set('X-RapidAPI-Key', 'ad50b2e775msh61c68c891bd09a1p1b3c0bjsn0c6f68a5d70d')
        .set('X-RapidAPI-Host', 'free-to-play-games-database.p.rapidapi.com')

    let Url = 'https://free-to-play-games-database.p.rapidapi.com/api/games';

    return this._HttpClient.get(Url, {headers})


    }


}


