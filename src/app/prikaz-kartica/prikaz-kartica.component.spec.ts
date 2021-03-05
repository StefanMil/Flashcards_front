import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrikazKarticaComponent } from './prikaz-kartica.component';

describe('PrikazKarticaComponent', () => {
  let component: PrikazKarticaComponent;
  let fixture: ComponentFixture<PrikazKarticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrikazKarticaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrikazKarticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
