import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FilmsDetailComponent } from './films-detail/films-detail.component';
import { FilmsPageComponent } from './films-page/films-page.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({

      declarations: [
        AppComponent,
      ],
      providers: [
        // Other provides...
        { provide: Router, useClass: class { navigate = jasmine.createSpy('navigate'); } }
    ],
    imports: [
        // Other modules...
        RouterTestingModule
    ]
    }).compileComponents();
  }));

});
