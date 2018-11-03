import { TestBed, inject } from '@angular/core/testing';

import { RegistroGastoService } from './registro-gasto.service';

describe('RegistroGastoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegistroGastoService]
    });
  });

  it('should be created', inject([RegistroGastoService], (service: RegistroGastoService) => {
    expect(service).toBeTruthy();
  }));
});
