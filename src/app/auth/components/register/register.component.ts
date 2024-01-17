import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { authActions } from '../../store/actions';
import { RegisterRequestInterface } from '../../types/registerRequest.interface';
import { RouterModule } from '@angular/router';
import { selectIsSubmitting } from '../../store/reducers';
import { AuthStateInterface } from '../../types/authState.interface';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterModule,],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterComponent implements OnInit{
  reactiveForm!: FormGroup;
  private initialFormValues: any;
  isSubmitting$ = this.store.select(selectIsSubmitting)


  //the only place we are able to reset our submitting status is inside the ngSubmit/when resetting the form reset()
  // reset() is bound to the form group...so to access that we can get a refrence to the formGroup directive
  //instance via viewChild() decorator as shown below
  @ViewChild(FormGroupDirective)
  private formDir!: FormGroupDirective


  constructor(private fb: FormBuilder,private authService: AuthService,private store: Store<{auth: AuthStateInterface}>){}

  ngOnInit() {
    this.reactiveForm = new FormGroup({
      username: new FormControl('',[Validators.required,Validators.minLength(2)]),
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('', Validators.required),
    })
    this.initialFormValues = this.reactiveForm.value
  }


  onSubmit(e:Event) {
    console.log(this.reactiveForm.getRawValue())
    //simplest way of resetting the form //here we reset the formgroup by itself which doesnt represent as a whole represent the form itself
    // this.reactiveForm.reset()

    const request: RegisterRequestInterface = {
      user:this.reactiveForm.getRawValue()
    }
    // this.store.dispatch(authActions.register({ request }));
    this.authService.register(request).subscribe(res => console.log('res',res)
    )
    this.initialFormValues = this.reactiveForm.value;
    // here we are directly resetting the model
    // this.reactiveForm.reset()

    //bt bcoz we want to target also the submitting so that we can reset it
    //we delegateit to the reset method frrom the directive
    this.formDir.resetForm(); //drawback remember that this is not type safe

    //when we want to reset the forms bt keep the values that the user entered
    // this.formDir.resetForm(this.reactiveForm.value)
  }
}
