import { Component, OnInit } from '@angular/core';
import { faTachometerAlt,
  faChartLine,
  faCreditCard,
  faPlusCircle,
  faArrowAltCircleUp,
  faFilePdf} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  dashboardIcon = faTachometerAlt;
  chartIcon = faChartLine;
  transactionIcon = faCreditCard;
  addIcon = faPlusCircle;
  topupIcon = faArrowAltCircleUp;
  reportIcon = faFilePdf;

  constructor() { }

  ngOnInit() {
  }

}
