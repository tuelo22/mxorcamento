import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemNovoPage } from './item-novo.page';

describe('ItemNovoPage', () => {
  let component: ItemNovoPage;
  let fixture: ComponentFixture<ItemNovoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemNovoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemNovoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
