import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {StarsComponent} from "../stars/stars.component";
import {ToolBarComponent} from "../tool-bar/tool-bar.component";
import {TopBarComponent} from "../top-bar/top-bar.component";

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [
        StarsComponent,
        ToolBarComponent,
        ReactiveFormsModule,
        TopBarComponent
    ],
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
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
