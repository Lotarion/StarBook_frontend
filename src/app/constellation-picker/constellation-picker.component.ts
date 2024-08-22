import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    EventEmitter,
    Input,
    OnInit,
    Output,
    ViewChild
} from '@angular/core';
import {DeleteEntryDialogComponent} from "../delete-entry-dialog/delete-entry-dialog.component";
import {EditConstellationDialogComponent} from "../edit-constellation-dialog/edit-constellation-dialog.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";
import {ConstellationsService} from "../constellations.service";
import {Constellation} from "../constellation";

@Component({
    selector: 'app-constellation-picker',
    standalone: true,
    imports: [
        DeleteEntryDialogComponent,
        EditConstellationDialogComponent,
        FormsModule,
        NgForOf,
        NgIf,
        ReactiveFormsModule
    ],
    templateUrl: './constellation-picker.component.html',
    styleUrl: './constellation-picker.component.css'
})
export class ConstellationPickerComponent {
    @ViewChild('editConstellation') editConstellation!: EditConstellationDialogComponent;
    @ViewChild('deleteConstellation') deleteConstellation!: DeleteEntryDialogComponent;
    @ViewChild('dropdown') Dropdown!: ElementRef;
    @Input() constellation_id!: string;
    @Output() id_changed: EventEmitter<string> = new EventEmitter();
    constellations: Constellation[] = [];

    constructor(public constellationsService: ConstellationsService, private cdRef: ChangeDetectorRef) {
        this.getConstellations()
    }

    getConstellations() {
        this.constellationsService.read_constellations().subscribe({
            next: (data: Constellation[]) => {
                this.constellations = [...data];
            },
            error: error => {
                console.error(error)
            }
        })
    }

    async onSelectChange() {
        this.id_changed.emit(this.constellation_id)
        await new Promise(f => setTimeout(f, 100)); // load bearing sleep() moment
        if (this.constellation_id == "new") {
            this.editConstellation.open()
        }
    }

    onEditConstellation() {
        this.editConstellation.open()
    }

    onDeleteConstellation() {
        this.deleteConstellation.open()
    }

    onConstellationMutation() {
        this.getConstellations()
        this.constellation_id = ''
        this.cdRef.detectChanges()
    }
}
