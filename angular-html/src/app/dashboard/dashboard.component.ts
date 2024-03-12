import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {
  trigger,
  style,
  transition,
  query,
  stagger,
  useAnimation,
} from '@angular/animations';
import { fadeInAnimation, fadeUpAnimation } from 'src/app/animation';

export interface PeriodicElement {
  orderId: number;
  orderDescription: string;
  quantity: number;
  orderDate: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { orderId: 12346, orderDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit', quantity: 5, orderDate: '12-05-2021' },
  { orderId: 12347, orderDescription: 'Lorem ipsum dolor sit amet consectetur elit', quantity: 2, orderDate: '11-04-2021' },
  { orderId: 12348, orderDescription: 'Lorem ipsum dolor sit amet', quantity: 1, orderDate: '23-03-2021' },
  { orderId: 123459, orderDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit', quantity: 1, orderDate: '17-03-2021' },
  { orderId: 123460, orderDescription: 'Lorem ipsum dolor sit amet consectetur', quantity: 2, orderDate: '28-02-2021' },
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [],
  animations: [
    trigger('animationIn', [
      transition(':enter', [
        query('.animation-fadeIn', [
          style({ opacity: '0' }),
          stagger(120, [
            useAnimation(fadeInAnimation, { params: { duration: '0.4s', delay: '0.3s' } })
          ])
        ])
      ])
    ]),
    trigger('animationChildIn', [
      transition(':enter', [
        query('.animation-target', [
          style({ opacity: '0' }),
          stagger(120, [
            useAnimation(fadeUpAnimation, { params: { duration: '0.6s', delay: '0.3s', offset: '50px' } })
          ])
        ])
      ]),
    ]),
  ]
})

export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ['orderId', 'orderDescription', 'quantity', 'orderDate', 'actions'];
  dataSource = ELEMENT_DATA;
  constructor(public titleService: Title) {
    this.titleService.setTitle("Dashboard");
  }

  ngOnInit(): void {
  }
}
