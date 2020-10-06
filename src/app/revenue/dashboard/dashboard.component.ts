import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {faArrowCircleUp, faCheckCircle} from '@fortawesome/free-solid-svg-icons';
import { VaidataDialogComponent } from '../vaidata-dialog/vaidata-dialog.component';

import { DataService } from '../../core/services/data.service';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: "revenue-dashboard",
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

    uploadIcon = faArrowCircleUp;
    validateIcon = faCheckCircle;

    ticketId: string;
    constructor( private dialog: MatDialog, private dataService: DataService, private notification: ToastrService) { }
    ngOnInit(): void {
    }

    openDialog() {
      const dialogRef = this.dialog.open(VaidataDialogComponent , {
        width: '400px',
        data: {ticketId: this.ticketId}
      });

      dialogRef.afterClosed().subscribe(result => {
        this.ticketId = result;
        console.log(this.ticketId);
        this.dataService.getPayment(this.ticketId).subscribe(doc => {
          console.log(doc);
          if (doc.exists) {
              this.notification.success('Ticket is valid', 'Notification');
            } else {
              this.notification.error('Ticket not valid');
            }
        });
      });
    }
  }



