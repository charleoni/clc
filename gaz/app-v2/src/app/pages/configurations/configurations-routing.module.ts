import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfigurationsPage } from './configurations.page';

const routes: Routes = [
  {
    path: '',
    component: ConfigurationsPage,
    children: [
      {
        path: 'download',
        loadChildren: () => import('./download/download.module').then( m => m.DownloadPageModule)
      },
      {
        path: 'upload',
        loadChildren: () => import('./upload/upload.module').then( m => m.UploadPageModule)
      },
      {
        path: '',
        redirectTo: '/configurations/download',
        pathMatch: 'full'
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfigurationsPageRoutingModule {}
