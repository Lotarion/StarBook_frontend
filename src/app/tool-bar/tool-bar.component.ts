import {Component, OnDestroy, ViewChild} from '@angular/core';
import {RouterLink} from "@angular/router";
import {SetFilterDialogComponent} from "../set-filter-dialog/set-filter-dialog.component";
import {FilterService} from "../filter.service";
import {Subscription} from "rxjs";
import {EarthPositionService} from "../earth-position.service";
import {SetEarthPositionDialogComponent} from "../set-earth-position-dialog/set-earth-position-dialog.component";

@Component({
    selector: 'app-tool-bar',
    standalone: true,
    imports: [
        RouterLink,
        SetFilterDialogComponent,
        SetEarthPositionDialogComponent
    ],
    templateUrl: './tool-bar.component.html',
    styleUrl: './tool-bar.component.css'
})
export class ToolBarComponent implements OnDestroy {
    @ViewChild('setFilterDialog') setFilterDialog!: SetFilterDialogComponent;
    @ViewChild('setPositionDialog') setPositionDialog!: SetEarthPositionDialogComponent;
    filterSet: boolean = false;
    filterSubscription: Subscription;
    filterButtonStyle: string = 'filter-off';
    visibleStarsButtonStyle: string = 'visible-stars-off';
    earthPositionSet: boolean = false;
    earthPositionSubscription: Subscription;


    constructor(public filterService: FilterService, public earthPositionService: EarthPositionService) {
        this.filterSubscription = filterService.filterSet$.subscribe(filterSet => {
            this.filterSet = filterSet;
            if (filterSet) {
                this.filterButtonStyle = 'filter-on'
            }
        });
        this.earthPositionSubscription = earthPositionService.positionSet$.subscribe(positionSet => {
            this.earthPositionSet = positionSet;
            if (positionSet) {
                this.visibleStarsButtonStyle = 'visible-stars-on';
            }
        })
    }

    ngOnDestroy() {
        this.filterSubscription.unsubscribe();
        this.earthPositionSubscription.unsubscribe();
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

    onVisibleStarsButtonClick() {
        if (!this.earthPositionSet) {
            this.setPositionDialog.open()
        } else {
            this.earthPositionService.setPosition({
                latitude: 0,
                longitude: 0,
                date: '',
                time: ''
            })
            this.visibleStarsButtonStyle = 'visible-stars-off'
        }
    }
}
