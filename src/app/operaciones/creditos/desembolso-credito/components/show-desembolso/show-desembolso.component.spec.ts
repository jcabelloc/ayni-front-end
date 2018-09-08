import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDesembolsoComponent } from './show-desembolso.component';

describe('ShowDesembolsoComponent', () => {
  let component: ShowDesembolsoComponent;
  let fixture: ComponentFixture<ShowDesembolsoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowDesembolsoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDesembolsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
