import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CetvrtaGodinaComponent } from './cetvrta-godina.component';

describe('CetvrtaGodinaComponent', () => {
  let component: CetvrtaGodinaComponent;
  let fixture: ComponentFixture<CetvrtaGodinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CetvrtaGodinaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CetvrtaGodinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
