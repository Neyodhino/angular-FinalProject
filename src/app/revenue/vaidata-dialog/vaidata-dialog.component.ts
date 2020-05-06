import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  ticketId: string;
}

@Component({
  selector: 'app-vaidata-dialog',
  templateUrl: './vaidata-dialog.component.html',
  styleUrls: ['./vaidata-dialog.component.scss']
})
export class VaidataDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  ngOnInit() {}

}

