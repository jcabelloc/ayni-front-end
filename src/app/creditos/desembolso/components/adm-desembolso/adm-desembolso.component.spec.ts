import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmDesembolsoComponent } from './adm-desembolso.component';

describe('AdmDesembolsoComponent', () => {
  let component: AdmDesembolsoComponent;
  let fixture: ComponentFixture<AdmDesembolsoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmDesembolsoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmDesembolsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
