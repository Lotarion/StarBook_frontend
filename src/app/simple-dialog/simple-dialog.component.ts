import {Component, OnInit} from '@angular/core';
import {DialogService} from "../dialog.service";
import {DialogConfig} from "../dialog-config";
import {takeWhile} from "rxjs";
import {NgIf} from "@angular/common";

@Component({
    selector: 'app-simple-dialog',
    standalone: true,
    imports: [
        NgIf
    ],
    templateUrl: './simple-dialog.component.html',
    styleUrl: './simple-dialog.component.css'
})
export class SimpleDialogComponent implements OnInit {
    private subscribed = true;
    config!: DialogConfig
    dialogVisible: boolean = false;

    constructor(private dialogService: DialogService) {
    }

    ngOnInit() {
        this.dialogService.config
            .pipe(takeWhile(() => this.subscribed))
            .subscribe(config => {
                if (config) {
                    this.open(config)
                }
            })
    }

    private open(config: DialogConfig) {
        this.config = {
            title: config.title ?? "Warning!",
            message: config.message ?? "Do you wish to proceed?",
            cancelVisible: config.cancelVisible ?? true,
            confirmHandler: config.confirmHandler ?? (() => {
            })
        }

        this.dialogVisible = true;
    }

    close(okClicked: boolean) {
        if (okClicked && this.config.confirmHandler) {
            this.config.confirmHandler()
        }
        this.dialogVisible = false;
    }
}
