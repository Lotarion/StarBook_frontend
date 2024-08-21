import {Component} from '@angular/core';
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
    dialogVisible: boolean = false;

    open() {
        this.dialogVisible = true;
    }

    close() {
        this.dialogVisible = false;
    }
}
