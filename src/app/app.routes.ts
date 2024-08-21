import {Routes} from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {StarEditorComponent} from "./star-editor/star-editor.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";


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
    },
    {
        path: '404',
        redirectTo: '/**',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: PageNotFoundComponent,
        title: 'Page not found'
    }
];
