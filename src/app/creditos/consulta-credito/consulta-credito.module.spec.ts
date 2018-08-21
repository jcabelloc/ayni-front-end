import { ConsultaCreditoModule } from './consulta-credito.module';

describe('ConsultaCreditoModule', () => {
  let consultaCreditoModule: ConsultaCreditoModule;

  beforeEach(() => {
    consultaCreditoModule = new ConsultaCreditoModule();
  });

  it('should create an instance', () => {
    expect(consultaCreditoModule).toBeTruthy();
  });
});
