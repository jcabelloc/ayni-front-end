import { RegistroGastoModule } from './registro-gasto.module';

describe('RegistroGastoModule', () => {
  let registroGastoModule: RegistroGastoModule;

  beforeEach(() => {
    registroGastoModule = new RegistroGastoModule();
  });

  it('should create an instance', () => {
    expect(registroGastoModule).toBeTruthy();
  });
});
