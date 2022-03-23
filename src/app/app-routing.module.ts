import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './components/clients/clients.component';
import { CoreComponent } from './components/core/core.component';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/registro/signup.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'jwt',
    component: CoreComponent,
    children: [
      { path: 'home', component: HomeComponentComponent },
      { path: 'clients', component: ClientsComponent }
    ],
  },
  {path:'signup', component: SignupComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
