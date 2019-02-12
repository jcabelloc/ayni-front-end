import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartMoraComponent } from './chart-mora.component';

describe('ChartMoraComponent', () => {
  let component: ChartMoraComponent;
  let fixture: ComponentFixture<ChartMoraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartMoraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartMoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
