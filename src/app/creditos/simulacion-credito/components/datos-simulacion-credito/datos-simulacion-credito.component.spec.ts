import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosSimulacionCreditoComponent } from './datos-simulacion-credito.component';

describe('DatosSimulacionCreditoComponent', () => {
  let component: DatosSimulacionCreditoComponent;
  let fixture: ComponentFixture<DatosSimulacionCreditoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatosSimulacionCreditoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosSimulacionCreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
