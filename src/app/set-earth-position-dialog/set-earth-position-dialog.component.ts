import {Component, ViewChild} from '@angular/core';
import {DialogWrapperComponent} from "../dialog-wrapper/dialog-wrapper.component";
import {EarthPosition} from "../star";
import {EarthPositionService} from "../earth-position.service";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
    selector: 'app-set-earth-position-dialog',
    standalone: true,
    imports: [
        DialogWrapperComponent,
        FormsModule,
        ReactiveFormsModule
    ],
    templateUrl: './set-earth-position-dialog.component.html',
    styleUrl: './set-earth-position-dialog.component.css'
})
export class SetEarthPositionDialogComponent {
    @ViewChild('wrapper') wrapper!: DialogWrapperComponent;
    position: EarthPosition;
    confirm_pressed = false;
    earthPositionForm: FormGroup = new FormGroup({
        latitude: new FormControl('', [
            Validators.required,
            Validators.min(-90),
            Validators.max(90)
        ]),
        longitude: new FormControl('', [
            Validators.required,
            Validators.min(-180),
            Validators.max(180)
        ]),
        date: new FormControl('', [
            Validators.required,
        ]),
        time: new FormControl('', [
            Validators.required,
        ])
    })

    constructor(public earthPositionService: EarthPositionService) {
        let date = new Date();
        this.position = {
            latitude: 0,
            longitude: 0,
            date: date.toISOString().substring(0, 10),
            time: date.toISOString().substring(11, 16)
        }
        this.earthPositionForm.patchValue(this.position)
    }

    open(): void {
        this.wrapper.open();
    }

    setEarthPosition() {
        this.confirm_pressed = true;
        if (this.earthPositionForm.invalid) {
            return;
        }
        this.position = this.earthPositionForm.getRawValue()
        this.earthPositionService.setPosition(this.position)
        this.wrapper.close();
    }

    cancel(): void {
        this.wrapper.close();
    }
}
