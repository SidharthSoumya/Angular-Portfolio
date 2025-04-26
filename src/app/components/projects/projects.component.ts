import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, MatChipsModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Arinspect',
      description: 'Acquired by Tyler last November, ARInspect is an AI-powered augmented reality platform that streamlines field inspections and compliance for government agencies by digitizing processes, automating workflows, and providing real-time data insights to improve efficiency and safety.',
      image: 'assets/images/projects/ecommerce.jpg',
      technologies: ['Angular', 'Node', 'Angular Material', 'Mixpanel'],
      demoUrl: 'https://qa.fieldops.tylerapp.com/',
      isPrivate: true,
      githubUrl: ''
    },
    {
      title: 'Cipio.ai',
      description: 'CIPIO.ai is an AI-powered video marketing platform that enables brands to efficiently source, create, and manage authentic user-generated content (UGC) videos for various marketing channels, improving performance and ROI.',
      image: 'assets/images/projects/taskmanager.jpg',
      technologies: ['Angular', 'Chart.js', 'Socket.io', 'Python', 'Mixpanel'],
      demoUrl: 'https://cim.cipio.ai/',
      isPrivate: true,
      githubUrl: ''
    },
    {
      title: 'Portfolio Website',
      description: 'Explore the portfolio of a proficient Angular developer with over 6 years of experience, featuring a range of projects and easy contact options, all presented on a mobile-friendly website',
      image: 'assets/images/projects/portfolio.jpg',
      technologies: ['Angular', 'SCSS', 'Angular Material', 'Cursor.ai'],
      demoUrl: 'https://jssidharth.netlify.app/home',
      isPrivate: false,
      githubUrl: 'https://github.com/SidharthSoumya/Angular-Portfolio'
    },
    {
      title: 'Tenzies Game',
      description: 'In this engaging dice game, players repeatedly roll their set of dice, strategically choosing which to re-roll. The ultimate goal is to achieve a uniform result where every die displays the same number. The first player to reach this matching state emerges as the winner, blending luck and tactical decisions in each turn.',
      image: 'assets/images/projects/ecommerce.jpg',
      technologies: ['React', 'CSS', 'React-DOM', 'Vite'],
      demoUrl: 'https://react-game-tenzies.netlify.app',
      isPrivate: false,
      githubUrl: 'https://github.com/SidharthSoumya/tenzies-game'
    }
  ];
}
