import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarEditorComponent } from './star-editor.component';

describe('StarEditorComponent', () => {
  let component: StarEditorComponent;
  let fixture: ComponentFixture<StarEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StarEditorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
