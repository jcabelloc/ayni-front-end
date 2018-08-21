import { TestBed, inject } from '@angular/core/testing';

import { ConsultaCreditoService } from './consulta-credito.service';

describe('ConsultaCreditoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConsultaCreditoService]
    });
  });

  it('should be created', inject([ConsultaCreditoService], (service: ConsultaCreditoService) => {
    expect(service).toBeTruthy();
  }));
});
