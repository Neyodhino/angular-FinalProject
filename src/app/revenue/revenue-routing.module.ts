import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { RevenueComponent } from './revenue.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UploadpaymentComponent } from './uploadPayment/uploadpayment.component';
import { TicketComponent } from './ticket/ticket.component';


const routes: Routes = [
    { path: '', component: RevenueComponent, children: [
      { path: 'dashboard', component: DashboardComponent },
      {path: 'uploadpayment', component: UploadpaymentComponent},
      {path: 'ticket', component: TicketComponent}
    ] }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
     ],
    exports: [RouterModule],
})
export class RevenueRoutingModule {
    static components = [RevenueComponent, DashboardComponent, UploadpaymentComponent, TicketComponent];
}
