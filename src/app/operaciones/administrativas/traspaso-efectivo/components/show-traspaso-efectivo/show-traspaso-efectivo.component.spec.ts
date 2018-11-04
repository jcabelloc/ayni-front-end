import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTraspasoEfectivoComponent } from './show-traspaso-efectivo.component';

describe('ShowTraspasoEfectivoComponent', () => {
  let component: ShowTraspasoEfectivoComponent;
  let fixture: ComponentFixture<ShowTraspasoEfectivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowTraspasoEfectivoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowTraspasoEfectivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
