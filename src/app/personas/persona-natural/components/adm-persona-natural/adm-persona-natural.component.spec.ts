import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmPersonaNaturalComponent } from './adm-persona-natural.component';

describe('AdmPersonaNaturalComponent', () => {
  let component: AdmPersonaNaturalComponent;
  let fixture: ComponentFixture<AdmPersonaNaturalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmPersonaNaturalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmPersonaNaturalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
