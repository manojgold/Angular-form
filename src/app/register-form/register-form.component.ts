import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormControl, FormBuilder, NgForm, Validators } from '@angular/forms';
import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';
import { AgeValidator } from "../custom-validators/age.validator";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  profileForm = new FormGroup({
      Fname: new FormControl('', [Validators.required,Validators.minLength(4)]),
	  Lname: new FormControl('', [Validators.required,Validators.minLength(2)]),
	  Email: new FormControl('', [Validators.required,Validators.pattern("^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$")]),
	  Mobile: new FormControl('', [Validators.required,Validators.pattern('^[6-9][0-9]{9}')]),
	  dob:new FormControl('',[AgeValidator]),
	  Address: new FormControl('', [Validators.required,Validators.minLength(2),Validators.maxLength(150)]),
	  City: new FormControl('', [Validators.required,Validators.minLength(4)]),
	  State: new FormControl('', [Validators.required,Validators.minLength(4)]),
	  Password: new FormControl('', [Validators.required,Validators.minLength(8),Validators.maxLength(20)]),
	  Cpassword: new FormControl('')
  });
  constructor() { }

  ngOnInit(): void {
	
  }
get Fname() { return this.profileForm.get('Fname'); }
get Lname() { return this.profileForm.get('Lname'); }
get Email() { return this.profileForm.get('Email'); }
get Mobile() { return this.profileForm.get('Mobile'); }
get dob() { return this.profileForm.get('dob'); }
get Address() { return this.profileForm.get('Address'); }
get City() { return this.profileForm.get('City'); }
get State() { return this.profileForm.get('State'); }
get Password() { return this.profileForm.get('Password'); }
get Cpassword() { return this.profileForm.get('Cpassword'); }
  saveDetails(){
	console.log(this.profileForm.value);
}

onalphaKey(event: KeyboardEvent){ // appending the updated value to the variable
    var code = event.which ? event.which : event.keyCode;
    if (code !== 37 && code !== 39) {
          if(event.target!=null){

			  var pos = (<HTMLInputElement>event.target).selectionStart;
			  (<HTMLInputElement>event.target).value = (<HTMLInputElement>event.target).value.replace(/[^A-Za-z ]/g, '');
			  (<HTMLInputElement>event.target).selectionStart = pos;
			  (<HTMLInputElement>event.target).selectionEnd = pos;
			  event.preventDefault();
		 }
       }
}
  
  onnumberKey(event: KeyboardEvent){ // appending the updated value to the variable
    var code = event.which ? event.which : event.keyCode;
	if (code !== 37 && code !== 39) {
          if(event.target!=null){

			  var pos = (<HTMLInputElement>event.target).selectionStart;
			  (<HTMLInputElement>event.target).value = (<HTMLInputElement>event.target).value.replace(/[^0-9]/g, '');
			  (<HTMLInputElement>event.target).selectionStart = pos;
			  (<HTMLInputElement>event.target).selectionEnd = pos;
			  event.preventDefault();
		 }
       }
  }

}
