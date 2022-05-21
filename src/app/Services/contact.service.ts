import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from '../Models/Contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }
  addContact(cont: Contact) {
    return this.http.post("https://portfoliown.azurewebsites.net/api/AddContact?code=99aIam/n7Ly2WS9Xr23B8AcIhwjgyxVjHMDanfGN7Y75/5dLOl4ENg==", cont);
  }
}
