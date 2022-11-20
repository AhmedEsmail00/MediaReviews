import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
/* forms type  => Reactive forms reuseble maintaince validation complex most use percent 90%
     Template Driven forms  for simple forms use percent 10%
 */
export class RegisterComponent implements OnInit {
    responseData:any[]=[];
  registerForm:FormGroup=new FormGroup({
    first_name:new FormControl(null,[Validators.maxLength(12),Validators.minLength(3),Validators.required]),
    last_name:new FormControl(null,[Validators.maxLength(12),Validators.minLength(3),Validators.required]),
    age:new FormControl(null,[Validators.max(60),Validators.min(16),Validators.required]),
    email:new FormControl(null,[Validators.email,Validators.required]),
    password:new FormControl(null,[Validators.required,Validators.pattern(/^[a-z][0-9]{3}$/)])
  })

  submitForm(){
    if(this.registerForm.invalid){
      return;
    }
    this._AuthService.signUp(this.registerForm.value).subscribe(
      data=>{
        if(data.message=='success'){
        this._Router.navigateByUrl('/login');
        console.log(data)
        }
        else
        {
        alert(data.message)
        console.log(data)
        }
      }
    )
  }



  constructor(private _AuthService:AuthService,private _Router:Router) { }

  ngOnInit(): void {
  }

}
