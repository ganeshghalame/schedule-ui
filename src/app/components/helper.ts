import {FormArray, FormControl, FormGroup} from '@angular/forms';

export class Helper {
  public static validateFormFields(form: FormGroup | FormArray): void{
    Object.keys(form.controls).forEach(field => {
      const control = form.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched();
        control.updateValueAndValidity(); // Reruns the custom validators if any
      } else if (control instanceof FormGroup) {
        this.validateFormFields(control);
      } else if (control instanceof FormArray) {
        Object.keys(control.controls).forEach(index => {
          if (control instanceof FormControl) {
            control.markAsTouched();
            control.updateValueAndValidity();
          } else {
            this.validateFormFields(control.get(index) as FormGroup);
          }
        });
      }
    });
  }
}
