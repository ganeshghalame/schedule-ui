import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Schedule} from './schedule';
import {ScheduleService} from './schedule.service.service';
import {ToastrService} from 'ngx-toastr';
import {Helper} from '../../helper';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  form: FormGroup;
  message = '';
  isSaving = false;

  constructor(private service: ScheduleService, private notifyService: ToastrService) {
  }

  ngOnInit(): void {
    this.form = Schedule.getForm(new Schedule({}));
  }



  onCreate(): void {
    this.message = '';
    if (this.form.valid) {
      this.isSaving = true;
      const data = {
        name: this.form.value.name,
        start_at: this.form.value.start_at.toLocaleTimeString(),
        end_at: this.form.value.end_at.toLocaleTimeString(),
      };
      this.service
        .create(data)
        .subscribe(
          () => {
              this.notifyService.success('Schedule saved successfully');
          },
          errorResponse => {
            this.message = errorResponse.error.error;
            this.notifyService.error('Error saving schedule');
          },
        )
        .add(() => {
          this.isSaving = false;
        });
    } else {
      Helper.validateFormFields(this.form);
    }
  }

  clear(): void {
    this.form.reset();
  }

}
