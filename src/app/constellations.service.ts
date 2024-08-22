import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Constellation, ConstellationCreate, ConstellationUpdate} from "./constellation";
import {api_base} from "./constants";
import {of} from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class ConstellationsService {
    cache!: Constellation[]
    cache_fresh: boolean = false

    constructor(private http: HttpClient) {
    }

    set_cache(list: Constellation[]) {
        this.cache = list;
        this.cache_fresh = true;
    }

    read_constellations() {
        if (this.cache_fresh) {
            return of(this.cache)
        } else {
            return this.http.get<Constellation[]>(`${api_base}constellation/`)
        }
    }

    read_constellation(constellation_id: string) {
        return this.http.get<Constellation>(`${api_base}constellation/${constellation_id}/`)
    }

    create_constellation(constellation: ConstellationCreate) {
        this.cache_fresh = false;
        return this.http.post<Constellation>(`${api_base}constellation/`, constellation)
    }

    update_constellation(constellation: ConstellationUpdate) {
        this.cache_fresh = false;
        return this.http.put<Constellation>(`${api_base}constellation/`, constellation)
    }

    delete_constellation(constellation_id: string) {
        this.cache_fresh = false;
        return this.http.delete<Constellation>(`${api_base}constellation/${constellation_id}/`)
    }
}
