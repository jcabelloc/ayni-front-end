import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartSaldoCarteraComponent } from './chart-saldo-cartera.component';

describe('ChartSaldoCarteraComponent', () => {
  let component: ChartSaldoCarteraComponent;
  let fixture: ComponentFixture<ChartSaldoCarteraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartSaldoCarteraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartSaldoCarteraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
