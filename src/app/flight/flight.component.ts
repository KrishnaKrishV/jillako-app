import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {
  currentDate;
  date;
  month;
  year;
  show = false;
  months: any = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Augest',
   'September','October', 'Novembere', 'December']
  constructor() { 
    let d = new Date();
     this.date = d.getDate();
     this.month = this.months[d.getMonth()];
    this.year = d.getFullYear()
  }
  onDateChange() {
    this.show = !this.show;
  }
 

  ngOnInit() {
  }

}
