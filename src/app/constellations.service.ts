import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PaginatedOutput} from "./pagination";
import {Constellation, ConstellationCreate, ConstellationUpdate} from "./constellation";
import {api_base} from "./constants";

@Injectable({
    providedIn: 'root'
})

export class ConstellationsService {
    constructor(private http: HttpClient) {
    }

    read_constellations() {
        return this.http.get<PaginatedOutput>(`${api_base}constellation/`)
    }

    read_constellation(constellation_id: string) {
        return this.http.get<Constellation>(`${api_base}constellation/${constellation_id}/`)
    }

    create_constellation(constellation: ConstellationCreate) {
        return this.http.post<Constellation>(`${api_base}constellation/`, constellation)
    }

    update_constellation(constellation: ConstellationUpdate) {
        return this.http.put<Constellation>(`${api_base}constellation/`, constellation)
    }

    delete_constellation(constellation_id: string) {
        return this.http.delete<Constellation>(`${api_base}constellation/${constellation_id}/`)
    }
}
