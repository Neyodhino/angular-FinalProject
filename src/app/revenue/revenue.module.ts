import { NgModule } from '@angular/core';
import { RevenueRoutingModule } from './revenue-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ RevenueRoutingModule.components ],
  imports: [
    RevenueRoutingModule,
    SharedModule
  ]
})
export class RevenueModule { }
