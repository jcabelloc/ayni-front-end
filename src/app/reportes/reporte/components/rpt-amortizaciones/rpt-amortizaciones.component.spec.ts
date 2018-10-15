import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RptAmortizacionesComponent } from './rpt-amortizaciones.component';

describe('RptAmortizacionesComponent', () => {
  let component: RptAmortizacionesComponent;
  let fixture: ComponentFixture<RptAmortizacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RptAmortizacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RptAmortizacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
