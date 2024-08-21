import {Component, inject, Input, OnChanges, SimpleChanges} from '@angular/core';
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
export class StarsComponent implements OnChanges {
    starService: StarsService = inject(StarsService);
    Bundle$!: Observable<PaginatedOutput>;
    Bundle: PaginatedOutput = DummyOutput;
    pagination: Pagination = {
        page: 0,
        per_page: 10,
        sorting_parameter: 'name',
        sorting_direction: 'descending'
    };
    @Input() searchQuery!: string;

    constructor() {
        this.readStars(this.pagination)
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes['searchQuery']) {
            this.UpdatePage()
        }
    }

    readStars(pagination: Pagination) {
        this.Bundle$ = this.starService.read_stars(pagination).pipe(share())
        this.BundleSubscribe()
    }

    readStarsByName(name: string, pagination: Pagination) {
        this.Bundle$ = this.starService.read_stars_by_name(name, pagination).pipe(share())
        this.BundleSubscribe()
    }

    BundleSubscribe() {
        this.Bundle$.subscribe({
            next: value => {
                this.Bundle = value
            },
            error: error => console.log(error)
        });
    }

    UpdatePagination(pagination: Pagination) {
        this.pagination = pagination;
        this.UpdatePage()
    }

    UpdatePage() {
        if (this.searchQuery) {
            this.readStarsByName(this.searchQuery, this.pagination)
        } else {
            this.readStars(this.pagination)
        }
    }
}

