import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnderecosClientePage } from './enderecos-cliente.page';

describe('EnderecosClientePage', () => {
  let component: EnderecosClientePage;
  let fixture: ComponentFixture<EnderecosClientePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnderecosClientePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnderecosClientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
