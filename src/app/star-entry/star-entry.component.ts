import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {Star} from "../star";
import {Router, RouterLink} from "@angular/router";
import {DeleteEntryDialogComponent} from "../delete-entry-dialog/delete-entry-dialog.component";
import {NgClass} from "@angular/common";
import {Constellation} from "../constellation";
import {ConstellationsService} from "../constellations.service";

@Component({
    selector: 'app-star-entry',
    standalone: true,
    imports: [
        RouterLink,
        DeleteEntryDialogComponent,
        NgClass
    ],
    templateUrl: './star-entry.component.html',
    styleUrl: './star-entry.component.css'
})
export class StarEntryComponent {
    @ViewChild('deleteDialog') deleteDialog!: DeleteEntryDialogComponent;
    opened = false;
    @Input() star!: Star;
    @Output() update = new EventEmitter();
    constellations: Constellation[] = [];

    constructor(public router: Router, public constellationsService: ConstellationsService) {
        constellationsService.read_constellations().subscribe({
            next: (data: Constellation[]) => {
                this.constellations = data;
                constellationsService.set_cache(data)
            },
            error: error => {
                console.error(error);
            }
        })
    }

    ToggleEntry(): void {
        this.opened = !this.opened;
    }

    getConstellation(constellation_id: string): string {
        for (let constellation of this.constellations) {
            if (constellation.id === constellation_id) {
                return constellation.name
            }
        }
        return '';
    }

    onDeleteButtonClick() {
        this.deleteDialog.open()
    }

    onDeletion() {
        this.update.emit();
    }
}
