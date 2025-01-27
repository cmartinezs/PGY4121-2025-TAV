import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: 'scan',
    loadChildren: () => import('./pages/scan-coords/scan-coords.module').then( m => m.ScanCoordsPageModule)
  },
  {
    path: 'distance/:lat/:lng',
    loadChildren: () => import('./pages/coords-distance/coords-distance.module').then( m => m.CoordsDistancePageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./pages/welcome/welcome.module').then( m => m.WelcomePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
