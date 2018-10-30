import { AdmCuentaGastoModule } from './adm-cuenta-gasto.module';

describe('AdmCuentaGastoModule', () => {
  let admCuentaGastoModule: AdmCuentaGastoModule;

  beforeEach(() => {
    admCuentaGastoModule = new AdmCuentaGastoModule();
  });

  it('should create an instance', () => {
    expect(admCuentaGastoModule).toBeTruthy();
  });
});
