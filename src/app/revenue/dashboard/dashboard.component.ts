import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {faArrowCircleUp, faCheckCircle} from '@fortawesome/free-solid-svg-icons';
import { VaidataDialogComponent } from "../vaidata-dialog/vaidata-dialog.component";

@Component({
    selector: "revenue-dashboard",
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

    uploadIcon = faArrowCircleUp;
    validateIcon = faCheckCircle;

    ticketId: string;
    constructor( private dialog: MatDialog ) { }

    ngOnInit(): void { }

    openDialog() {
      const dialogRef = this.dialog.open(VaidataDialogComponent , {
        width: '400px',
        data: {ticketId: this.ticketId}
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
    }
  }


