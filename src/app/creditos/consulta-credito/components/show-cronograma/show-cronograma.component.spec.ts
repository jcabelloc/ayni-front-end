import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCronogramaComponent } from './show-cronograma.component';

describe('ShowCronogramaComponent', () => {
  let component: ShowCronogramaComponent;
  let fixture: ComponentFixture<ShowCronogramaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowCronogramaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCronogramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
