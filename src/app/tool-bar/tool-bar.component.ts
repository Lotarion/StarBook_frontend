import {Component, OnDestroy, ViewChild} from '@angular/core';
import {RouterLink} from "@angular/router";
import {SetFilterComponent} from "../set-filter/set-filter.component";
import {FilterService} from "../filter.service";
import {Subscription} from "rxjs";

@Component({
    selector: 'app-tool-bar',
    standalone: true,
    imports: [
        RouterLink,
        SetFilterComponent
    ],
    templateUrl: './tool-bar.component.html',
    styleUrl: './tool-bar.component.css'
})
export class ToolBarComponent implements OnDestroy {
    @ViewChild('setFilterDialog') setFilterDialog!: SetFilterComponent;
    filterSet: boolean = false;
    filterSubscription: Subscription;
    filterButtonStyle: string = 'filter-off';
    visibleStarsButtonStyle: string = 'visible-stars-off';

    constructor(public filterService: FilterService) {
        this.filterSubscription = filterService.filterSet$.subscribe(filterSet => {
            this.filterSet = filterSet;
            if (filterSet) {
                this.filterButtonStyle = 'filter-on'
            }
        });
    }

    ngOnDestroy() {
        this.filterSubscription.unsubscribe();
    }

    onFilterButtonClick() {
        if (!this.filterSet) {
            this.setFilterDialog.open()
        } else {
            this.filterService.setFilter({
                filter_by: '',
                filter_range: [0, 0]
            })
            this.filterButtonStyle = 'filter-off'
        }
    }
}
