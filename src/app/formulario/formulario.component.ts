import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss'
})
export class FormularioComponent {

  formulario: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ){
    this.formulario = this.formBuilder.group({
      name:["",[Validators.required, Validators.minLength(2)]]
    })
  }
}
