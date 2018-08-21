import { Component, OnInit } from '@angular/core';
//import {NOTES} from  '../mock.notes';
import {Note} from '../note';
import { NoteService } from '../note.service';
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {


 searchedNote:Note;
 notes: Note[];
  constructor(private noteService: NoteService) { }

  ngOnInit() {
    this.getNotes();
  }
  onSelect(note: Note): void {
    this.searchedNote = note;
  }
  getNotes(): void {
    this.noteService.getNotes()
        .subscribe(notes => this.notes = notes);
  }

}
