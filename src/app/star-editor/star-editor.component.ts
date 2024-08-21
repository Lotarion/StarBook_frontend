import {Component} from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {StarsService} from "../stars.service";
import {Star, StarCreate, StarUpdate} from "../star";
import {TopBarComponent} from "../top-bar/top-bar.component";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";
import Snackbar from "awesome-snackbar/src/snackbar";
import {snackbar_error, snackbar_msg} from "../constants";
import {DialogService} from "../dialog.service";

@Component({
    selector: 'app-star-editor',
    standalone: true,
    imports: [
        TopBarComponent,
        ReactiveFormsModule,
        NgIf,
        RouterLink
    ],
    templateUrl: './star-editor.component.html',
    styleUrl: './star-editor.component.css'
})
export class StarEditorComponent {
    submit_pressed: boolean = false;
    star_id: string;
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
        spectral_class: new FormControl('')
    });

    constructor(
        public starsService: StarsService,
        public route: ActivatedRoute,
        public router: Router,
        public dialogService: DialogService,
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
    }

    SetInputFields(star: Star) {
        this.starForm.patchValue(star)
    }

    cancelDialog() {
        if (!this.starForm.pristine) {
            this.dialogService.open({
                message: "Are you sure you want to close without saving? All changes will be discarded",
                cancelVisible: true,
                confirmHandler: () => this.router.navigate(['../../'], {relativeTo: this.route})
            })
        } else {
            this.router.navigate(['../../'], {relativeTo: this.route});
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
