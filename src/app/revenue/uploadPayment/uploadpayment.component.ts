import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { DataService } from "../../core/services/data.service";
import { ToastrService } from "ngx-toastr"

@Component({
  selector: 'revenue-upload',
  templateUrl: './uploadpayment.component.html',
  styleUrls: ['./uploadpayment.component.scss']
})
export class UploadpaymentComponent implements OnInit {

  uploadPaymentForm: FormGroup;
  id: number = 2;
  @ViewChild('content', {static: false}) content: ElementRef;
  constructor(
    private fb: FormBuilder,
    private dataService: DataService,
    private router: Router,
    private notification: ToastrService
  ) { }

  ngOnInit(): void {
    this.uploadPaymentForm = this.fb.group({
      payeeName: ['', Validators.required],
      payeeAddress: ['', Validators.required],
      market: ['', Validators.required],
      amount: ['', Validators.required],
    });
  }

  uploadPayment(formValue){
    this.dataService.uploadPayment(formValue);
    this.router.navigate(['/revenue/ticket', this.uploadPaymentForm.value]);
    this.notification.success('Payment details uploaded successfully', 'Notification')
  }
}
