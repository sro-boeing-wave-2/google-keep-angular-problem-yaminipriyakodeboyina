import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';
import {Note} from '../Note';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
public Notes: Note[];

  constructor(private noteservice: NoteService) {}

  ngOnInit() {
  this.getNotes();
  }
  getNotes(){
    this.noteservice.getNotes().subscribe(notes=>{this.Notes = notes.json()})
  }
  delete(id:number){
    this.noteservice.deleteNote(id).subscribe();
    this.noteservice.getNotes().subscribe(notes=>{this.Notes = notes.json()})
  }



}
