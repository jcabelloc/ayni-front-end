import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCreditoComponent } from './show-credito.component';

describe('ShowCreditoComponent', () => {
  let component: ShowCreditoComponent;
  let fixture: ComponentFixture<ShowCreditoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowCreditoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
