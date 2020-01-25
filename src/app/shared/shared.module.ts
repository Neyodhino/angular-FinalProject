import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ],
  exports: [SidebarComponent, FontAwesomeModule, MatInputModule, MatSelectModule, MatButtonModule, MatDialogModule]
})
export class SharedModule { }
