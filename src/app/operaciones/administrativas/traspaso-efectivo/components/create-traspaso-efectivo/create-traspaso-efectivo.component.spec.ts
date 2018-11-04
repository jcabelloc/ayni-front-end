import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTraspasoEfectivoComponent } from './create-traspaso-efectivo.component';

describe('CreateTraspasoEfectivoComponent', () => {
  let component: CreateTraspasoEfectivoComponent;
  let fixture: ComponentFixture<CreateTraspasoEfectivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTraspasoEfectivoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTraspasoEfectivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
