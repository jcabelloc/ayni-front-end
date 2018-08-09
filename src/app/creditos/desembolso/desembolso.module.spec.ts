import { DesembolsoModule } from './desembolso.module';

describe('DesembolsoModule', () => {
  let desembolsoModule: DesembolsoModule;

  beforeEach(() => {
    desembolsoModule = new DesembolsoModule();
  });

  it('should create an instance', () => {
    expect(desembolsoModule).toBeTruthy();
  });
});
