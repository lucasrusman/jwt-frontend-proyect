import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss'],
})
export class CoreComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToHomePage(){
    this.router.navigateByUrl('/jwt/home');
  }

  goToClientsPage() {
    this.router.navigateByUrl('/jwt/clients');
  }

  logout() {
    this.router.navigateByUrl('');
  }
}
