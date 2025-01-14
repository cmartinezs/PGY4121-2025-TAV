import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ViewWillEnter } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements ViewWillEnter {

  loggedUser: string = ''

  firstname!: string;
  lastname!: string;
  edLvl!: string;
  birthday!: string;
  birthdayISO!: string;

  constructor() {}

  ionViewWillEnter() {
    this.loggedUser = localStorage.getItem('loggedUser') ?? 'guest'
    const dataJson = localStorage.getItem(`data_${this.loggedUser}`) ?? '{}'
    const data = JSON.parse(dataJson);
    this.firstname = data.firstname;
    this.lastname = data.lastname;
    this.edLvl = data.edLvl;
    this.birthday = data.birthday;
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

  formatDate() {
    const date = new Date(this.birthdayISO)
    const day = date.getDate().toString().padStart(2, '0')
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const year = date.getFullYear()
    this.birthday = `${day}-${month}-${year}`
  }
}
