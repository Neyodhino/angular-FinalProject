import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: "root"
})
export class DataService {

  constructor(private firestore: AngularFirestore) {

  }

  uploadPayment(formValue) {
    this.firestore.collection('payment_uploads').add(formValue);
  }
}
