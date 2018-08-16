import { DesembolsoCreditoModule } from './desembolso-credito.module';

describe('DesembolsoCreditoModule', () => {
  let desembolsoCreditoModule: DesembolsoCreditoModule;

  beforeEach(() => {
    desembolsoCreditoModule = new DesembolsoCreditoModule();
  });

  it('should create an instance', () => {
    expect(desembolsoCreditoModule).toBeTruthy();
  });
});
