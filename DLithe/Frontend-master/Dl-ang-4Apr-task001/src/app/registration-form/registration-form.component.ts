import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
 listOfCountries= [
   'India',
   'Ireland',
   'Australia',
   'South Africa',
   'Germany'
 ]
 registrationModel= {fname:'Sonam', lname: 'Gupta', gender:'Female' ,country: 'India'}

  constructor() { }

  ngOnInit(): void {
  }

}
