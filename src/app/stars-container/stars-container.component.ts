import {Component} from '@angular/core';
import {AccordionComponent} from "../accordion/accordion.component";
import {AccordionGroupComponent} from "../accordion-group/accordion-group.component";

@Component({
    selector: 'app-stars-container',
    standalone: true,
    imports: [
        AccordionComponent,
        AccordionGroupComponent
    ],
    templateUrl: './stars-container.component.html',
    styleUrl: './stars-container.component.css'
})
export class StarsContainerComponent {

}
