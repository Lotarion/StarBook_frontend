import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {StarsService} from "../stars.service";
import {Star, StarCreate} from "../star";
import {TopBarComponent} from "../top-bar/top-bar.component";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
    selector: 'app-star-editor',
    standalone: true,
    imports: [
        TopBarComponent,
        ReactiveFormsModule,
        NgIf
    ],
    templateUrl: './star-editor.component.html',
    styleUrl: './star-editor.component.css'
})
export class StarEditorComponent {
    star_id: string;
    star: StarCreate | Star = {
        name: '',
        right_ascension: Number.NaN,
        declination: Number.NaN,
        diameter: Number.NaN,
        mass: Number.NaN,
        visible_size: Number.NaN,
        distance: Number.NaN,
        absolute_magnitude: Number.NaN,
        spectral_class: '',
        constellation_id: ''
    };
    starForm: FormGroup = new FormGroup({
        name: new FormControl('', [
            Validators.required
        ]),
        right_ascension: new FormControl('', [
            Validators.required,
            Validators.pattern("[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)"),
            Validators.min(0),
            Validators.max(360)
        ]),
        declination: new FormControl('', [
            Validators.required,
            Validators.pattern("[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)"),
            Validators.min(-90),
            Validators.max(90)
        ]),
        diameter: new FormControl('', [
            Validators.pattern("[-+]?([0-9]+([.][0-9]*)?|[.][0-9]+)"),
            Validators.min(0)
        ]),
        mass: new FormControl('', [
            Validators.pattern("[-+]?([0-9]+([.][0-9]*)?|[.][0-9]+)"),
            Validators.min(0)
        ]),
        visible_size: new FormControl('', [
            Validators.pattern("[-+]?([0-9]+([.][0-9]*)?|[.][0-9]+)"),
            Validators.min(0)
        ]),
        distance: new FormControl('', [
            Validators.pattern("[-+]?([0-9]+([.][0-9]*)?|[.][0-9]+)"),
            Validators.min(0)
        ]),
        absolute_magnitude: new FormControl('', [
            Validators.pattern("[-+]?([0-9]+([.][0-9]*)?|[.][0-9]+)"),
            Validators.min(-0.99)
        ]),
        spectral_class: new FormControl('')
    });

    constructor(public starsService: StarsService, public route: ActivatedRoute) {
        this.star_id = route.snapshot.params['id'];
        if (this.star_id != "new") {
            starsService.read_star(this.star_id).subscribe({
                next: star => {
                    this.star = star;
                },
                error: error => console.error(error)
            })
        }
    }
}
