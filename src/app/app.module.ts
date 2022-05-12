import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExecutarPromiseComponent } from './executar-promise/executar-promise.component';
import { ExecutarObservableComponent } from './executar-observable/executar-observable.component';
import { PaginaExemploComponent } from './pagina-exemplo/pagina-exemplo.component';

@NgModule({
  declarations: [
    AppComponent,
    ExecutarPromiseComponent,
    ExecutarObservableComponent,
    PaginaExemploComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
