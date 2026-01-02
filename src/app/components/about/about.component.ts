import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatDividerModule, MatIconModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  skillCategories = [
    {
      name: 'Frontend Development',
      skills: [
        { name: 'Angular', icon: 'code', level: 95 },
        { name: 'TypeScript', icon: 'javascript', level: 90 },
        { name: 'HTML/CSS', icon: 'html', level: 85 },
        { name: 'RxJS', icon: 'data_object', level: 85 },
        { name: 'Angular Material', icon: 'widgets', level: 80 }
      ]
    },
    {
      name: 'Backend & Tools',
      skills: [
        { name: 'Node.js', icon: 'dns', level: 75 },
        { name: 'RESTful APIs', icon: 'api', level: 85 },
        { name: 'Git', icon: 'code_branch', level: 90 },
        { name: 'Docker', icon: 'view_in_ar', level: 70 },
        { name: 'CI/CD', icon: 'sync', level: 75 }
      ]
    },
    {
      name: 'AI & Cloud Services',
      skills: [
        { name: 'AWS S3', icon: 'storage', level: 80 },
        { name: 'AWS Cloudfront', icon: 'public', level: 60 },
        { name: 'AWS Lambda', icon: 'bolt', level: 70 },
        { name: 'MCP Server', icon: 'dns', level: 60 },
        { name: 'N8N Worlflows', icon: 'flowcharts', level: 70 },
      ]
    },
    {
      name: 'Testing & Quality',
      skills: [
        { name: 'Jasmine', icon: 'science', level: 85 },
        { name: 'Karma', icon: 'bug_report', level: 80 },
        { name: 'Unit Testing', icon: 'check_circle', level: 85 },
        { name: 'E2E Testing', icon: 'integration_instructions', level: 75 }
      ]
    }
  ];
}
