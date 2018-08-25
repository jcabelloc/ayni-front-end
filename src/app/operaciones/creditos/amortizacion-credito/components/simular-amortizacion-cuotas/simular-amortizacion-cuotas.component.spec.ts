import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimularAmortizacionCuotasComponent } from './simular-amortizacion-cuotas.component';

describe('SimularAmortizacionCuotasComponent', () => {
  let component: SimularAmortizacionCuotasComponent;
  let fixture: ComponentFixture<SimularAmortizacionCuotasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimularAmortizacionCuotasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimularAmortizacionCuotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
