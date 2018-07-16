import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTelefonoComponent } from './create-telefono.component';

describe('CreateTelefonoComponent', () => {
  let component: CreateTelefonoComponent;
  let fixture: ComponentFixture<CreateTelefonoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTelefonoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTelefonoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
