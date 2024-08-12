import {AfterContentInit, Component, ContentChildren, QueryList} from '@angular/core';
import {AccordionGroupComponent} from "../accordion-group/accordion-group.component";

@Component({
    selector: 'app-accordion',
    standalone: true,
    imports: [],
    templateUrl: './accordion.component.html',
    styleUrl: './accordion.component.css'
})
export class AccordionComponent implements AfterContentInit {
    @ContentChildren(AccordionGroupComponent)
    groups!: QueryList<AccordionGroupComponent>;

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
