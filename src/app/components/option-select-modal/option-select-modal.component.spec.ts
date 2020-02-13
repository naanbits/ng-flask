import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionSelectModalComponent } from './option-select-modal.component';

describe('OptionSelectModalComponent', () => {
  let component: OptionSelectModalComponent;
  let fixture: ComponentFixture<OptionSelectModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionSelectModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionSelectModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
