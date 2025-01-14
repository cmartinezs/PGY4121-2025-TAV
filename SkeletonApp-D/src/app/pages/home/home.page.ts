import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {

  loggedUser: string = ''

  constructor() {}

  ngOnInit() {
    this.loggedUser = localStorage.getItem('loggedUser') ?? 'guest'
  }
}
