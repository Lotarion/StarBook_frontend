import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {ToolBarComponent} from "./tool-bar/tool-bar.component";
import {StarsComponent} from "./stars/stars.component";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, ToolBarComponent, StarsComponent, ReactiveFormsModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    title = 'StarBook';
    searchQuery: string = '';
    searchForm: FormGroup = new FormGroup({
        search: new FormControl('')
    });
    canSearch = true;

    SetSearchQuery() {
        this.searchQuery = this.searchForm.controls['search'].value;
        console.log(this.searchForm.value);
        console.log(this.searchQuery);
    }
}
