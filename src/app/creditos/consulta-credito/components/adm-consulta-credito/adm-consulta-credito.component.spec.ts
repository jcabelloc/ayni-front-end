import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmConsultaCreditoComponent } from './adm-consulta-credito.component';

describe('AdmConsultaCreditoComponent', () => {
  let component: AdmConsultaCreditoComponent;
  let fixture: ComponentFixture<AdmConsultaCreditoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmConsultaCreditoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmConsultaCreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
