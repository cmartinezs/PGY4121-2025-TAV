import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { GestureDetail } from '@ionic/angular';
import { GeoData } from 'src/app/model/geo-data';
import { GeoDataService } from 'src/app/services/geo-data.service';

@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.page.html',
  styleUrls: ['./geolocation.page.scss'],
  standalone: false,
})
export class GeolocationPage implements OnInit {

  latitude: number = 0
  longitude: number = 0
  data!: GeoData

  constructor(
    private geoDataService: GeoDataService
  ) { }

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

  getDataLocation(){
    this.geoDataService
      .getGetData(this.latitude, this.longitude)
      .subscribe(data => {
        this.data = data
      })
  }
}
