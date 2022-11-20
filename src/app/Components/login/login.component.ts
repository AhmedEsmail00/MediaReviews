import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _AuthService: AuthService, private _Router: Router, private _ToastrService: ToastrService) { }


  signInForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, [Validators.required, Validators.pattern(/^[a-z][0-9]{3}$/)])
  })

  submitForm() {
    if (this.signInForm.invalid) {
      return;
    }
    this._AuthService.signIn(this.signInForm.value).subscribe(
      data => {
        if (data.message == 'success') {
          localStorage.setItem('token', data.token)
          this._AuthService.saveUserData();
          this._Router.navigateByUrl('/home');
          this._ToastrService.success('Your Are Logged In Successfly', 'Success');
          // console.log(data)
          // console.log(data.token)
        }
        else {
          this._ToastrService.error(data.message, 'Failed');
          // console.log(data)
        }
      }
    )
  }



  ngOnInit(): void {
  }

}
