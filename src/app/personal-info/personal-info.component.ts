import { Component, OnInit } from '@angular/core';
import { User } from '../User';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {

  userModel=new User('vijay','patil','vijay@gmail.com','10/10/2018','bug impact');


  constructor() { }

  ngOnInit() {
  }

}
