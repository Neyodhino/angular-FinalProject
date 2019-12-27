import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  { path: 'login', component: HomeComponent },
  { path: 'revenue', loadChildren: () => import('./revenue/revenue.module').then(m => m.RevenueModule)},
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
