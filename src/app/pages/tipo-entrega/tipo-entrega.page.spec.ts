import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoEntregaPage } from './tipo-entrega.page';

describe('TipoEntregaPage', () => {
  let component: TipoEntregaPage;
  let fixture: ComponentFixture<TipoEntregaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoEntregaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoEntregaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
