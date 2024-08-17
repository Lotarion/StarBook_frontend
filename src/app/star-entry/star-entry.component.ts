import {Component, Input} from '@angular/core';
import {NgClass} from "@angular/common";
import {Star} from "../star";

@Component({
    selector: 'app-star-entry',
    standalone: true,
    imports: [
        NgClass
    ],
    templateUrl: './star-entry.component.html',
    styleUrl: './star-entry.component.css'
})
export class StarEntryComponent {
    @Input() opened = false;
    @Input() star!: Star;

    ToggleEntry(): void {
        this.opened = !this.opened;
    }
}
