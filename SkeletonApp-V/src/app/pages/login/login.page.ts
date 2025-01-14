import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, AnimationController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage implements OnInit, AfterViewInit {

  headerTitle: string = 'SkeletonAPP desde NG';
  subtitle: string = 'Aqui comienza todo';
  welcomeMessage = 'Bienvenidos!';

  username!: string;
  password!: string;

  loginErrorMessage!: string;

  constructor(
    private animationCtrl: AnimationController,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private router: Router,
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
      //.play()
  }

  ngOnInit() {
  }

  async login(){
    console.log(`El usuario es ${this.username}`)
    console.log(`La contraseña es ${this.password}`)

    if( this.username === 'cmartinezs' && this.password === '12345') {
      console.log('Login exitoso')
      this.router.navigateByUrl('/home')
    } else {
      console.log('Login fallido')
      this.loginErrorMessage = 'Login fallido'
      const alert = await this.alertCtrl.create({
        header: 'Error de login',
        message: 'Login fallido',
        buttons: ['ok']
      })
      alert.present()

      const toastPromise = this.toastCtrl.create({
        header: 'Error de login',
        message: 'Login fallido',
        duration: 2000,
      })

      toastPromise.then(toast => toast.present())
    }
  }
}
