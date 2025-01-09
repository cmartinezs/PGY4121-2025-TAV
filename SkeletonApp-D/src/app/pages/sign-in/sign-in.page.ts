import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
  standalone: false,
})
export class SignInPage implements OnInit, AfterViewInit {

  constructor(
    private animationCtrl: AnimationController
  ) { }

  ngAfterViewInit(): void {
    const el = document.querySelector('#principalTitle')
    
    if (!el) {
      console.log('No existe elemento #principalTitle');
      return;
    }
    
    this.animationCtrl
      .create()
      .addElement(el)
      .duration(3000)
      .fromTo('transform', 'translateX(0px)', 'translateX(100px)')
      .fromTo('opacity', '1', '0.2')
      .play();
  }

  ngOnInit() {
  }

}
