import { Component, OnInit } from '@angular/core';
import { ContactsComponent } from '../contacts.component';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUSComponent implements OnInit {
  user = false;
  team = false;
  constructor() { }

  ngOnInit(): void {
  }
  userInfo(){
    this.user = true;
    this.team = false;
  }
  teamInfo(){
    this.team = true;
    this.user = false;
  }
}
