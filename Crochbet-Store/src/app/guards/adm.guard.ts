import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AdmGuard implements CanActivate {

  constructor(private router: Router) {
    
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let rol = sessionStorage.getItem('rol');

    if (rol == environment.roles[2]) {
      return true;
    } else {
      this.router.navigate(['']);
      return false;
    }
  }

}
