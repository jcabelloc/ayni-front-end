import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAmortizacionCreditoComponent } from './create-amortizacion-credito.component';

describe('CreateAmortizacionCreditoComponent', () => {
  let component: CreateAmortizacionCreditoComponent;
  let fixture: ComponentFixture<CreateAmortizacionCreditoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAmortizacionCreditoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAmortizacionCreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
