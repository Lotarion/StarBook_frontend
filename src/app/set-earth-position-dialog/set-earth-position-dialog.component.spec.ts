import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetEarthPositionDialogComponent } from './set-earth-position-dialog.component';

describe('SetEarthPositionDialogComponent', () => {
  let component: SetEarthPositionDialogComponent;
  let fixture: ComponentFixture<SetEarthPositionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetEarthPositionDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetEarthPositionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
