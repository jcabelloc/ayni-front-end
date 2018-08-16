import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmDesembolsoCreditoComponent } from './adm-desembolso-credito.component';

describe('AdmDesembolsoCreditoComponent', () => {
  let component: AdmDesembolsoCreditoComponent;
  let fixture: ComponentFixture<AdmDesembolsoCreditoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmDesembolsoCreditoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmDesembolsoCreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
