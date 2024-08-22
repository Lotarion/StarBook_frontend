import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditConstellationDialogComponent } from './edit-constellation-dialog.component';

describe('EditConstellationDialogComponent', () => {
  let component: EditConstellationDialogComponent;
  let fixture: ComponentFixture<EditConstellationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditConstellationDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditConstellationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
