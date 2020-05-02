import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule) },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'configurations',
    loadChildren: () => import('./pages/configurations/configurations.module').then( m => m.ConfigurationsPageModule)
  },
  {
    path: 'router',
    loadChildren: () => import('./pages/router/router.module').then( m => m.RouterPageModule)
  },
  {
    path: 'prospects',
    loadChildren: () => import('./pages/prospects/prospects.module').then( m => m.ProspectsPageModule)
  },
  {
    path: 'pos-list',
    loadChildren: () => import('./pages/pos-list/pos-list.module').then( m => m.PosListPageModule)
  },
  {
    path: 'pos-visit-list',
    loadChildren: () => import('./pages/pos-visit-list/pos-visit-list.module').then( m => m.PosVisitListPageModule)
  },
  {
    path: 'pos-visit/:id/:code/:branch_code',
    loadChildren: () => import('./pages/pos-visit/pos-visit.module').then( m => m.PosVisitPageModule)
  },
  {
    path: 'pos-modal',
    loadChildren: () => import('./pages/pos-modal/pos-modal.module').then( m => m.PosModalPageModule)
  },
  {
    path: 'change-password',
    loadChildren: () => import('./pages/change-password/change-password.module').then( m => m.ChangePasswordPageModule)
  },
  {
    path: 'remember-password',
    loadChildren: () => import('./pages/remember-password/remember-password.module').then( m => m.RememberPasswordPageModule)
  },
  {
    path: 'terms',
    loadChildren: () => import('./pages/terms/terms.module').then( m => m.TermsPageModule)
  },
  {
    path: 'sales-charts',
    loadChildren: () => import('./pages/sales-charts/sales-charts.module').then( m => m.SalesChartsPageModule)
  },
  {
    path: 'update-user',
    loadChildren: () => import('./pages/update-user/update-user.module').then( m => m.UpdateUserPageModule)
  },
  {
    path: 'accounts-receivable',
    loadChildren: () => import('./pages/accounts-receivable/accounts-receivable.module').then( m => m.AccountsReceivablePageModule)
  },
  {
    path: 'sale-prices',
    loadChildren: () => import('./pages/sale-prices/sale-prices.module').then( m => m.SalePricesPageModule)
  },
  {
    path: 'visit-pos',
    loadChildren: () => import('./pages/visit-pos/visit-pos.module').then( m => m.VisitPosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
