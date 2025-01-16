import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { RMCharacter } from 'src/app/model/rm-character';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-rick-and-morty',
  templateUrl: './rick-and-morty.page.html',
  styleUrls: ['./rick-and-morty.page.scss'],
  standalone: false,
})
export class RickAndMortyPage implements OnInit {

  characters: RMCharacter[] = []
  currentPage: number = 1

  constructor(
    private apiService: ApiService,
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {
    this.getCharacters(this.currentPage)
  }

  async getCharacters(page: number) {
    const loader = await this.loadingCtrl.create({
      message: 'Cargando personajes...'
    })
    loader.present()

    this.apiService
    .getRickAndMortyCharacters(page)
    .subscribe(res => {
      this.characters = res.results
      loader.dismiss()
    });
  }

  nextPage() {
    this.currentPage++
    this.getCharacters(this.currentPage)
  }

  previusPage() {
    if (this.currentPage > 1) {
      this.currentPage--
      this.getCharacters(this.currentPage)
    }
  }

}
