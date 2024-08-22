import {Component} from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {StarsService} from "../stars.service";
import {Star, StarCreate, StarUpdate} from "../star";
import {TopBarComponent} from "../top-bar/top-bar.component";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";
import Snackbar from "awesome-snackbar/src/snackbar";
import {snackbar_error, snackbar_msg} from "../constants";
import {ConstellationsService} from "../constellations.service";
import {Constellation} from "../constellation";
import {EditConstellationDialogComponent} from "../edit-constellation-dialog/edit-constellation-dialog.component";
import {DeleteEntryDialogComponent} from "../delete-entry-dialog/delete-entry-dialog.component";
import {ConstellationPickerComponent} from "../constellation-picker/constellation-picker.component";

@Component({
    selector: 'app-star-editor',
    standalone: true,
    imports: [
        TopBarComponent,
        ReactiveFormsModule,
        NgIf,
        RouterLink,
        EditConstellationDialogComponent,
        DeleteEntryDialogComponent,
        NgForOf,
        ConstellationPickerComponent
    ],
    templateUrl: './star-editor.component.html',
    styleUrl: './star-editor.component.css'
})
export class StarEditorComponent {
    submit_pressed: boolean = false;
    star_id: string;
    constellations: Constellation[] = [];
    star: Object = {
        name: '',
        right_ascension: Number.NaN,
        declination: Number.NaN,
        diameter: null,
        mass: null,
        visible_size: null,
        distance: null,
        absolute_magnitude: null,
        spectral_class: null,
        constellation_id: null
    };
    starForm: FormGroup = new FormGroup({
        name: new FormControl('', [
            Validators.required
        ]),
        right_ascension: new FormControl('', [
            Validators.required,
            Validators.min(0),
            Validators.max(360)
        ]),
        declination: new FormControl('', [
            Validators.required,
            Validators.min(-90),
            Validators.max(90)
        ]),
        diameter: new FormControl('', [
            Validators.min(0)
        ]),
        mass: new FormControl('', [
            Validators.min(0)
        ]),
        visible_size: new FormControl('', [
            Validators.min(0)
        ]),
        distance: new FormControl('', [
            Validators.min(0)
        ]),
        absolute_magnitude: new FormControl(''),
        spectral_class: new FormControl(''),
        constellation_id: new FormControl(''),
    });

    constructor(
        public starsService: StarsService,
        public constellationsService: ConstellationsService,
        public route: ActivatedRoute,
        public router: Router,
    ) {
        this.star_id = route.snapshot.params['id'];
        if (this.star_id != "new") {
            starsService.read_star(this.star_id).subscribe({
                next: star => {
                    this.star = star;
                    this.SetInputFields(star)
                },
                error: error => {
                    console.error(error)
                    this.router.navigate(['../../**'], {relativeTo: this.route});
                }
            })
        }

        this.starForm.controls['constellation_id'].setValue('')
    }

    SetInputFields(star: Star) {
        this.starForm.patchValue(star)
        if (!this.starForm.controls['constellation_id'].value) {
            this.starForm.controls['constellation_id'].setValue('')
        }
    }

    SubmitStar() {
        this.submit_pressed = true;
        if (!this.starForm.valid) {
            return;
        }
        this.star = this.starForm.getRawValue()
        for (let prop in this.star) {
            if (this.star.hasOwnProperty(prop)) {
                // @ts-ignore
                if (this.star[prop] == '') {
                    // @ts-ignore
                    this.star[prop] = null;
                }
            }
        }
        if (this.star_id == "new") {
            // @ts-ignore
            let starCreate: StarCreate = this.star;
            this.starsService.create_star(starCreate).subscribe({
                next: () => {
                    this.router.navigate(['../../'], {relativeTo: this.route});
                    new Snackbar("The star was created successfully.", snackbar_msg)
                },
                error: error => {
                    console.error(error)
                    new Snackbar("An error occurred when trying to record the star.", snackbar_error)
                }
            })
        } else {
            // @ts-ignore
            let starUpdate: StarUpdate = this.star;
            starUpdate.id = this.star_id;
            this.starsService.update_star(starUpdate).subscribe({
                next: () => {
                    this.router.navigate(['../../'], {relativeTo: this.route});
                    new Snackbar("The star was updated successfully.", snackbar_msg)
                },
                error: error => {
                    console.error(error)
                    new Snackbar("An error occurred when trying to update the star.", snackbar_error)
                }
            })
        }
    }
}
