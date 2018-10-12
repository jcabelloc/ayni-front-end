import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RptCarteraCreditosComponent } from './rpt-cartera-creditos.component';

describe('RptCarteraCreditosComponent', () => {
  let component: RptCarteraCreditosComponent;
  let fixture: ComponentFixture<RptCarteraCreditosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RptCarteraCreditosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RptCarteraCreditosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
