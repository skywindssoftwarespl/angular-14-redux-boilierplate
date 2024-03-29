import { AbstractControl, ValidatorFn } from '@angular/forms';

//username validation
export function UserNameValidators(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    if (control.value && control.value.trim().length == '') {
      return { NameNotAllowed: true };
    }
    return null;
  };
}
