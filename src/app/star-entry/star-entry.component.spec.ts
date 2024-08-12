import {ComponentFixture, TestBed} from '@angular/core/testing';

import {StarEntryComponent} from './star-entry.component';

describe('StarEntryComponent', () => {
    let component: StarEntryComponent;
    let fixture: ComponentFixture<StarEntryComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [StarEntryComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(StarEntryComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
