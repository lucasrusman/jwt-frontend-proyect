import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { UsersService } from '../../services/users.service';
import { User } from 'src/app/models/user';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  email:any
  password:any

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  public showPassword: boolean = false;


  matcher = new MyErrorStateMatcher();
  constructor(private router: Router, private readonly userService : UsersService) {}

  ngOnInit(): void {}

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  ingresar() {
    const user = new User({
      email:this.email,
      password:this.password
    });
    this.userService.login(user)

    this.router.navigateByUrl('/jwt/home')
  }

  registrarse(){
    this.router.navigateByUrl('/signup')
  }

  enterEmail:any
}


