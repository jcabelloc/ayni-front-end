import { TestBed, inject } from '@angular/core/testing';

import { AmortizacionCreditoService } from './amortizacion-credito.service';

describe('AmortizacionCreditoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AmortizacionCreditoService]
    });
  });

  it('should be created', inject([AmortizacionCreditoService], (service: AmortizacionCreditoService) => {
    expect(service).toBeTruthy();
  }));
});
