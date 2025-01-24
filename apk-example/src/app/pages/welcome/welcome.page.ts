import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
  standalone: false
})
export class WelcomePage implements OnInit {

  constructor(private router: Router) {}

  goToScan() {
    this.router.navigate(['/scan']);
  }

  ngOnInit() {
  }

}
