import { Component,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {Note} from './Note';
import {label} from './Label';
import {checklist} from './Checklist';
import {FormBuilder, FormGroup,FormArray} from "@angular/forms";
import { NoteService } from './note.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GoogleKeep1';
  note:Note;
  id: number;
  heading: string;
  pinned: boolean;
  text: string;
  label: label[];
  checklist: checklist[];
  constructor(public dialog: MatDialog) {}





  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: {id: this.id, heading: this.heading}
    });


dialogRef.afterClosed().subscribe(result => {
  console.log('The dialog was closed');
  this.note= result;
});
}

}

@Component({
  selector: 'dialogoverview',
  templateUrl: 'dialogoverview.html',
})
export class DialogOverviewExampleDialog {
  notes:FormGroup;
  note:Note;
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Note,private noteservice:NoteService,private formbuilder:FormBuilder,private router:Router) {}
  CreateNote=this.formbuilder.group({
    id:[''],
    heading:[''],
    pinned:[''],
    label: this.formbuilder.array([this.formbuilder.group({labelname:['']})]),
    checklist:this.formbuilder.array([this.formbuilder.group({checkname:['']})])
  });
  get label()
  {
    return this.CreateNote.get('labell') as FormArray;
  }
  addLabel(){
    this.label.push(this.formbuilder.group({
      labelname : ['']
    }));
  }
  get checklist(){
    return this.CreateNote.get('checklist') as FormArray;
  }
  addCheckList(){
    this.checklist.push(this.formbuilder.group({checkname : ['']}));
  }
  onSubmit():void{
    this.GenerateNote();
    this.router.navigate(['']);
  }
  GenerateNote():void{
    console.log(this.CreateNote.value);
    this.noteservice.postNotes(this.CreateNote.value as Note).subscribe(result => console.log(result.statusText));
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  addmore():void
 {
   document.getElementById("Note_Label").innerHTML +=`<label>Label</label>
   <input type="text" class="form-control" formControlName="Label">`;
 }
 ngOnInit() {
}
}
