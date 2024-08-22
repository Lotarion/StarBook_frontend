import {Component, OnDestroy} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {StarsComponent} from "../stars/stars.component";
import {ToolBarComponent} from "../tool-bar/tool-bar.component";
import {TopBarComponent} from "../top-bar/top-bar.component";
import {FilterService} from "../filter.service";
import {Subscription} from "rxjs";
import {EarthPositionService} from "../earth-position.service";

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [
        StarsComponent,
        ToolBarComponent,
        ReactiveFormsModule,
        TopBarComponent
    ],
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnDestroy {
    searchQuery: string = '';
    searchButtonDisabled = true;
    searchForm: FormGroup = new FormGroup({
        search: new FormControl('')
    });
    filterSubscription: Subscription;
    earthPositionSubscription: Subscription;

    constructor(public filterService: FilterService, public earthPositionService: EarthPositionService) {
        this.filterSubscription = filterService.filterSet$.subscribe(filterSet => {
            this.toggleSearch(filterSet);
        })
        this.earthPositionSubscription = earthPositionService.positionSet$.subscribe(positionSet => {
            this.toggleSearch(positionSet)
        })
    }

    ngOnDestroy() {
        this.filterSubscription.unsubscribe();
        this.earthPositionSubscription.unsubscribe();
    }

    toggleSearch(isDisabled: boolean) {
        this.searchButtonDisabled = isDisabled
        if (isDisabled) {
            this.searchForm.get('search')?.setValue('')
            this.searchQuery = ''
            this.searchForm.get('search')?.disable();
        } else {
            this.searchForm.get('search')?.enable();
        }
    }

    SetSearchQuery() {
        this.searchQuery = this.searchForm.controls['search'].value;
    }
}
