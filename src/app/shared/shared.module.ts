import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
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
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    RouterModule
  ],
  exports: [SidebarComponent,
     FontAwesomeModule,
     MatInputModule,
     MatSelectModule,
     MatButtonModule,
     MatDialogModule,
     FormsModule,
     ReactiveFormsModule
    ]
})
export class SharedModule { }
