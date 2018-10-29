import { AdmProveedorModule } from './adm-proveedor.module';

describe('AdmProveedorModule', () => {
  let admProveedorModule: AdmProveedorModule;

  beforeEach(() => {
    admProveedorModule = new AdmProveedorModule();
  });

  it('should create an instance', () => {
    expect(admProveedorModule).toBeTruthy();
  });
});
