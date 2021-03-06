import { Component, OnInit, Input } from '@angular/core';

import { ProjectsComponent } from '../projects';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {

  project: ProjectsComponent | undefined;

  constructor(private route: ActivatedRoute,
    private projectService: ProjectService,
    private location: Location) { }

  ngOnInit(): void {

  }

  
  goBack(): void {
    this.location.back();
  }

}
