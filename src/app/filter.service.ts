import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {StarFilter} from "./star";

@Injectable({
    providedIn: 'root'
})
export class FilterService {
    public filter = new BehaviorSubject<StarFilter>({
        filter_by: '',
        filter_range: [0, 0]
    });
    filter$ = this.filter.asObservable();

    public filterSet = new BehaviorSubject<boolean>(false);
    filterSet$ = this.filterSet.asObservable();

    private isFilterSet = false;

    constructor() {
    }

    setFilter(filter: StarFilter) {
        this.filter.next(filter)
        this.isFilterSet = !this.isFilterSet;
        this.filterSet.next(this.isFilterSet);
    }
}
