import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Note } from 'src/app/core/models/note.model';

@Component({
  selector: 'gql-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NoteCardComponent implements OnInit {
  @Input() note: Note;

  @Output() edit = new EventEmitter<string>();
  @Output() delete = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  onEdit() {
    this.edit.emit(this.note.id);
  }

  onDelete() {
    this.delete.emit(this.note.id);
  }
}
