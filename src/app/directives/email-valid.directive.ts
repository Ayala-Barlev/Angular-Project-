import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: '[appEmailValid]',
  providers:[{
    provide:NG_VALIDATORS,
    useExisting:EmailValidDirective,
    multi:true
 }]
})
export class EmailValidDirective implements Validator{

  validate(control: AbstractControl):{[key:string]:any} | null {
    var reg = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,3}$/i;
    if(control.value&&!reg.test(control.value) )
      return {"emailValid":true}
    return null
  }
}
