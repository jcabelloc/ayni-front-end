import { SharedProveedorModule } from './shared-proveedor.module';

describe('SharedProveedorModule', () => {
  let sharedProveedorModule: SharedProveedorModule;

  beforeEach(() => {
    sharedProveedorModule = new SharedProveedorModule();
  });

  it('should create an instance', () => {
    expect(sharedProveedorModule).toBeTruthy();
  });
});
