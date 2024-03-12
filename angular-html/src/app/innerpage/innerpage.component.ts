import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
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
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { orderId: 123459, orderDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit', quantity: 1, orderDate: '17-03-2021', status: '<span class="badge badge-warning">Pending</span>' },
  { orderId: 123460, orderDescription: 'Lorem ipsum dolor sit amet consectetur', quantity: 2, orderDate: '28-02-2021', status: '<span class="badge badge-danger">Cancelled</span>' },
  { orderId: 123459, orderDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit', quantity: 1, orderDate: '17-03-2021', status: '<span class="badge badge-warning">Pending</span>' },
  { orderId: 12347, orderDescription: 'Lorem ipsum dolor sit amet consectetur elit', quantity: 2, orderDate: '11-04-2021', status: '<span class="badge badge-success">Delivered</span>' },
  { orderId: 12347, orderDescription: 'Lorem ipsum dolor sit amet consectetur elit', quantity: 2, orderDate: '11-04-2021', status: '<span class="badge badge-success">Delivered</span>' },
  { orderId: 12346, orderDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit', quantity: 5, orderDate: '12-05-2021', status: '<span class="badge badge-success">Delivered</span>' },
  { orderId: 12346, orderDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit', quantity: 5, orderDate: '12-05-2021', status: '<span class="badge badge-success">Delivered</span>' },
  { orderId: 123460, orderDescription: 'Lorem ipsum dolor sit amet consectetur', quantity: 2, orderDate: '28-02-2021', status: '<span class="badge badge-danger">Cancelled</span>' },
  { orderId: 123460, orderDescription: 'Lorem ipsum dolor sit amet consectetur', quantity: 2, orderDate: '28-02-2021', status: '<span class="badge badge-danger">Cancelled</span>' },
  { orderId: 123460, orderDescription: 'Lorem ipsum dolor sit amet consectetur', quantity: 2, orderDate: '28-02-2021', status: '<span class="badge badge-danger">Cancelled</span>' },
  { orderId: 12347, orderDescription: 'Lorem ipsum dolor sit amet consectetur elit', quantity: 2, orderDate: '11-04-2021', status: '<span class="badge badge-success">Delivered</span>' },
  { orderId: 12347, orderDescription: 'Lorem ipsum dolor sit amet consectetur elit', quantity: 2, orderDate: '11-04-2021', status: '<span class="badge badge-success">Delivered</span>' },
  { orderId: 123459, orderDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit', quantity: 1, orderDate: '17-03-2021', status: '<span class="badge badge-warning">Pending</span>' },
  { orderId: 12348, orderDescription: 'Lorem ipsum dolor sit amet', quantity: 1, orderDate: '23-03-2021', status: '<span class="badge badge-warning">Pending</span>' },
  { orderId: 12346, orderDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit', quantity: 5, orderDate: '12-05-2021', status: '<span class="badge badge-success">Delivered</span>' },
  { orderId: 12346, orderDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit', quantity: 5, orderDate: '12-05-2021', status: '<span class="badge badge-success">Delivered</span>' },
  { orderId: 123459, orderDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit', quantity: 1, orderDate: '17-03-2021', status: '<span class="badge badge-warning">Pending</span>' },
  { orderId: 12348, orderDescription: 'Lorem ipsum dolor sit amet', quantity: 1, orderDate: '23-03-2021', status: '<span class="badge badge-warning">Pending</span>' },
  { orderId: 12348, orderDescription: 'Lorem ipsum dolor sit amet', quantity: 1, orderDate: '23-03-2021', status: '<span class="badge badge-warning">Pending</span>' },
  { orderId: 12348, orderDescription: 'Lorem ipsum dolor sit amet', quantity: 1, orderDate: '23-03-2021', status: '<span class="badge badge-warning">Pending</span>' },
];

@Component({
  selector: 'app-innerpage',
  templateUrl: './innerpage.component.html',
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
export class InnerpageComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['orderId', 'orderDescription', 'quantity', 'orderDate', 'status', 'actions'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;

  @ViewChild(MatPaginator) primaryPaginator: MatPaginator;


  constructor(public titleService: Title) {
    this.titleService.setTitle("Innnerpage");
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.primaryPaginator;
  }
}