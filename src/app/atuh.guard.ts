import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthFormsService } from './auth-forms.service';
Router
@Injectable({
  providedIn: 'root'
})
export class AtuhGuard implements CanActivate {

  constructor( private service:AuthFormsService, private _router:Router ){}
  canActivate(
    route: ActivatedRouteSnapshot,

    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.service.users.getValue() != null) {
      return true;

    }
    else {


      this._router.navigate(['/Register'])
      return false;

    }

  }

}
