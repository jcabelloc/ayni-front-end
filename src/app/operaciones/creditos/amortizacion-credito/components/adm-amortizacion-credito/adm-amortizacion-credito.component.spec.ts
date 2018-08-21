import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmAmortizacionCreditoComponent } from './adm-amortizacion-credito.component';

describe('AdmAmortizacionCreditoComponent', () => {
  let component: AdmAmortizacionCreditoComponent;
  let fixture: ComponentFixture<AdmAmortizacionCreditoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmAmortizacionCreditoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmAmortizacionCreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
