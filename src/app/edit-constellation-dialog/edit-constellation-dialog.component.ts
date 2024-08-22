import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {DialogWrapperComponent} from "../dialog-wrapper/dialog-wrapper.component";
import {Constellation} from "../constellation";
import {ConstellationsService} from "../constellations.service";
import Snackbar from "awesome-snackbar/src/snackbar";
import {snackbar_error, snackbar_msg} from "../constants";
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
    selector: 'app-edit-constellation-dialog',
    standalone: true,
    imports: [
        DialogWrapperComponent,
        FormsModule,
        NgIf
    ],
    templateUrl: './edit-constellation-dialog.component.html',
    styleUrl: './edit-constellation-dialog.component.css'
})
export class EditConstellationDialogComponent {
    @ViewChild('wrapper') wrapper!: DialogWrapperComponent;
    @Input() constellation_id!: string;
    @Output() onConstellationChange = new EventEmitter();
    confirm_pressed: boolean = false;
    constellation!: Constellation;
    header: string = '';
    name: string = '';

    constructor(public constellationsService: ConstellationsService) {
    }

    open() {
        this.wrapper.open()
        if (this.constellation_id != 'new') {
            this.constellationsService.read_constellation(this.constellation_id).subscribe({
                next: data => {
                    this.constellation = data;
                    this.name = data.name;
                },
                error: error => {
                    console.error(error);
                    this.wrapper.close();
                    new Snackbar('An error occurred while trying to retrieve the constellation', snackbar_error)
                }
            })
            this.header = "Edit constellation"
        } else {
            this.header = "New constellation"
        }
    }

    confirm() {
        this.confirm_pressed = true;
        if (this.name == '') {
            return;
        }
        if (this.constellation_id == 'new') {
            this.constellationsService.create_constellation({name: this.name}).subscribe({
                next: () => {
                    this.onConstellationChange.emit()
                    new Snackbar('The constellation was created successfully.', snackbar_msg)
                },
                error: error => {
                    console.error(error);
                    this.onConstellationChange.emit()
                    new Snackbar('An error occurred while trying to create the constellation', snackbar_error)
                }
            })
        } else {
            this.constellation.name = this.name;
            this.constellationsService.update_constellation(this.constellation).subscribe({
                next: () => {
                    this.onConstellationChange.emit()
                    new Snackbar('The constellation was updated successfully.', snackbar_msg)
                },
                error: error => {
                    console.error(error)
                    this.onConstellationChange.emit()
                    new Snackbar('An error occurred while trying to create the constellation')
                }
            })
        }
        this.wrapper.close()
    }

    cancel() {
        if (this.constellation_id == 'new') {
            this.onConstellationChange.emit()
        }
        this.wrapper.close()
    }
}
