import { TraspasoEfectivoModule } from './traspaso-efectivo.module';

describe('TraspasoEfectivoModule', () => {
  let traspasoEfectivoModule: TraspasoEfectivoModule;

  beforeEach(() => {
    traspasoEfectivoModule = new TraspasoEfectivoModule();
  });

  it('should create an instance', () => {
    expect(traspasoEfectivoModule).toBeTruthy();
  });
});
