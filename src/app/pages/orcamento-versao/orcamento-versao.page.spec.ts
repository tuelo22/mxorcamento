import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrcamentoVersaoPage } from './orcamento-versao.page';

describe('OrcamentoVersaoPage', () => {
  let component: OrcamentoVersaoPage;
  let fixture: ComponentFixture<OrcamentoVersaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrcamentoVersaoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrcamentoVersaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
