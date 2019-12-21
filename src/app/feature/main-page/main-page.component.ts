import { Component, OnInit, OnDestroy } from '@angular/core';
import { NzModalService, NzModalRef, ModalOptionsForService, NzMessageService } from 'ng-zorro-antd';
import { FormGroup } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { NoteService } from 'src/app/core/services/note.service';
import { EditModalComponent } from 'src/app/shared/components/edit-modal/edit-modal.component';
import { Note } from 'src/app/core/services/generated/graphql-example';

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
    private modalService: NzModalService,
    private messageService: NzMessageService
  ) { }

  ngOnInit() {
    this.noteService.getNotes()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(notes => this.notes = notes,
        (error: { messages: string[] }) => error.messages.forEach(message => this.messageService.error(message))
      );
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
            note,
            type: 'edit'
          },
          nzClosable: false,
          nzMaskClosable: false,
          nzFooter: [
            {
              label: 'Отмена',
              onClick: () => this.modalRef.close()
            },
            {
              label: 'Сохранить',
              type: 'primary',
              disabled: modalComponent => !this.isEnabled(modalComponent.noteFormGroup),
              onClick: modalComponent => this.onSubmit(modalComponent.noteFormGroup, 'edit')
            }
          ]
        };

        this.modalRef = this.modalService.create(options);
      },
        (error: { messages: string[] }) => error.messages.forEach(message => this.messageService.error(message))
      );
  }

  onCreate() {
    const options: ModalOptionsForService<EditModalComponent> = {
      nzTitle: 'Создать заметку',
      nzContent: EditModalComponent,
      nzComponentParams: {
        type: 'new'
      },
      nzClosable: false,
      nzMaskClosable: false,
      nzFooter: [
        {
          label: 'Отмена',
          onClick: () => this.modalRef.close()
        },
        {
          label: 'Создать',
          type: 'primary',
          disabled: modalComponent => !this.isEnabled(modalComponent.noteFormGroup),
          onClick: modalComponent => this.onSubmit(modalComponent.noteFormGroup, 'new')
        }
      ]
    };

    this.modalRef = this.modalService.create(options);
  }

  private onSubmit(formGroup: FormGroup, type: string) {
    let request$ = new Observable<any>();
    let successMessage: string;

    switch (type) {
      case 'new':
        successMessage = 'Заметка создана';
        request$ = this.noteService.createNote(formGroup.value);
        break;
      case 'edit':
        successMessage = 'Заметка обновлена';
        request$ = this.noteService.editNote(formGroup.value);
        break;
    }

    request$
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(() => {
        this.modalRef.close();
        this.messageService.success(successMessage);
      },
        (error: { messages: string[] }) => error.messages.forEach(message => this.messageService.error(message))
      );
  }

  onDelete(id: string) {
    this.noteService.deleteNote({ id })
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(() => this.messageService.success('Заметка удалена'),
        (error: { messages: string[] }) => error.messages.forEach(message => this.messageService.error(message))
      );
  }

  private isEnabled(formGroup: FormGroup): boolean {
    return formGroup.get('title').value || formGroup.get('text').value;
  }
}
