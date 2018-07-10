import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePersonaNaturalComponent } from './update-persona-natural.component';

describe('UpdatePersonaNaturalComponent', () => {
  let component: UpdatePersonaNaturalComponent;
  let fixture: ComponentFixture<UpdatePersonaNaturalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatePersonaNaturalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePersonaNaturalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
