import {Component, Input, ViewChild} from '@angular/core';
import {Star} from "../star";
import {Router, RouterLink} from "@angular/router";
import {DeleteEntryDialogComponent} from "../delete-entry-dialog/delete-entry-dialog.component";
import {NgClass} from "@angular/common";

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
    @ViewChild('deletedialog') deletedialog!: DeleteEntryDialogComponent;
    opened = false;
    @Input() star!: Star;

    constructor(public router: Router) {
    }

    ToggleEntry(): void {
        this.opened = !this.opened;
    }

    onDeleteButtonClick() {
        this.deletedialog.open()
    }
}
