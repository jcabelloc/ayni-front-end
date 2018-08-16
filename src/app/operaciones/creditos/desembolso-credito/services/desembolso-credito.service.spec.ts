import { TestBed, inject } from '@angular/core/testing';

import { DesembolsoCreditoService } from './desembolso-credito.service';

describe('DesembolsoCreditoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DesembolsoCreditoService]
    });
  });

  it('should be created', inject([DesembolsoCreditoService], (service: DesembolsoCreditoService) => {
    expect(service).toBeTruthy();
  }));
});
