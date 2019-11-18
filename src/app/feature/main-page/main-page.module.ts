import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPageComponent } from './main-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { EditModalComponent } from 'src/app/shared/components/edit-modal/edit-modal.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent
  }
];

@NgModule({
  declarations: [MainPageComponent],
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ],
  entryComponents: [
    EditModalComponent
  ]
})
export class MainPageModule { }
