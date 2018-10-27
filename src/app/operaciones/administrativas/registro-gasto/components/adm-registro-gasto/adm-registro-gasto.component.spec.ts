import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmRegistroGastoComponent } from './adm-registro-gasto.component';

describe('AdmRegistroGastoComponent', () => {
  let component: AdmRegistroGastoComponent;
  let fixture: ComponentFixture<AdmRegistroGastoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmRegistroGastoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmRegistroGastoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
