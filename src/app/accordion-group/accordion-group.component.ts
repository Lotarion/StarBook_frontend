import {Component, Input, Output, EventEmitter} from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
    selector: 'group',
    standalone: true,
    imports: [
        NgClass
    ],
    templateUrl: './accordion-group.component.html',
    styleUrl: './accordion-group.component.css'
})
export class AccordionGroupComponent {
    @Input() opened = false;

    @Input() title!: string;

    @Output() toggle: EventEmitter<any> = new EventEmitter<any>();

}
