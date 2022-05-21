import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/Models/Contact';
import {  NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ContactService } from 'src/app/Services/contact.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


    //#region contact
    contact: Contact = new Contact("", "", "");
    contactResult: Boolean = false;
    public success: Boolean = false;
    public waiting: boolean = false;
    //#endregion
    
  constructor(private contactService:ContactService) { }

  ngOnInit(): void {
  }
  onAddContact() {
    this.waiting = true;
    this.contactService.addContact(this.contact).subscribe(async (data: any) => {
      console.log(data);
      this.contactResult = data;
      if (this.contactResult == true) {
        this.waiting = false;
        this.success = true;
        await this.delay(3000);
        this.success = false;
      }
    });
  }
  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
