import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrecaGodinaComponent } from './treca-godina.component';

describe('TrecaGodinaComponent', () => {
  let component: TrecaGodinaComponent;
  let fixture: ComponentFixture<TrecaGodinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrecaGodinaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrecaGodinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
