import { Component, OnInit, HostListener, ElementRef } from '@angular/core';

import { ModalService } from './services/modal.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    closeResult: string;

    // key press constants
    ESCAPE_KEYCODE = 27;
    CLOSE_ICON = 0;
    CLOSE_BUTTON = 1;
    ESC = 2;
    BACK_DROP = 3;

    constructor(
        private elementRef: ElementRef,
        private modalService: ModalService) {
    }

    ngOnInit() {
    }
    // captures key press ESC
    @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(event: KeyboardEvent) {
        if (event.keyCode === this.ESCAPE_KEYCODE) {
            this.closeModal('my-modal', this.ESC);
        }
    }
    // captures modal backdrop
    @HostListener('document:click', ['$event', '$event.target'])
    onClick(event: MouseEvent, targetElement: HTMLElement): void {
        if (targetElement && targetElement.className === 'app-modal') {
            this.closeModal('my-modal', this.BACK_DROP);
        }
    }
    // creates a model for given id
    openModal(id: string) {
        this.modalService.open(id);
    }
    // closes model by given id 
    closeModal(id: string, reason: Number) {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        this.modalService.close(id);
    }
    // captures dismissal method of modal
    private getDismissReason(reason: any): string {
        if (reason === this.CLOSE_ICON) {
            return 'by clicking close icon';
        } else if (reason === this.CLOSE_BUTTON) {
            return 'by clicking close button';
        } else if (reason === this.ESC) {
            return this.closeResult = 'by pressing ESC '
        } else if (reason === this.BACK_DROP) {
            return this.closeResult = 'with clicking on a backdrop';
        }
    }
}
