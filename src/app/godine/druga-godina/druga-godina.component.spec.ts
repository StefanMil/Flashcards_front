import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrugaGodinaComponent } from './druga-godina.component';

describe('DrugaGodinaComponent', () => {
  let component: DrugaGodinaComponent;
  let fixture: ComponentFixture<DrugaGodinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrugaGodinaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrugaGodinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
