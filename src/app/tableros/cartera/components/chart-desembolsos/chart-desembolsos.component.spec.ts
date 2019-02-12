import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartDesembolsosComponent } from './chart-desembolsos.component';

describe('ChartDesembolsosComponent', () => {
  let component: ChartDesembolsosComponent;
  let fixture: ComponentFixture<ChartDesembolsosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartDesembolsosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartDesembolsosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
