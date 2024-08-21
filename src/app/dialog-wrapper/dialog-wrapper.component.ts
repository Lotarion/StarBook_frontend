import {Component, Input} from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
    selector: 'app-dialog-wrapper',
    standalone: true,
    imports: [
        NgIf
    ],
    templateUrl: './dialog-wrapper.component.html',
    styleUrl: './dialog-wrapper.component.css'
})
export class DialogWrapperComponent {
    @Input('header') header!: string;

    dialogVisible: boolean = false;

    open() {
        this.dialogVisible = true;
    }

    close() {
        this.dialogVisible = false;
    }
}
