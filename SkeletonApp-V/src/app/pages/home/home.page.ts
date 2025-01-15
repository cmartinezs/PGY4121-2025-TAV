import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ViewWillEnter } from '@ionic/angular';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements ViewWillEnter{

  loggedUser!: string
  showAditonalInfo: boolean = false
  msgBtnInfo!: string;
  
  constructor(
    private router: Router,
    private sessionService: SessionService
  ) {}

  ionViewWillEnter(): void {
    this.loggedUser = this.sessionService.getUserSession();
    this.showAditonalInfo = this.loggedUser !== 'Invitado'
    this.msgBtnInfo = this.showAditonalInfo ? 'Ocultar info' : 'Mostrar info'
  }

  logout(){
    this.sessionService.removeUserSession();
    this.router.navigateByUrl('/login')
  }

  showInfo(){
    this.showAditonalInfo = !this.showAditonalInfo
    this.msgBtnInfo = this.showAditonalInfo ? 'Ocultar info' : 'Mostrar info'
  }
}
