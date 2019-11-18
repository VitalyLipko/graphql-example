import { Component, OnInit, OnDestroy } from '@angular/core';
import { NzModalService, NzModalRef, ModalOptionsForService } from 'ng-zorro-antd';
import { FormGroup } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { NoteService } from 'src/app/core/services/note.service';
import { Note } from 'src/app/core/models/note.model';
import { EditModalComponent } from 'src/app/shared/components/edit-modal/edit-modal.component';

@Component({
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.less']
})
export class MainPageComponent implements OnInit, OnDestroy {
  title = 'GraphQL Example';
  notes: Note[];
  private modalRef: NzModalRef<any>;
  private unsubscribe = new Subject<any>();

  constructor(
    private noteService: NoteService,
    private modalService: NzModalService
  ) { }

  ngOnInit() {
    this.noteService.getNotes()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(notes => this.notes = notes);
  }

  ngOnDestroy() {
    if (this.modalRef) {
      this.modalRef.close();
    }
    this.unsubscribe.next(null);
    this.unsubscribe.complete();
  }

  onEdit(id: string) {
    this.noteService.getNote({ id })
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(note => {
        const options: ModalOptionsForService<EditModalComponent> = {
          nzTitle: 'Редактировать заметку',
          nzContent: EditModalComponent,
          nzComponentParams: {
            note: note,
            type: 'edit'
          },
          nzCancelText: 'Отмена',
          nzOkText: 'Сохранить',
          nzOnOk: modalComponent => this.onSave(modalComponent.noteFormGroup, 'edit')
        };

        this.modalRef = this.modalService.create(options);
      });
  }

  onCreate() {
    const options: ModalOptionsForService<EditModalComponent> = {
      nzTitle: 'Создать заметку',
      nzContent: EditModalComponent,
      nzComponentParams: {
        type: 'new'
      },
      nzCancelText: 'Отмена',
      nzOkText: 'Сохранить',
      nzOnOk: modalComponent => this.onSave(modalComponent.noteFormGroup, 'new')
    };

    this.modalRef = this.modalService.create(options);
  }

  private onSave(formGroup: FormGroup, type: string) {
    let request$ = new Observable<any>();

    switch (type) {
      case 'new':
        request$ = this.noteService.createNote(formGroup.value);
        break;
      case 'edit':
        request$ = this.noteService.editNote(formGroup.value);
        break;
    }

    request$
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(notes => this.notes = notes);
  }

  onDelete(id: string) {
    this.noteService.deleteNote({ id })
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(notes => this.notes = notes);
  }
}
