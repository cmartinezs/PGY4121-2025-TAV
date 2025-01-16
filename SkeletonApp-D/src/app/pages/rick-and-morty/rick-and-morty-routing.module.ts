import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RickAndMortyPage } from './rick-and-morty.page';

const routes: Routes = [
  {
    path: '',
    component: RickAndMortyPage
  },
  {
    path: 'detail/:id',
    loadChildren: () => import('./detail/detail.module').then( m => m.DetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RickAndMortyPageRoutingModule {}
