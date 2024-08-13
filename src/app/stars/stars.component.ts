import {Component} from '@angular/core';
import {StarsContainerComponent} from "../stars-container/stars-container.component";
import {StarEntryComponent} from "../star-entry/star-entry.component";
import {Star} from "../star";
import {NgForOf} from "@angular/common";

@Component({
    selector: 'app-stars',
    standalone: true,
    imports: [
        StarsContainerComponent,
        StarEntryComponent,
        NgForOf
    ],
    templateUrl: './stars.component.html',
    styleUrl: './stars.component.css'
})
export class StarsComponent {
    StarList: Star[] = [
        {
            "name": "Unukalhai",
            "right_ascension": 236.06697546,
            "declination": 6.42563022,
            "diameter": -1.0,
            "mass": -1.0,
            "visible_size": -1.0,
            "distance": -1.0,
            "spectral_class": "Unknown",
            "absolute_magnitude": -1.0,
            "constellation_id": "Unknown",
            "id": "47a4f4f7-a80a-4517-a5c7-889ed2772c5e"
        }, {
            "name": "Diphda",
            "right_ascension": 10.89737874,
            "declination": -17.98660632,
            "diameter": -1.0,
            "mass": -1.0,
            "visible_size": -1.0,
            "distance": -1.0,
            "spectral_class": "Unknown",
            "absolute_magnitude": -1.0,
            "constellation_id": "Unknown",
            "id": "90e61739-bea1-4fae-aae4-f0b9250c68f4"
        }, {
            "name": "Dubhe",
            "right_ascension": 165.93196467,
            "declination": 61.75103469,
            "diameter": -1.0,
            "mass": -1.0,
            "visible_size": -1.0,
            "distance": -1.0,
            "spectral_class": "Unknown",
            "absolute_magnitude": -1.0,
            "constellation_id": "Unknown",
            "id": "67b3f87f-b11f-4d91-b39b-b192306412d8"
        }, {
            "name": "Vega",
            "right_ascension": 279.23473479,
            "declination": 38.78368896,
            "diameter": -1.0,
            "mass": -1.0,
            "visible_size": -1.0,
            "distance": -1.0,
            "spectral_class": "Unknown",
            "absolute_magnitude": -1.0,
            "constellation_id": "Unknown",
            "id": "17fa3f4e-338d-48d9-9516-feb032a1a7e5"
        }, {
            "name": "Enif",
            "right_ascension": 326.04648391,
            "declination": 9.87500865,
            "diameter": -1.0,
            "mass": -1.0,
            "visible_size": -1.0,
            "distance": -1.0,
            "spectral_class": "Unknown",
            "absolute_magnitude": -1.0,
            "constellation_id": "Unknown",
            "id": "aa8180b9-b42c-4568-a690-82972ec79f90"
        }, {
            "name": "Vindemiatrix",
            "right_ascension": 195.54415423,
            "declination": 10.95914872,
            "diameter": -1.0,
            "mass": -1.0,
            "visible_size": -1.0,
            "distance": -1.0,
            "spectral_class": "Unknown",
            "absolute_magnitude": -1.0,
            "constellation_id": "Unknown",
            "id": "b27e3bb1-9487-4001-afa4-cb91bd6b7ba5"
        }, {
            "name": "Zaurak",
            "right_ascension": 59.50735759,
            "declination": -13.50851481,
            "diameter": -1.0,
            "mass": -1.0,
            "visible_size": -1.0,
            "distance": -1.0,
            "spectral_class": "Unknown",
            "absolute_magnitude": -1.0,
            "constellation_id": "152b3819-c0cf-4dfb-a230-c48be975ea01",
            "id": "9015a59c-4879-4af0-9591-7b76115268a7"
        }, {
            "name": "Fomalhaut",
            "right_ascension": 344.41269272,
            "declination": -29.62223703,
            "diameter": -1.0,
            "mass": -1.0,
            "visible_size": -1.0,
            "distance": -1.0,
            "spectral_class": "Unknown",
            "absolute_magnitude": -1.0,
            "constellation_id": "Unknown",
            "id": "00ad227c-0edb-497e-bcd8-c58d19192ce9"
        }, {
            "name": "Betelgeuse",
            "right_ascension": 88.792938991,
            "declination": 7.407063995,
            "diameter": -1.0,
            "mass": -1.0,
            "visible_size": -1.0,
            "distance": -1.0,
            "spectral_class": "M",
            "absolute_magnitude": -1.0,
            "constellation_id": "Unknown",
            "id": "26d66305-9647-4059-8a3c-5df14e771c0d"
        }, {
            "name": "Arcturus",
            "right_ascension": 213.91530029,
            "declination": 19.18240916,
            "diameter": -1.0,
            "mass": -1.0,
            "visible_size": -1.0,
            "distance": -1.0,
            "spectral_class": "Unknown",
            "absolute_magnitude": -1.0,
            "constellation_id": "Unknown",
            "id": "e8c03c6c-f8d1-4cb6-bac1-77b899b61203"
        }];
}
