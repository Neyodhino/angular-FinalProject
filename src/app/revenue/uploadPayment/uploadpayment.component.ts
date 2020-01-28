import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { DataService } from "../../core/services/data.service";

@Component({
  selector: 'revenue-upload',
  templateUrl: './uploadpayment.component.html',
  styleUrls: ['./uploadpayment.component.scss']
})
export class UploadpaymentComponent implements OnInit {

  uploadPaymentForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private dataService: DataService
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
  }
}
