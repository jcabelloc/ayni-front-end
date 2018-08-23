import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCuotasPendientesComponent } from './show-cuotas-pendientes.component';

describe('ShowCuotasPendientesComponent', () => {
  let component: ShowCuotasPendientesComponent;
  let fixture: ComponentFixture<ShowCuotasPendientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowCuotasPendientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCuotasPendientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
