import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { Note } from 'src/app/core/models/note.model';

@Component({
  selector: 'gql-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditModalComponent implements OnInit {
  note: Note;
  type: string;
  noteFormGroup = new FormGroup({
    title: new FormControl(''),
    text: new FormControl('')
  });

  constructor() { }

  ngOnInit() {
    if (this.type === 'edit') {
      this.noteFormGroup.addControl('id', new FormControl());
      this.noteFormGroup.patchValue(this.note);
    }
  }

}
