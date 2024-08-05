import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {StarsContainerComponent} from "./stars-container/stars-container.component";
import {ToolBarComponent} from "./tool-bar/tool-bar.component";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, StarsContainerComponent, ToolBarComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    title = 'StarBook';
}
