import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    form: FormGroup = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    });
    submitted = false;
    status: boolean = false;

  
    constructor(private formBuilder: FormBuilder) {}
  
    ngOnInit(): void {
      this.form = this.formBuilder.group(
        {
          email: ['', [Validators.required, Validators.email]],
          password: [''],
        }
      );
    }
    get f(): { [key: string]: AbstractControl } {
      return this.form.controls;
    }
  
    onSubmit(): void {
      this.submitted = true;
  
      if (this.form.invalid) {
        return;
      }
  
      console.log(JSON.stringify(this.form.value, null, 2));
    }
}