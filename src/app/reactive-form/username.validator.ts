import { AbstractControl, ValidationErrors } from "@angular/forms";

export class UsernameValidator {
   static cannotContainSpace(control: AbstractControl) : ValidationErrors | null {
        if((control.value as string).indexOf(' ') >=0)
        return {cannotContainSpace: true};
        return null;
    }
    static usernameCannotContainspace(control: AbstractControl): ValidationErrors | null {
        if((control.value as string).indexOf(' ') >=0)
        return {usernameCannotContainspace: true};
        return null;
    }
      static AAA(control: AbstractControl) : ValidationErrors | null {
        if((control.value as string).indexOf(' ')>=0)
        return {AAA:true};
        return null;
      }
}
