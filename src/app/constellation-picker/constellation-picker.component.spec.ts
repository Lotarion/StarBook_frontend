import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstellationPickerComponent } from './constellation-picker.component';

describe('ConstellationPickerComponent', () => {
  let component: ConstellationPickerComponent;
  let fixture: ComponentFixture<ConstellationPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConstellationPickerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConstellationPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
