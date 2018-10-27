import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowRegistroGastoComponent } from './show-registro-gasto.component';

describe('ShowRegistroGastoComponent', () => {
  let component: ShowRegistroGastoComponent;
  let fixture: ComponentFixture<ShowRegistroGastoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowRegistroGastoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowRegistroGastoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
