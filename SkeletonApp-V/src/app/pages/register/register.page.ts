import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: false,
})
export class RegisterPage implements OnInit {

  username!: string;
  password!: string;

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit() {
  }

  register() {
    console.log('Username: ', this.username);
    console.log('Password: ', this.password);
    this.userService.addUser(this.username, this.password);
  }
}
