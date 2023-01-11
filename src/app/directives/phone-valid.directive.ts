import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: '[appPhoneValid]',
  providers:[{
    provide:NG_VALIDATORS,
    useExisting:PhoneValidDirective,
    multi:true
 }]
})
export class PhoneValidDirective implements Validator{

  validate(control: AbstractControl):{[key:string]:any} | null {
    var reg = /05?[0-9]-?[0-9]{7}/i;
    if(control.value&&!reg.test(control.value) )
      return {"phoneValid":true}
    return null
  }

}
