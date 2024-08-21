import {Component} from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
    selector: 'app-tool-bar',
    standalone: true,
    imports: [
        RouterLink
    ],
    templateUrl: './tool-bar.component.html',
    styleUrl: './tool-bar.component.css'
})
export class ToolBarComponent {

}
