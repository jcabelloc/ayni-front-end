import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePersonaNaturalComponent } from './create-persona-natural.component';

describe('CreatePersonaNaturalComponent', () => {
  let component: CreatePersonaNaturalComponent;
  let fixture: ComponentFixture<CreatePersonaNaturalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePersonaNaturalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePersonaNaturalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
