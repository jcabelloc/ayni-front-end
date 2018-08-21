import { AmortizacionCreditoModule } from './amortizacion-credito.module';

describe('AmortizacionCreditoModule', () => {
  let amortizacionCreditoModule: AmortizacionCreditoModule;

  beforeEach(() => {
    amortizacionCreditoModule = new AmortizacionCreditoModule();
  });

  it('should create an instance', () => {
    expect(amortizacionCreditoModule).toBeTruthy();
  });
});
