import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPageComponent } from './main-page.component';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
  },
];

@NgModule({
  declarations: [MainPageComponent],
  imports: [RouterModule.forChild(routes), SharedModule],
})
export class MainPageModule {}
