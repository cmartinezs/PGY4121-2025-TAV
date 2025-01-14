import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: false,
})
export class RegisterPage implements OnInit {

  username!: string;
  password!: string;

  constructor() { }

  ngOnInit() {
  }

  register(){

    const user: User = {
      username: this.username,
      password: this.password
    }

    const usersJson = localStorage.getItem('users') ?? '[]'
    let usersData = JSON.parse(usersJson)

    console.log('users from localhost', usersJson)
    console.log('list users', usersData)

    if (usersData && usersData.length > 0) {
      usersData.push(user)
    } else {
      usersData = []
      usersData.push(user)
    }

    localStorage.setItem('users', JSON.stringify(usersData))
  }

}
