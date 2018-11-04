import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmTraspasoEfectivoComponent } from './adm-traspaso-efectivo.component';

describe('AdmTraspasoEfectivoComponent', () => {
  let component: AdmTraspasoEfectivoComponent;
  let fixture: ComponentFixture<AdmTraspasoEfectivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmTraspasoEfectivoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmTraspasoEfectivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
