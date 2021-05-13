import { Component, OnInit } from '@angular/core';
import {ScheduleService} from './schedule/schedule.service.service';
import {Schedule} from './schedule/schedule';

@Component({
  selector: 'app-schedule-list',
  templateUrl: './schedule-list.component.html',
  styleUrls: ['./schedule-list.component.scss']
})
export class ScheduleListComponent implements OnInit {
  schedules: Array<Schedule>;
  constructor(private service: ScheduleService) { }

  ngOnInit(): void {
    this.service.get().subscribe(response => {
      response = response.map(o => {
        let startAt = new Date(o.start_at).getTime();
        let endAt = new Date(o.end_at).getTime();
        console.log(startAt, endAt);
        o['duratuon'] = endAt - startAt;
        // console.log(o);
        return o;
      });
      this.schedules = response;
    });
  }

}
