import { Component, Host, Input, OnInit, Optional, SkipSelf } from '@angular/core';
import { AbstractControl, ControlContainer, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'app-control-container',
    templateUrl: './control-container.component.html',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: ControlContainerComponent,
            multi: true,
        },
    ],
})
export class ControlContainerComponent implements OnInit {
    control: AbstractControl;
    @Input()
    name: string;
    @Input()
    label: string;
    @Input()
    errorMsg = 'An error occurred';
    @Input()
    tooltipText;
    @Input()
    isReadOnly = false;
    required = false;
    isVisibleToolTip = false;

    constructor(
        @Optional()
        @Host()
        @SkipSelf()
        private controlContainer: ControlContainer,
    ) {
    }

    get status(): any {
        if (this.control && this.control.validator) {
            const validator = this.control.validator({} as AbstractControl);

            return validator && validator.required;
        }
    }

    ngOnInit(): void {
        if (this.controlContainer) {
            if (this.name) {
                this.control = this.controlContainer.control.get(this.name);
                if (this.control.validator) {
                    const validator = this.control.validator({} as AbstractControl);
                    if (validator && validator.required) {
                        this.required = true;
                    }
                }
            } else {
                console.warn('Missing FormControlName directive from host element of the component');
            }
        } else {
            console.warn('Cant find parent FormGroup directive');
        }
    }
}
