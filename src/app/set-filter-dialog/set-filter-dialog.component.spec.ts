import { ComponentFixture, TestBed } from '@angular/core/testing';

import {SetFilterDialogComponent} from './set-filter-dialog.component';

describe('SetFilterComponent', () => {
  let component: SetFilterDialogComponent;
  let fixture: ComponentFixture<SetFilterDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetFilterDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetFilterDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
