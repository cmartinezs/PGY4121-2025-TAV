import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, AnimationController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
  standalone: false,
})
export class SignInPage implements OnInit, AfterViewInit {

  headerTitle: string = 'SkeletonAPP desde NG';
  username!: string;
  password!: string;
  signInInvalidMessage!: string;
  constructor(
    private animationCtrl: AnimationController,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private router: Router,
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

  singIn(){
    console.log(`El nombre de usuario es ${this.username}`)
    console.log(`El contraseña de usuario es ${this.password}`)
    //el usuario esta registrado
    // contraseña coincide

    const singInSuccess = false;

    if(singInSuccess){
      this.router.navigateByUrl("/home");
    } else {
      console.log('Sign In inválido');
      this.signInInvalidMessage = 'Usuario y/o contraseña inválidos'
      this.alertCtrl.create({
        header: 'Sing In Inválido',
        message: 'Usuario y/o contraseña inválidos',
        buttons: ['Ok']
      }).then(a => a.present());

      this.toastCtrl.create({
        duration: 1000,
        header: 'Sing In Inválido',
        message: 'Usuario y/o contraseña inválidos',
        color: 'danger'
      }).then(t => t.present())
    }
  }
}
