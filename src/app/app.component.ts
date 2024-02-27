import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ContactModule } from './contact/contact.module';
import { ProductsModule } from './products/products.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterLinkActive,CommonModule,ContactModule, ProductsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-router-app';

  constructor(private router: Router){}

  goToContact(){
    this.router.navigate(['contact']);
  }
}
