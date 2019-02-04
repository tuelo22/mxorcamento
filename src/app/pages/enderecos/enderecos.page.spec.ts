import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnderecosPage } from './enderecos.page';

describe('EnderecosPage', () => {
  let component: EnderecosPage;
  let fixture: ComponentFixture<EnderecosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnderecosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnderecosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
