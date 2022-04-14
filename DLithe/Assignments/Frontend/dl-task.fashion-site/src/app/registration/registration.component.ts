import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { PasswordValidator } from '../password.validator';
import { Event } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {


  


  registrationForm: FormGroup;
  submitted:boolean=false;
  
    constructor(private fb: FormBuilder) { 
      this.registrationForm = this.fb.group({
        firstname: ['',Validators.required],
        phoneNumber:[
          '',
          [
            Validators.required,
            Validators.min(10000000000),
            Validators.min(99999999999),        ]
          ],
         
          emailid: ['',Validators.required],
          DOB:['',Validators.required],
          PinCode:['',Validators.required],
        pass:['',Validators.required],
        cnfmpass:['',Validators.required]
      },{validator: PasswordValidator})  
    }
   
  
    ngOnInit(): void {
    }
    OnSubmit() {
      
        this.registrationForm.patchValue({
          firstName: 'Sonam gupta'
          
          
        });
      }
    }

