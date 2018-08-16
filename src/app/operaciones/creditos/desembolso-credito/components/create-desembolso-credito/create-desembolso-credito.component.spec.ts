import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDesembolsoCreditoComponent } from './create-desembolso-credito.component';

describe('CreateDesembolsoCreditoComponent', () => {
  let component: CreateDesembolsoCreditoComponent;
  let fixture: ComponentFixture<CreateDesembolsoCreditoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateDesembolsoCreditoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDesembolsoCreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
