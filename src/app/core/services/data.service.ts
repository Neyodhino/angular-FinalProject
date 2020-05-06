import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private firestore: AngularFirestore, private afAuth: AngularFireAuth, private router: Router, private toastr: ToastrService) {

  }

  uploadPayment(formValue) {
    this.firestore.collection('payment_uploads').add(formValue);
  }

  getPayment(id: string) {
    return this.firestore.collection('payment_uploads').doc(id).get();
  }
  loginUser(value): any {
    this.afAuth.auth.signInWithEmailAndPassword(value.email, value.password)
      .then(_ => {
        this.router.navigate(['revenue/dashboard']);
        this.toastr.success('You are Logged in successfully', 'Notification!');
      })
      .catch((err) => {
        console.log(err);
        this.toastr.error(err.message, 'Notification');
      });
  }
}
