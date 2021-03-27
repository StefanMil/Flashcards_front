import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkupKarticaStartComponent } from './skup-kartica-start.component';

describe('SkupKarticaStartComponent', () => {
  let component: SkupKarticaStartComponent;
  let fixture: ComponentFixture<SkupKarticaStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkupKarticaStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkupKarticaStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
