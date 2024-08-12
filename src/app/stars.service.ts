import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PaginatedOutput, Pagination} from "./pagination";
import {EarthPosition, Star, StarCreate, StarFilter, StarUpdate} from "./star";
import {api_base} from "./constants"
import {addEarthPositionToHttpParams, addFilteringToHttpParams, addPaginationToHttpParams} from "./utils";

@Injectable({
    providedIn: 'root'
})

export class StarsService {
    constructor(private http: HttpClient) {
    }

    read_stars(pagination: Pagination) {
        let parameters = addPaginationToHttpParams(pagination)
        return this.http.get<PaginatedOutput>(`${api_base}star`, {params: parameters})
    }

    read_stars_by_name(name: string, pagination: Pagination) {
        let parameters = addPaginationToHttpParams(pagination)
        parameters = parameters.append("name", name)
        return this.http.get<PaginatedOutput>(`${api_base}star/by_name`, {params: parameters})
    }

    read_stars_by_filter(filter: StarFilter, pagination: Pagination) {
        let parameters = addPaginationToHttpParams(pagination)
        parameters = addFilteringToHttpParams(filter, parameters)
        return this.http.get<PaginatedOutput>(`${api_base}star/filtered`, {params: parameters})
    }

    read_stars_visible(position: EarthPosition, pagination: Pagination) {
        let parameters = addPaginationToHttpParams(pagination)
        parameters = addEarthPositionToHttpParams(position, parameters)
        return this.http.get<PaginatedOutput>(`${api_base}star/visible`, {params: parameters})
    }

    read_star(star_id: string) {
        return this.http.get<Star>(`${api_base}star/${star_id}`)
    }

    create_star(star: StarCreate) {
        return this.http.post<Star>(`${api_base}star`, star)
    }

    update_star(star: StarUpdate) {
        return this.http.put<Star>(`${api_base}star`, star)
    }

    delete_star(star_id: string) {
        return this.http.delete<Star>(`${api_base}star/${star_id}`)
    }
}
