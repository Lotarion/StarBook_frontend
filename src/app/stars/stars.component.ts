import {Component, inject} from '@angular/core';
import {AsyncPipe, NgForOf} from "@angular/common";
import {StarsContainerComponent} from "../stars-container/stars-container.component";
import {StarEntryComponent} from "../star-entry/star-entry.component";
import {StarsService} from "../stars.service";
import {DummyOutput, PaginatedOutput, Pagination} from "../pagination";
import {Observable, share} from "rxjs";
import {PaginatorComponent} from "../paginator/paginator.component";

@Component({
    selector: 'app-stars',
    standalone: true,
    imports: [
        StarsContainerComponent,
        StarEntryComponent,
        NgForOf,
        AsyncPipe,
        PaginatorComponent
    ],
    templateUrl: './stars.component.html',
    styleUrl: './stars.component.css'
})
export class StarsComponent {
    starService: StarsService = inject(StarsService);
    Bundle$!: Observable<PaginatedOutput>;
    Bundle: PaginatedOutput = DummyOutput;
    pagination: Pagination = {
        page: 0,
        per_page: 10,
        sorting_parameter: 'name',
        sorting_direction: 'ascending'
    };

    constructor() {
        this.readStars(this.pagination)
    }

    readStars(pagination: Pagination) {
        this.Bundle$ = this.starService.read_stars(pagination).pipe(share())
        this.Bundle$.subscribe({
            next: value => {
                this.Bundle = value
            },
            error: error => console.log(error)
        });
    }

    UpdatePage(pagination: Pagination) {
        this.pagination = pagination;
        this.readStars(this.pagination)
    }
}

