import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { provideRoutes, RouterModule} from '@angular/router';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FilmsPageComponent } from './films-page/films-page.component';
import { appRoutes } from '../app.routes';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilmsPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { useHash : true }),
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
