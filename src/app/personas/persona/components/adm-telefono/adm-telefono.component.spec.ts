import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmTelefonoComponent } from './adm-telefono.component';

describe('AdmTelefonoComponent', () => {
  let component: AdmTelefonoComponent;
  let fixture: ComponentFixture<AdmTelefonoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmTelefonoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmTelefonoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
