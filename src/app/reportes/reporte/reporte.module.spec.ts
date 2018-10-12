import { ReporteModule } from './reporte.module';

describe('ReporteModule', () => {
  let reporteModule: ReporteModule;

  beforeEach(() => {
    reporteModule = new ReporteModule();
  });

  it('should create an instance', () => {
    expect(reporteModule).toBeTruthy();
  });
});
