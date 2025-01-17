import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, ViewWillEnter } from '@ionic/angular';
import { RMCharacter } from 'src/app/model/rm-character';
import { ApiRmService } from 'src/app/services/api-rm.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
  standalone: false,
})
export class DetailPage implements OnInit, ViewWillEnter {

  character!: RMCharacter;

  constructor(
    private activatedRoute: ActivatedRoute,
    private apirmService: ApiRmService,
    private loadingCtrl: LoadingController
  ) { }

  async ionViewWillEnter() {

    const loader = await this.loadingCtrl.create({
      message: 'Loading...'
    });
    loader.present()

    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.apirmService
        .getCharacter(parseInt(id))
        .subscribe((data) => {
          this.character = data;
          loader.dismiss();
        })
    }
  }

  ngOnInit() {
  }

}
