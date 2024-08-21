import {Pagination} from "./pagination";
import {HttpParams} from "@angular/common/http";
import {EarthPosition, StarFilter} from "./star";

export function addPaginationToHttpParams(pagination: Pagination, httpparams: HttpParams = new HttpParams()) {
    httpparams = httpparams.append("page", pagination.page);
    httpparams = httpparams.append("per_page", pagination.per_page);
    httpparams = httpparams.append("sorting_parameter", pagination.sorting_parameter);
    httpparams = httpparams.append("sorting_direction", pagination.sorting_direction);
    return httpparams;
}

export function addFilteringToHttpParams(filter: StarFilter, httpparams: HttpParams = new HttpParams()) {
    httpparams = httpparams.append("filter_by", filter.filter_by)
    if (filter.filter_string) {
        httpparams = httpparams.append("filter_string", filter.filter_string)
    }
    if (filter.filter_range) {
        httpparams = httpparams.append("filter_range", filter.filter_range[0])
        httpparams = httpparams.append("filter_range", filter.filter_range[1])
    }

    return httpparams
}

export function addEarthPositionToHttpParams(position: EarthPosition, httpparams: HttpParams = new HttpParams()) {
    httpparams = httpparams.append("latitude", position.latitude)
    httpparams = httpparams.append("longitude", position.longitude)
    if (position.timestamp) {
        httpparams = httpparams.append("timestamp", position.timestamp)
    }

    return httpparams
}
