import { TestBed, inject } from '@angular/core/testing';

import { SimulacionCreditoService } from './simulacion-credito.service';

describe('SimulacionCreditoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SimulacionCreditoService]
    });
  });

  it('should be created', inject([SimulacionCreditoService], (service: SimulacionCreditoService) => {
    expect(service).toBeTruthy();
  }));
});
