import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Store } from '@ngxs/store';
import { AddUser } from '../store/user.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{
    form: FormGroup;
    permissions= 'adminsitrador';

    constructor(
      private formBuilder: FormBuilder,
      private store: Store
      ) {
      this.form = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
      });
    }

    accessType(type: string){
      this.permissions = type;
    }
  
    onSubmit(): void {

      if (this.form.invalid) {
        return;
      }

      const accessData = {
        ...this.form.value,
        accessType: this.permissions,
      }
      
      console.log(JSON.stringify(accessData, null, 2));
    }
}