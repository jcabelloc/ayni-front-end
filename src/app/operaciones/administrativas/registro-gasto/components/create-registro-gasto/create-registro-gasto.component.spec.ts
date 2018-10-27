import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRegistroGastoComponent } from './create-registro-gasto.component';

describe('CreateRegistroGastoComponent', () => {
  let component: CreateRegistroGastoComponent;
  let fixture: ComponentFixture<CreateRegistroGastoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateRegistroGastoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRegistroGastoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
