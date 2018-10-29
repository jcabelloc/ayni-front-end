import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchProveedorComponent } from './search-proveedor.component';

describe('SearchProveedorComponent', () => {
  let component: SearchProveedorComponent;
  let fixture: ComponentFixture<SearchProveedorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchProveedorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchProveedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
