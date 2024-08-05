import {ComponentFixture, TestBed} from '@angular/core/testing';

import {StarsContainerComponent} from './stars-container.component';

describe('StarsContainerComponent', () => {
    let component: StarsContainerComponent;
    let fixture: ComponentFixture<StarsContainerComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [StarsContainerComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(StarsContainerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
