import { AdmClienteModule } from './adm-cliente.module';

describe('AdmClienteModule', () => {
  let admClienteModule: AdmClienteModule;

  beforeEach(() => {
    admClienteModule = new AdmClienteModule();
  });

  it('should create an instance', () => {
    expect(admClienteModule).toBeTruthy();
  });
});
