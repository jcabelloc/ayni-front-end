import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulacionCronogramaComponent } from './simulacion-cronograma.component';

describe('SimulacionCronogramaComponent', () => {
  let component: SimulacionCronogramaComponent;
  let fixture: ComponentFixture<SimulacionCronogramaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimulacionCronogramaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimulacionCronogramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
