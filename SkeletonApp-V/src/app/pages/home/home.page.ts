import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ViewWillEnter } from '@ionic/angular';
import { LocalStorageService } from 'src/app/services/local-storage.service';
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

  firstname!: string;
  lastname!: string;
  edLvl!: string;
  birthday!: string;
  birthdayISO!: string;
  
  constructor(
    private router: Router,
    private sessionService: SessionService,
    private localStorageService: LocalStorageService,
    private alertCtrl: AlertController
  ) {}

  ionViewWillEnter(): void {
    this.loggedUser = this.sessionService.getUserSession();
    this.showAditonalInfo = this.loggedUser !== 'Invitado'
    this.msgBtnInfo = this.showAditonalInfo ? 'Ocultar info' : 'Mostrar info'
    const data = this.localStorageService.get(`data_${this.loggedUser}`)
    this.firstname = data?.firstname || ''
    this.lastname = data?.lastname || ''
    this.edLvl = data?.edLvl || ''
    this.birthday = data?.birthday || ''
  }

  confirmLogout(){
    this.alertCtrl.create({
      header: 'Cerrar sesión',
      message: '¿Estás seguro de cerrar sesión?',
      buttons: [
        {
          text: 'No',
          role: 'cancel'
        },
        {
          text: 'Si',
          handler: () => this.logout()
        }
      ]
    }).then(alert => alert.present())
  }

  logout(){
    this.sessionService.removeUserSession();
    this.router.navigateByUrl('/login')
  }

  showInfo(){
    this.showAditonalInfo = !this.showAditonalInfo
    this.msgBtnInfo = this.showAditonalInfo ? 'Ocultar info' : 'Mostrar info'
  }

  formatDate() {
    const date = new Date(this.birthdayISO)
    const day = date.getDate().toString().padStart(2, '0')
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const year = date.getFullYear()
    this.birthday = `${day}-${month}-${year}`
  }

  save(){
    const data = {
      firstname: this.firstname,
      lastname: this.lastname,
      edLvl: this.edLvl,
      birthday: this.birthday
    }

    localStorage.setItem(`data_${this.loggedUser}`, JSON.stringify(data))
  }
}
