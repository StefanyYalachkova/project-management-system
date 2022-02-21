import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../tasks';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {

  task: Task | undefined;

  constructor(private route: ActivatedRoute,
    private taskService: TaskService,
    private location: Location) {
  }

  ngOnInit(): void {
    console.log(this.task);
    this.getTask();
  }

  getTask(): void {
    this.route.params.subscribe((value: any) => {
    this.taskService.getTask(value.name)
        .subscribe(task => {
          this.task = task;
        })
      console.log(value.name);
    });
  }
  goBack(): void {
    this.location.back();
  }

}
