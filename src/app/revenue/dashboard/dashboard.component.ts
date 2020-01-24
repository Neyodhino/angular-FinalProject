import { Component, OnInit } from '@angular/core';
import {faArrowCircleUp, faCheckCircle} from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: "revenue-dashboard",
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

    uploadIcon = faArrowCircleUp;
    validateIcon = faCheckCircle;
    constructor() { }

    ngOnInit(): void { }
}


