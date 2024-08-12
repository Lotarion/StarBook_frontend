import {Component, Input} from '@angular/core';
import {Star} from "../star";

@Component({
    selector: 'app-star-entry',
    standalone: true,
    imports: [],
    templateUrl: './star-entry.component.html',
    styleUrl: './star-entry.component.css'
})
export class StarEntryComponent {
    @Input() StarEntryComponent!: Star;
}
