import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorCheckboxComponent } from './color-checkbox.component';

describe('ColorCheckboxComponent', () => {
  let component: ColorCheckboxComponent;
  let fixture: ComponentFixture<ColorCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorCheckboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
