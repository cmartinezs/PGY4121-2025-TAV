import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.page.html',
  styleUrls: ['./geolocation.page.scss'],
  standalone: false,
})
export class GeolocationPage implements OnInit {

  latitude: number = 0
  longitude: number = 0

  constructor() { }

  ngOnInit() {
  }

  getCurrentPosition(){
    Geolocation
      .getCurrentPosition()
      .then(positon => {
        this.latitude = positon.coords.latitude
        this.longitude = positon.coords.longitude
      })

  }
}
