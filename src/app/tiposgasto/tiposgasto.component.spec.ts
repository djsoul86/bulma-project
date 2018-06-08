import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposgastoComponent } from './tiposgasto.component';

describe('TiposgastoComponent', () => {
  let component: TiposgastoComponent;
  let fixture: ComponentFixture<TiposgastoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiposgastoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiposgastoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
