import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PaginatedOutput, Pagination} from "./pagination";
import {Constellation, ConstellationCreate, ConstellationUpdate} from "./constellation";
import {api_base} from "./constants";
import {addPaginationToHttpParams} from "./utils";

@Injectable({
    providedIn: 'root'
})

export class ConstellationsService {
    constructor(private http: HttpClient) {
    }

    read_constellations(pagination: Pagination) {
        let parameters = addPaginationToHttpParams(pagination)
        return this.http.get<PaginatedOutput>(`${api_base}constellation`, {params: parameters})
    }

    read_constellations_by_name(name: string, pagination: Pagination) {
        let parameters = addPaginationToHttpParams(pagination)
        parameters = parameters.append("name", name)
        return this.http.get<PaginatedOutput>(`${api_base}constellation/by_name`, {params: parameters})
    }

    read_constellation(constellation_id: string) {
        return this.http.get<Constellation>(`${api_base}constellation/${constellation_id}`)
    }

    create_constellation(constellation: ConstellationCreate) {
        return this.http.post<Constellation>(`${api_base}constellation/`, constellation)
    }

    update_constellation(constellation: ConstellationUpdate) {
        return this.http.put<Constellation>(`${api_base}constellation/`, constellation)
    }

    delete_constellation(constellation_id: string) {
        return this.http.delete<Constellation>(`${api_base}constellation/${constellation_id}`)
    }
}
