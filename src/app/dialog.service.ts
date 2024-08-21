import {Injectable} from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";
import {DialogConfig} from "./dialog-config";

@Injectable({
    providedIn: 'root'
})
export class DialogService {
    constructor() {
    }
    
    // @ts-ignore
    private config$: Subject<DialogConfig> = new BehaviorSubject<DialogConfig>(null);

    get config() {
        return this.config$.asObservable();
    }

    open(config: DialogConfig) {
        console.log(config)
        this.config$.next(config);
    }
}
