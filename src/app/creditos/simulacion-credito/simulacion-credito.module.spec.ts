import { SimulacionCreditoModule } from './simulacion-credito.module';

describe('SimulacionCreditoModule', () => {
  let simulacionCreditoModule: SimulacionCreditoModule;

  beforeEach(() => {
    simulacionCreditoModule = new SimulacionCreditoModule();
  });

  it('should create an instance', () => {
    expect(simulacionCreditoModule).toBeTruthy();
  });
});
