import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ScheduleListComponent} from './components/schedule-list/schedule-list.component';
import {ScheduleComponent} from './components/schedule-list/schedule/schedule.component';

const routes: Routes = [
  {
    path: 'schedules',
    children: [
      {
        path: 'list',
        component: ScheduleListComponent,
        pathMatch: 'full',
      },
      {
        path: 'add',
        component: ScheduleComponent,
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: 'schedules/list',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
