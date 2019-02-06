import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RptOperacionesComponent } from './rpt-operaciones.component';

describe('RptOperacionesComponent', () => {
  let component: RptOperacionesComponent;
  let fixture: ComponentFixture<RptOperacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RptOperacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RptOperacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
