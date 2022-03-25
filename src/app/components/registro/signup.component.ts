import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AbstractControl, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/models/user';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})


export class SignupComponent implements ErrorStateMatcher {

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  public showPassword: boolean = false;

  email: any = '';
  pass: any = '';

  matcher = new MyErrorStateMatcher();
  constructor(private router: Router, private readonly userService : UsersService) {}
  isErrorState(control: AbstractControl | null, form: FormGroupDirective | NgForm | null): boolean {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {}

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  ingresar() {
    this.router.navigateByUrl('/jwt/home');
  }

  registrarse(){
    const user = new User({
      email:this.email,
      pass:this.pass
    });

    this.userService.signup(user);
  }
  goToLogin(){
    //this.router.navigateByUrl('')
  }
  enterEmail:any


}
