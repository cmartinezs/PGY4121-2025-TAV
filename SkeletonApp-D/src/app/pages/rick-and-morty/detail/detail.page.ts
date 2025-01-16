import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { RMCharacter } from 'src/app/model/rm-character';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
  standalone: false,
})
export class DetailPage implements OnInit {

  character!: RMCharacter;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private loadingCtrl: LoadingController
  ) { }

  async ngOnInit() {
    const loader = await this.loadingCtrl.create({
      message: 'Cargando personaje...'
    })
    loader.present()

    const id = this.route.snapshot.paramMap.get('id') ?? '1';
    console.log(id);
    this.apiService
    .getRickAndMortyCharacterById(parseInt(id))
    .subscribe(data => {
      this.character = data;
      loader.dismiss()
    })
  }

}
