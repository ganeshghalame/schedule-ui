import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export class Schedule {
  name: string;
  start_at: string;
  end_at: string;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;

  constructor(paramsObject: object) {
    return Object.assign(this, paramsObject);
  }

  static getForm(schedule: Schedule): FormGroup {
    return new FormBuilder().group({
      name: [schedule.name || null, [Validators.required]],
      start_at: [schedule.start_at || null, [Validators.required]],
      end_at: [schedule.end_at || null, [Validators.required]],
    });
  }
}
