import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Task } from '../tasks';
import { TaskService } from '../task.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  tasks: Task[] = [];
  
  constructor(private route: ActivatedRoute,
    private taskService: TaskService,
    private location: Location) { }

  ngOnInit(): void {
    this.getTasks();
  }

   getTasks(): void {
    this.route.params.subscribe((value: any) => {
      this.taskService.getTasks(value.name)
          .subscribe(tasks => this.tasks = tasks);
    }) 
   } 

   goBack(): void {
    this.location.back();
  }
 
}
