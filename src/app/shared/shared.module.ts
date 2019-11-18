import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule, NZ_I18N, ru_RU } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import ru from '@angular/common/locales/ru';
import { ReactiveFormsModule } from '@angular/forms';

import { NoteCardComponent } from './components/note-card/note-card.component';
import { EditModalComponent } from './components/edit-modal/edit-modal.component';

registerLocaleData(ru);
@NgModule({
  imports: [
    ReactiveFormsModule,
    NgZorroAntdModule
  ],
  declarations: [NoteCardComponent, EditModalComponent],
  exports: [
    CommonModule,
    NgZorroAntdModule,
    NoteCardComponent,
    EditModalComponent
  ],
  providers: [
    { provide: NZ_I18N, useValue: ru_RU }
  ]
})
export class SharedModule { }
