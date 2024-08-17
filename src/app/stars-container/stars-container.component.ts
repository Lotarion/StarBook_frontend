import {Component} from '@angular/core';
import {StarEntryComponent} from "../star-entry/star-entry.component";

@Component({
    selector: 'app-stars-container',
    standalone: true,
    imports: [
        StarEntryComponent
    ],
    templateUrl: './stars-container.component.html',
    styleUrl: './stars-container.component.css'
})
export class StarsContainerComponent {
    /**
     * there once was logic for opening and closing groups, but generating entries through AsyncPipe broke it. To
     * resolve this, I had to move the logic to the entries themselves. That means that multiple entries can be open at
     * the same time, but it's better than not being able to open entries at all.
     */
}
