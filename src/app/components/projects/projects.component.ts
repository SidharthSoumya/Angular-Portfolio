import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { HttpClient } from '@angular/common/http';

export interface Project {
  projectId: string;
  title: string;
  description: string;
  technologies: string[];
  demoUrl: string;
  isPrivate: boolean;
  githubUrl: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, MatChipsModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  private http = inject(HttpClient);
  private apiUrl = 'https://jn52z60nt3.execute-api.ap-south-1.amazonaws.com/portfolio/projects';

  projects: Project[] | any = []

  constructor() {
    this.http.get(this.apiUrl).subscribe((projectResponse: any) => {
      this.projects = projectResponse;
    })
  }
}
