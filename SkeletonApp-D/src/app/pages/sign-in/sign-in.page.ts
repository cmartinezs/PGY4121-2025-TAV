import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, AnimationController, ToastController } from '@ionic/angular';
import { User } from 'src/app/model/user';

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
  
  users: User[] = [{
    username: 'cmartinezs',
    password: '12345'
  }, {
    username: 'pepito',
    password: '12345'
  }]
  
  constructor(
    private animationCtrl: AnimationController,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private router: Router,
  ) { 

    const usersJson = localStorage.getItem('users') ?? '[]'
    const usersData = JSON.parse(usersJson)

    console.log('users from localhost', usersJson)
    console.log('list users', usersData)

    if (usersData && usersData.length > 0) {
      this.users = usersData
    }

  }

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
    
    const foundUser = this.users.find(u => u.username === this.username)
    let pwdValid = false;
    
    if(foundUser){
      pwdValid = foundUser.password === this.password
    }

    const singInSuccess = foundUser !== undefined && pwdValid;

    if(singInSuccess){
      localStorage.setItem('loggedUser', this.username)
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
        duration: 2000,
        header: 'Sing In Inválido',
        message: 'Usuario y/o contraseña inválidos',
        color: 'danger'
      }).then(t => t.present())
    }
  }
}
