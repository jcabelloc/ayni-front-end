import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmDireccionComponent } from './adm-direccion.component';

describe('AdmDireccionComponent', () => {
  let component: AdmDireccionComponent;
  let fixture: ComponentFixture<AdmDireccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmDireccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmDireccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
