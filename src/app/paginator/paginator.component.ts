import {Component, Input, OnChanges, output, SimpleChanges} from '@angular/core';
import {NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {Pagination} from "../pagination";

@Component({
    selector: 'app-paginator',
    standalone: true,
    imports: [
        NgForOf,
        NgOptimizedImage,
        NgIf
    ],
    templateUrl: './paginator.component.html',
    styleUrl: './paginator.component.css'
})
export class PaginatorComponent implements OnChanges {
    @Input() total_objects!: number;
    total_pages!: number;
    start!: number
    end!: number
    isFirstPage: boolean = true;
    isLastPage: boolean = false;
    onPaginationChange = output<Pagination>()
    pagination: Pagination = {
        page: 0,
        per_page: 10,
        sorting_parameter: 'name',
        sorting_direction: 'descending'
    };

    constructor() {
        this.UpdateStartEnd()
        this.UpdatePageStatus()
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes['total_objects']) {
            this.UpdateTotalPages()
            this.UpdateStartEnd()
            this.UpdatePageStatus()
        }
    }

    FirstPage() {
        if (this.pagination.page != 0) {
            this.pagination.page = 0
            this.UpdatePagination()
        }
    }

    LastPage() {
        if (this.pagination.page != this.total_pages - 1) {
            this.pagination.page = this.total_pages - 1;
            this.UpdatePagination()
        }
    }

    PreviousPage() {
        if (this.pagination.page > 0) {
            this.pagination.page -= 1
            this.UpdatePagination()
        }
    }

    NextPage() {
        if (this.pagination.page < this.total_pages - 1) {
            this.pagination.page += 1
            this.UpdatePagination()
        }
    }

    UpdatePerPage(value: string) {
        this.pagination.per_page = parseInt(value)
        this.UpdateTotalPages()
        this.UpdatePagination()
    }

    UpdateSortBy(value: string) {
        this.pagination.sorting_parameter = value
        this.UpdatePagination()
    }

    UpdateTotalPages() {
        this.total_pages = Math.ceil(this.total_objects / this.pagination.per_page)
    }

    UpdatePagination() {
        this.onPaginationChange.emit(this.pagination)
        this.UpdateStartEnd()
        this.UpdatePageStatus()
    }

    UpdateStartEnd() {
        this.start = this.pagination.page * this.pagination.per_page + 1
        this.end = Math.min(this.start + this.pagination.per_page - 1, this.total_objects)
    }

    UpdatePageStatus() {
        this.isFirstPage = this.pagination.page == 0;
        this.isLastPage = this.pagination.page == this.total_pages - 1;
    }

    OnSortDirectionChange() {
        if (this.pagination.sorting_direction == 'ascending') {
            this.pagination.sorting_direction = 'descending'
        } else {
            this.pagination.sorting_direction = 'ascending'
        }
        this.UpdatePagination()
    }
}
