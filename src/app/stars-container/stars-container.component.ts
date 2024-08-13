import {AfterContentInit, Component, ContentChildren, QueryList} from '@angular/core';
import {StarEntryComponent} from "../star-entry/star-entry.component";
import {AccordionGroupComponent} from "../accordion-group/accordion-group.component";

@Component({
    selector: 'app-stars-container',
    standalone: true,
    imports: [
        StarEntryComponent
    ],
    templateUrl: './stars-container.component.html',
    styleUrl: './stars-container.component.css'
})
export class StarsContainerComponent implements AfterContentInit {
    @ContentChildren(StarEntryComponent)
    groups!: QueryList<StarEntryComponent>;

    ngAfterContentInit(): void {
        this.groups.toArray().forEach(group => {
            group.toggle.subscribe(() => {
                if (!group.opened) {
                    this.openGroup(group)
                } else {
                    this.closeGroup(group)
                }
            })
        })
    }

    openGroup(group: AccordionGroupComponent) {
        // close other groups
        this.groups.toArray().forEach((t) => t.opened = false);
        // open current group
        group.opened = true;
    }

    closeGroup(group: AccordionGroupComponent) {
        group.opened = false;
    }
}
