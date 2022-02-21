import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjectManagementSystemComponent } from './project-management-system/project-management-system.component'; 
import { ProjectsComponent } from './projects/projects.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';


const routes: Routes = [
  { path: 'projects', component: ProjectManagementSystemComponent },
  { path: 'project/:name', component: ProjectsComponent },

  { path: 'task/:name', component: TaskDetailComponent },


  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
