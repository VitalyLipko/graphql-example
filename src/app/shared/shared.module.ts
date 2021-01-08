import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NZ_I18N, ru_RU } from 'ng-zorro-antd';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzCardModule } from 'ng-zorro-antd/card';
import { registerLocaleData } from '@angular/common';
import ru from '@angular/common/locales/ru';
import { ReactiveFormsModule } from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';
import {
  PlusOutline,
  EditOutline,
  DeleteOutline,
} from '@ant-design/icons-angular/icons';
import { IconDefinition } from '@ant-design/icons-angular';

const icons: IconDefinition[] = [PlusOutline, EditOutline, DeleteOutline];

import { NoteCardComponent } from './components/note-card/note-card.component';
import { EditModalComponent } from './components/edit-modal/edit-modal.component';

registerLocaleData(ru);
@NgModule({
  imports: [
    ReactiveFormsModule,
    NzCardModule,
    NzLayoutModule,
    NzEmptyModule,
    NzFormModule,
    NzButtonModule,
    NzModalModule,
    NzMessageModule,
    NzToolTipModule,
    NzTypographyModule,
    NzInputModule,
    NzIconModule.forChild(icons),
  ],
  declarations: [NoteCardComponent, EditModalComponent],
  exports: [
    CommonModule,
    NoteCardComponent,
    EditModalComponent,
    NzCardModule,
    NzLayoutModule,
    NzEmptyModule,
    NzFormModule,
    NzButtonModule,
    NzModalModule,
    NzMessageModule,
    NzToolTipModule,
    NzTypographyModule,
    NzInputModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: ru_RU }],
})
export class SharedModule {}
