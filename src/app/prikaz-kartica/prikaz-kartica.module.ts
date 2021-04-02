import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentDialog, PrikazKarticaComponent } from './prikaz-kartica.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    PrikazKarticaComponent,
    CommentDialog
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule
  ],
  exports: [
    PrikazKarticaComponent,
    CommentDialog
  ]
})
export class PrikazKarticaModule { }
