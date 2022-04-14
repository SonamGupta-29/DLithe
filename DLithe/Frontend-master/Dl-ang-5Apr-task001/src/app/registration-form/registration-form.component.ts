import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  listOfCity= [
    'shivpuri',
    'Khandwa',
    'Khargone',
    'Guna',
    'Gwalior'
  ]
  registrationModel= {name:'Sonam Gupta ',phonenumber: '8224083829' ,emailid:'2997sonamgeda@gmail.com' ,
  DOB: '29-dec-1996' ,address: 'Deen Dayal Nagar' ,city: 'shivpuri', pincode: '473660' }
  constructor() { }

  ngOnInit(): void {
  }

}
