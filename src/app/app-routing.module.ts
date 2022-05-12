import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaExemploComponent } from './pagina-exemplo/pagina-exemplo.component';

const routes: Routes = [
  {
    path: '',
    component: PaginaExemploComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
