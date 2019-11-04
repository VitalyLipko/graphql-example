import { Component, OnInit } from '@angular/core';

import { NoteService } from 'src/app/core/services/note.service';

@Component({
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.less']
})
export class MainPageComponent implements OnInit {

  constructor(private noteService: NoteService) { }

  ngOnInit() {
    this.noteService.getNotes().subscribe(notes => console.log(notes));
  }

}
