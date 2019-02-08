import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponetPopoverOrdernarItensComponent } from './componet-popover-ordernar-itens.component';

describe('ComponetPopoverOrdernarItensComponent', () => {
  let component: ComponetPopoverOrdernarItensComponent;
  let fixture: ComponentFixture<ComponetPopoverOrdernarItensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponetPopoverOrdernarItensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponetPopoverOrdernarItensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
