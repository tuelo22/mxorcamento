import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentPopoverOrdernarComponent } from './component-popover-ordernar.component';

describe('ComponentPopoverOrdernarComponent', () => {
  let component: ComponentPopoverOrdernarComponent;
  let fixture: ComponentFixture<ComponentPopoverOrdernarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentPopoverOrdernarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentPopoverOrdernarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
