import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItensVazioPage } from './itens-vazio.page';

describe('ItensVazioPage', () => {
  let component: ItensVazioPage;
  let fixture: ComponentFixture<ItensVazioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItensVazioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItensVazioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
