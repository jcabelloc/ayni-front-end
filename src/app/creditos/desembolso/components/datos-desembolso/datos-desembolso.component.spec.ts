import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosDesembolsoComponent } from './datos-desembolso.component';

describe('DatosDesembolsoComponent', () => {
  let component: DatosDesembolsoComponent;
  let fixture: ComponentFixture<DatosDesembolsoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatosDesembolsoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosDesembolsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
