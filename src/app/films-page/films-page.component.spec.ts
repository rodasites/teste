import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmsPageComponent } from './films-page.component';

describe('FilmsPageComponent', () => {
  let component: FilmsPageComponent;
  let fixture: ComponentFixture<FilmsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmsPageComponent  ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


});
