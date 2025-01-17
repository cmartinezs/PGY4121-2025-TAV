import { Component, OnInit } from '@angular/core';
import { LoadingController, ViewWillEnter } from '@ionic/angular';
import { RMCharacter } from 'src/app/model/rm-character';
import { ApiRmService } from 'src/app/services/api-rm.service';

@Component({
  selector: 'app-rick-and-morty',
  templateUrl: './rick-and-morty.page.html',
  styleUrls: ['./rick-and-morty.page.scss'],
  standalone: false,
})
export class RickAndMortyPage implements OnInit, ViewWillEnter {

  characters: RMCharacter[] = []
  currentPage: number


  constructor(
    private apiRM: ApiRmService,
    private loadingCtrl: LoadingController
  ) { 
    this.currentPage = 1
  }

  ionViewWillEnter(): void {
    this.getCharacters()
  }

  async getCharacters(){
    const loader = await this.loadingCtrl.create({
      message: 'Loading...'
    });
    loader.present()
    this.apiRM
      .getCharacters(this.currentPage)
      .subscribe(res => {
        console.log(res)
        this.characters = res.results
        loader.dismiss()
      })
  }

  ngOnInit() {
  }

  previusPage() {
    this.currentPage--
    this.getCharacters()
  }

  nextPage() {
    this.currentPage++
    this.getCharacters()
  }

}
