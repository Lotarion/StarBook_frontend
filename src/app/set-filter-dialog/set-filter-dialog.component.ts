import {Component, ViewChild} from '@angular/core';
import {DialogWrapperComponent} from "../dialog-wrapper/dialog-wrapper.component";
import {FormsModule} from "@angular/forms";
import {KeyValuePipe, NgForOf, NgIf} from "@angular/common";
import {StarFilter} from "../star";
import {FilterService} from "../filter.service";

@Component({
    selector: 'app-set-filter-dialog',
    standalone: true,
    imports: [
        DialogWrapperComponent,
        KeyValuePipe,
        FormsModule,
        NgForOf,
        NgIf
    ],
    templateUrl: './set-filter-dialog.component.html',
    styleUrl: './set-filter-dialog.component.css'
})
export class SetFilterDialogComponent {
    @ViewChild('wrapper') wrapper!: DialogWrapperComponent;
    filter: StarFilter;
    confirm_pressed = false;
    FILTER_PARAMS = {
        spectral_class: 'Spectral Class',
        diameter: 'Diameter',
        mass: 'Mass',
        distance: 'Distance',
        absolute_magnitude: 'Absolute magnitude',
        visible_size: 'Apparent magnitude'
    }

    constructor(public filterService: FilterService) {
        this.filter = {
            filter_by: 'spectral_class',
            filter_range: [0, 1]
        }
    }

    open() {
        this.filter = {
            filter_by: 'spectral_class',
            filter_range: [0, 1]
        }
        this.wrapper.open();
    }

    setFilter() {
        this.confirm_pressed = true;
        if (this.filter.filter_range[0] > this.filter.filter_range[1]) {
            return;
        }
        this.filterService.setFilter(this.filter);

        this.wrapper.close()
    }

    cancel() {
        this.wrapper.close()
    }
}
