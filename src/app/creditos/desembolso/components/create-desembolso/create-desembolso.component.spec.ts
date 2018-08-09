import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDesembolsoComponent } from './create-desembolso.component';

describe('CreateDesembolsoComponent', () => {
  let component: CreateDesembolsoComponent;
  let fixture: ComponentFixture<CreateDesembolsoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateDesembolsoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDesembolsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
