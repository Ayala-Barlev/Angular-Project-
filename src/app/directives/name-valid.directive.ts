import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: '[appNameValid]',
  providers:[{
    provide:NG_VALIDATORS,
    useExisting:NameValidDirective,
    multi:true
 }]
})
export class NameValidDirective implements Validator {

  validate(control: AbstractControl):{[key:string]:any} | null {
    var reg = /[א-ת -]{2,}/i;
    if(control.value&&!reg.test(control.value) )
      return {"onlyLettersInValid":true}
    return null
  }

}
