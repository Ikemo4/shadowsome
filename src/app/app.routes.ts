import { IntroLandingComponent } from './intro-landing/intro-landing.component';
import { ShadoweeListComponent } from './shadowee-list/shadowee-list.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'intro', component: IntroLandingComponent},
    { path: 'shadowees', component: ShadoweeListComponent },
    { path: '', redirectTo: 'intro', pathMatch: 'full'},
    // to-do { path: '**', component: PageNotFoundComponent }
];
