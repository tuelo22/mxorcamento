import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrcamentosPage } from './orcamentos.page';

describe('OrcamentosPage', () => {
  let component: OrcamentosPage;
  let fixture: ComponentFixture<OrcamentosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrcamentosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrcamentosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
