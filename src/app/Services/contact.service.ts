import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from '../Models/Contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }
  addContact(cont: Contact) {
    return this.http.post("https://portfoliown.azurewebsites.net/api/AddContact?code=99aIam/n7Ly2WS9Xr23B8AcIhwjgyxVjHMDanfGN7Y75/5dLOl4ENg==", cont);
  }
  incriment(id: string) {
    return this.http.put("https://oneforwhole.azurewebsites.net/api/Incriment?code=XGLXje4SIZGOy1ZDnnCVD/kfQ1cIMk92X8IxYNUlF7rQj1nsSdY4CA==&id=" + id, null);
  }
}
