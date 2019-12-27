import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { RevenueComponent } from './revenue.component';

const routes: Routes = [
    { path: '', component: RevenueComponent }
]

@NgModule({
    imports: [ 
        CommonModule,
        RouterModule.forChild(routes)
     ],
    exports: [RouterModule],
})
export class RevenueRoutingModule {
    static components = [RevenueComponent]
}