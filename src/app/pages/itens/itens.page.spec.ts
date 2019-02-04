import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItensPage } from './itens.page';

describe('ItensPage', () => {
  let component: ItensPage;
  let fixture: ComponentFixture<ItensPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItensPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItensPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
