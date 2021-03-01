import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrvaGodinaComponent } from './prva-godina.component';

describe('PrvaGodinaComponent', () => {
  let component: PrvaGodinaComponent;
  let fixture: ComponentFixture<PrvaGodinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrvaGodinaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrvaGodinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
