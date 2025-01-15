import { Component } from '@angular/core';
import { ViewWillEnter } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements ViewWillEnter{

  loggedUser!: string
  
  constructor() {}

  ionViewWillEnter(): void {
    this.loggedUser = localStorage.getItem('logged_user') ?? 'Invitado'
  }



}
