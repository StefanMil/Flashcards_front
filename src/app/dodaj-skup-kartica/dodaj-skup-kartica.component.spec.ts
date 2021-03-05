import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DodajSkupKarticaComponent } from './dodaj-skup-kartica.component';

describe('DodajSkupKarticaComponent', () => {
  let component: DodajSkupKarticaComponent;
  let fixture: ComponentFixture<DodajSkupKarticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DodajSkupKarticaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DodajSkupKarticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
