import { TestBed, inject } from '@angular/core/testing';

import { TraspasoEfectivoService } from './traspaso-efectivo.service';

describe('TraspasoEfectivoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TraspasoEfectivoService]
    });
  });

  it('should be created', inject([TraspasoEfectivoService], (service: TraspasoEfectivoService) => {
    expect(service).toBeTruthy();
  }));
});
