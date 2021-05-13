import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScheduleListComponent } from './components/schedule-list/schedule-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DxDataGridModule } from 'devextreme-angular/ui/data-grid';
import { DxTextBoxModule } from 'devextreme-angular/ui/text-box';
import { DxDateBoxModule } from 'devextreme-angular/ui/date-box';
import { DxChartModule } from 'devextreme-angular/ui/chart';

import { ScheduleComponent } from './components/schedule-list/schedule/schedule.component';
import {RouterModule} from '@angular/router';
import {ToastrModule} from 'ngx-toastr';
import {HttpClientModule} from '@angular/common/http';
import {ScheduleService} from './components/schedule-list/schedule/schedule.service.service';
import {ControlContainerComponent} from './components/control-container/control-container.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ScheduleListComponent,
    ScheduleComponent,
    ControlContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    DxDataGridModule,
    DxTextBoxModule,
    DxDateBoxModule,
    DxChartModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      closeButton: true,
    }),
  ],
  providers: [ScheduleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
