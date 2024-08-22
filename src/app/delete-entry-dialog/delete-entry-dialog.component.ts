import {Component, Input, ViewChild} from '@angular/core';
import {DialogWrapperComponent} from "../dialog-wrapper/dialog-wrapper.component";
import {StarsService} from "../stars.service";
import {ConstellationsService} from "../constellations.service";
import Snackbar from "awesome-snackbar/src/snackbar";
import {snackbar_error, snackbar_msg} from "../constants";

@Component({
    selector: 'app-delete-entry-dialog',
    standalone: true,
    imports: [
        DialogWrapperComponent
    ],
    templateUrl: './delete-entry-dialog.component.html',
    styleUrl: './delete-entry-dialog.component.css'
})
export class DeleteEntryDialogComponent {
    @ViewChild('wrapper') wrapper!: DialogWrapperComponent;
    @Input() star_id?: string;
    @Input() constellation_id?: string;
    obj_type!: string;

    constructor(private starsService: StarsService, private constellationsService: ConstellationsService) {
    }

    open() {
        if (this.star_id) {
            this.obj_type = 'star'
        } else if (this.constellation_id) {
            this.obj_type = 'constellation'
        }
        this.wrapper.open();
    }

    confirm() {
        if (this.star_id) {
            this.starsService.delete_star(this.star_id).subscribe({
                next: star => {
                    console.log(star);
                    new Snackbar('The star was deleted successfully.', snackbar_msg)
                },
                error: error => {
                    console.error(error);
                    new Snackbar('An error occurred when trying to delete the star', snackbar_error)
                }
            })
        } else if (this.constellation_id) {
            this.constellationsService.delete_constellation(this.constellation_id).subscribe({
                next: constellation => {
                    console.log(constellation);
                    new Snackbar('The constellation was deleted successfully.', snackbar_msg)
                },
                error: error => {
                    console.error(error);
                    new Snackbar('An error occurred when trying to delete the constellation', snackbar_error)
                }
            })
        }

        this.wrapper.close();
        window.location.reload();
    }

    cancel() {
        this.wrapper.close()
    }
}
