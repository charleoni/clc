import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  {
    path: "login",
    loadChildren: "./pages/login/login.module#LoginPageModule"
  },
  {
    path: "slider",
    loadChildren: "./pages/slider/slider.module#SliderPageModule"
  },
  { path: "home",
    loadChildren: "./pages/home/home.module#HomePageModule"
  },
  {
    path: "mis-ventas",
    loadChildren: "./pages/mis-ventas/mis-ventas.module#MisVentasPageModule"
  },
  {
    path: "ruta-visitas",
    loadChildren: "./pages/ruta-visitas/ruta-visitas.module#RutaVisitasPageModule"
  },
  {
    path: "puntos-venta",
    loadChildren: "./pages/puntos-venta/puntos-venta.module#PuntosVentaPageModule"
  },
  {
    path: "visita/:id/:code/:branch_office",
    loadChildren: "./pages/visita/visita.module#VisitaPageModule"
  },
  {
    path: "prospectos",
    loadChildren: "./pages/prospectos/prospectos.module#ProspectosPageModule"
  },
  {
    path: "change-password",
    loadChildren: "./pages/change-password/change-password.module#ChangePasswordPageModule"
  },
  {
    path: "configurations",
    loadChildren: "./pages/configurations/configurations.module#ConfigurationsPageModule"
  },
  {
    path: "terms",
    loadChildren: "./pages/terms/terms.module#TermsPageModule"
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
