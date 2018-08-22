import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DialogOverviewExampleDialog } from './app.component';
import { NoteComponent } from './note/note.component';
import {NoteService} from './note.service';
import { HttpClientModule } from '@angular/common/http';
import {HttpModule} from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatDialogModule,MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule,MatMenuModule,MatFormFieldModule,MatInputModule,MatCheckbox} from '@angular/material';
const appRoutes: Routes = [
  { path: '', component: NoteComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    NoteComponent,
    DialogOverviewExampleDialog,
    MatCheckbox
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    HttpModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatMenuModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CdkTableModule,
    CdkTreeModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckbox
  ],
  entryComponents: [DialogOverviewExampleDialog],
  providers: [NoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
