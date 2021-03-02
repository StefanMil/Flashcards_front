import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredmetiTabelaComponent } from './predmeti-tabela.component';

describe('PredmetiTabelaComponent', () => {
  let component: PredmetiTabelaComponent;
  let fixture: ComponentFixture<PredmetiTabelaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PredmetiTabelaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PredmetiTabelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
