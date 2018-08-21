import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Note} from './note';
import {NOTES} from './mock.notes';
import { MessageService } from './message.service';
@Injectable({
  providedIn: 'root',
})
export class NoteService {

  constructor(private messageService: MessageService) { }
  getNotes(): Observable<Note[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('NoteService: fetched notes');
    return of(NOTES);
  }
}
