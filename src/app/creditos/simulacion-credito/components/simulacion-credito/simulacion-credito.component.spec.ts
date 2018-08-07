import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulacionCreditoComponent } from './simulacion-credito.component';

describe('SimulacionCreditoComponent', () => {
  let component: SimulacionCreditoComponent;
  let fixture: ComponentFixture<SimulacionCreditoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimulacionCreditoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimulacionCreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
