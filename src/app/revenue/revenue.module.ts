import { NgModule } from '@angular/core';
import { RevenueRoutingModule } from './revenue-routing.module';
import { SharedModule } from '../shared/shared.module';
import { VaidataDialogComponent } from './vaidata-dialog/vaidata-dialog.component';

@NgModule({
  declarations: [ RevenueRoutingModule.components, VaidataDialogComponent],
  imports: [
    RevenueRoutingModule,
    SharedModule
  ]
})
export class RevenueModule { }
