import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosDesembolsoCreditoComponent } from './datos-desembolso-credito.component';

describe('DatosDesembolsoCreditoComponent', () => {
  let component: DatosDesembolsoCreditoComponent;
  let fixture: ComponentFixture<DatosDesembolsoCreditoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatosDesembolsoCreditoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosDesembolsoCreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
