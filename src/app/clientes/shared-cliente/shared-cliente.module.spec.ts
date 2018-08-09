import { SharedClienteModule } from './shared-cliente.module';

describe('SharedClienteModule', () => {
  let sharedClienteModule: SharedClienteModule;

  beforeEach(() => {
    sharedClienteModule = new SharedClienteModule();
  });

  it('should create an instance', () => {
    expect(sharedClienteModule).toBeTruthy();
  });
});
