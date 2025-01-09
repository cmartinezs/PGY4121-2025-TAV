import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage implements OnInit, AfterViewInit {

  constructor(
    private animationCtrl: AnimationController
  ) { }

  ngAfterViewInit(): void {
    const element = document.querySelector('#animationTitle');
    if(!element) {
      console.log('No se encontró el elemento para animar')
      return;
    }
    this.animationCtrl
      .create()
      .addElement(element)
      .duration(3000)
      .fromTo('opacity', '1', '0.5')
      .fromTo('transform', 'translateX(0px)', 'translateX(100px)')
      .play()
  }

  ngOnInit() {
  }

}
