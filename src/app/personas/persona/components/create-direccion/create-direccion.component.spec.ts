import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDireccionComponent } from './create-direccion.component';

describe('CreateDireccionComponent', () => {
  let component: CreateDireccionComponent;
  let fixture: ComponentFixture<CreateDireccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateDireccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDireccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
