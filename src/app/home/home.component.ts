import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataService } from '../core/services/data.service';
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private dataService: DataService, private notification: ToastrService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });
  }

  onSubmit(value) {
    if(!value.email || !value.password){
      this.notification.error('Error', 'All fields are required');
    }
    let loginValue = {
      email: value.email + '@admin.com',
      password: value.password
    };
    console.log(loginValue);
    this.dataService.loginUser(loginValue);
  }

}
