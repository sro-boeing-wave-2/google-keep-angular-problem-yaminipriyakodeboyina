import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import {Http } from '@angular/http';
import { Note } from './Note';
@Injectable({
  providedIn: 'root'
})
export class NoteService {

  //private headers: HttpHeaders;
  //private accessPointUrl: string = 'https://localhost:44330/api/Todoes';
  constructor(private http: Http) {
  // this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
   }
   //Notes : Note[];
   public getNotes() {
    // Get all notes
    return this.http.get("https://localhost:44330/api/Todoes");
  }
  public postNotes(note: Note){
    return this.http.post("https://localhost:44330/api/Todoes",note);
  }


}
