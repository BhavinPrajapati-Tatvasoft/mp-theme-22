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

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
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
export class LoginComponent implements OnInit {

  constructor(public titleService: Title) {
    this.titleService.setTitle("Login");
  }

  ngOnInit(): void {
  }

}
