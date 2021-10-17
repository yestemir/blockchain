import {Component, Input, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {Product} from '../product';
import {min} from 'rxjs/operators';

@Component({
  selector: 'app-order-status',
  templateUrl: './order-status.component.html',
  styleUrls: ['./order-status.component.css']
})
export class OrderStatusComponent implements OnInit {

  status: string;
  statuses: string[] = ['Processing...', 'Heading off', 'On the way', 'Sent', 'Delivered!'];

  constructor(private location: Location) {
  }

  ngOnInit(): void {
    this.getStatus();
  }

  getStatus() {
    this.status = this.statuses[this.getRandomInt(0, this.statuses.length - 1)];
    return this.statuses[this.getRandomInt(0, this.statuses.length - 1)];
  }

  getRandomInt(mini, max) {
    mini = Math.ceil(mini);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - mini + 1)) + mini;
  }


  goBack(): void {
    this.location.back();
  }

}
