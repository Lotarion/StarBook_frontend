import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {EarthPosition} from "./star";

@Injectable({
    providedIn: 'root'
})
export class EarthPositionService {
    public position = new BehaviorSubject<EarthPosition>({
        latitude: 0,
        longitude: 0,
        date: '',
        time: ''
    })
    position$ = this.position.asObservable();

    public positionSet = new BehaviorSubject<boolean>(false)
    positionSet$ = this.positionSet.asObservable();

    private isPositionSet = false;

    constructor() {
    }

    setPosition(position: EarthPosition) {
        this.position.next(position);
        this.isPositionSet = !(position.date == '' || position.time == '');
        this.positionSet.next(this.isPositionSet);
    }
}
