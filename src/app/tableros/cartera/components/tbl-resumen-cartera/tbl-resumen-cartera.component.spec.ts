import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TblResumenCarteraComponent } from './tbl-resumen-cartera.component';

describe('TblResumenCarteraComponent', () => {
  let component: TblResumenCarteraComponent;
  let fixture: ComponentFixture<TblResumenCarteraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TblResumenCarteraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TblResumenCarteraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
