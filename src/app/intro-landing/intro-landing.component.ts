import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro-landing',
  standalone: true,
  imports: [],
  templateUrl: './intro-landing.component.html',
  styleUrl: './intro-landing.component.sass'
})
export class IntroLandingComponent {
  constructor(private router: Router) {}
  goToNextPage(url: string) {
    this.router.navigate([url]);
  }
}
