import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {ToolBarComponent} from "./tool-bar/tool-bar.component";
import {StarsComponent} from "./stars/stars.component";
import {DialogWrapperComponent} from "./dialog-wrapper/dialog-wrapper.component";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, ToolBarComponent, StarsComponent, DialogWrapperComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    title = 'StarBook';
}
