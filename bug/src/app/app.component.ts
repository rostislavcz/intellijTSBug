import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AbstractControl, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'bug';

  form: TestFormGroup;
  formOriginal: TestFormGroupOriginal;

  constructor() {

  }
}



export type TestFormGroupOriginal = FormGroup<{
  test: FormGroup<{
    first: FormControl<string>,
    second: FormControl<number>,
    third: FormGroup<{
      age: FormControl<number>
    }>
  }>
}>

export type TestFormGroup = MyFormGroupV2<{
  test: FormGroup<{
    first: FormControl<string>,
    second: FormControl<number>,
    third: FormGroup<{
      age: FormControl<number>
    }>
  }>
}>


export class MyFormGroupV2<TControl extends {
  [K in keyof TControl]: AbstractControl<any>;
} = any> extends FormGroup<TControl> {
  meta: {
    [key: string]: any,
    highlight: boolean
  } = {
    highlight: false
  };

  uniqueId = Date.now();
}
