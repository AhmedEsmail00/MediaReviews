import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean = false;
  constructor(private _AuthService: AuthService, private _Router: Router) { }


  logOut() {
    this._AuthService.logOut();
  }
  ngOnInit(): void {
    this._AuthService.userData.subscribe(() => {
      if (this._AuthService.userData.getValue() != null) {
        this.isLoggedIn = true
      }
      else {
        this.isLoggedIn = false;
      }
    }
    )

  }

  setting() {
    this._Router.navigateByUrl('/profile/setting');
  }
  privacy() {
    this._Router.navigateByUrl('/profile/privacy');
    console.log('its works well')
  }


}
