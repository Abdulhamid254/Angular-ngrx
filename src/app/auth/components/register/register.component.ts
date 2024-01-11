import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { register } from '../../store/actions';
import { RegisterRequestInterface } from '../../types/registerRequest.interface';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterModule,],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{
  reactiveForm!: FormGroup;


  constructor(private store: Store){}

  ngOnInit() {
    this.reactiveForm = new FormGroup({
      username: new FormControl('',Validators.required),
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('', Validators.required),
    })
  }


  onSubmit() {
    console.log(this.reactiveForm.getRawValue())

    const request: RegisterRequestInterface = {
      user:this.reactiveForm.getRawValue()
    }
    this.store.dispatch(register({ request }));
  }
}
