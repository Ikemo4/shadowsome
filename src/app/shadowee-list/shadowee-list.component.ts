import { Component } from '@angular/core';
import { ShadowPostingComponent } from '../shadow-posting/shadow-posting.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shadowee-list',
  standalone: true,
  imports: [ShadowPostingComponent],
  templateUrl: './shadowee-list.component.html',
  styleUrl: './shadowee-list.component.sass'
})
export class ShadoweeListComponent {
  constructor(private router: Router) {}
  goToShadowPost() {
    this.router.navigateByUrl()
  }
}
