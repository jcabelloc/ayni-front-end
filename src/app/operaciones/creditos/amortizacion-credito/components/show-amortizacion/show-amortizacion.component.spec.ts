import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAmortizacionComponent } from './show-amortizacion.component';

describe('ShowAmortizacionComponent', () => {
  let component: ShowAmortizacionComponent;
  let fixture: ComponentFixture<ShowAmortizacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowAmortizacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAmortizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
