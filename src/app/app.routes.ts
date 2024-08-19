import {Routes} from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {StarEditorComponent} from "./star-editor/star-editor.component";

export const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        title: 'StarBook Dashboard'
    },
    {
        path: 'edit/:id',
        component: StarEditorComponent,
        title: 'Star Editor'
    }
];
