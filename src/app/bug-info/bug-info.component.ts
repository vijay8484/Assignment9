import { Component, OnInit } from '@angular/core';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { deLocale } from 'ngx-bootstrap/locale';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { listLocales } from 'ngx-bootstrap/chronos';
import { User } from '../user';
defineLocale('de', deLocale); 



@Component({
  selector: 'app-bug-info',
  templateUrl: './bug-info.component.html',
  styleUrls: ['./bug-info.component.css']
})
export class BugInfoComponent implements OnInit {


  userModel=new User('vijay','patil','vijay@gmail.com','10/10/2018','bug impact');


  locale = 'en';
  locales = listLocales();
 
  constructor(private localeService: BsLocaleService) {}
 
  applyLocale(pop: any) {
    this.localeService.use(this.locale);
    pop.hide();
    pop.show();
  }

  ngOnInit() {
  }

}
