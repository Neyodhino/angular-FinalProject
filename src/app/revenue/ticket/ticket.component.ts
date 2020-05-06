import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import * as jsPDF from 'jspdf'
import html2canvas from "html2canvas";

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {

  payeeName: string;
  amount: string;
  market: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.payeeName = this.route.snapshot.paramMap.get('payeeName');
    this.amount = this.route.snapshot.paramMap.get('amount');
    this.market = this.route.snapshot.paramMap.get('market')
  }

  public captureScreen()
  {
    var data = document.getElementById('content');
    html2canvas(data).then(canvas => {
      // Few necessary setting options
      var imgWidth = 150;
      var pageHeight = 295;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/png')
      let pdf = new jsPDF('p', 'mm', 'a5'); // A4 size page of PDF
      var position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
      pdf.save('receipt.pdf'); // Generated PDF
    });
  }

}
