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
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with product catalog, shopping cart, and payment integration.',
      image: 'assets/images/projects/ecommerce.jpg',
      technologies: ['Angular', 'NgRx', 'Firebase', 'Stripe'],
      demoUrl: 'https://ecommerce-demo.com',
      githubUrl: 'https://github.com/username/ecommerce'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team features.',
      image: 'assets/images/projects/taskmanager.jpg',
      technologies: ['Angular', 'RxJS', 'Socket.io', 'MongoDB'],
      demoUrl: 'https://taskmanager-demo.com',
      githubUrl: 'https://github.com/username/taskmanager'
    },
    {
      title: 'Portfolio Website',
      description: 'A responsive portfolio website showcasing projects and skills with modern design.',
      image: 'assets/images/projects/portfolio.jpg',
      technologies: ['Angular', 'SCSS', 'GSAP', 'Three.js'],
      demoUrl: 'https://portfolio-demo.com',
      githubUrl: 'https://github.com/username/portfolio'
    },
    {
      title: 'Weather Dashboard',
      description: 'A weather dashboard with location-based forecasts and interactive charts.',
      image: 'assets/images/projects/weather.jpg',
      technologies: ['Angular', 'D3.js', 'OpenWeather API', 'Chart.js'],
      demoUrl: 'https://weather-demo.com',
      githubUrl: 'https://github.com/username/weather'
    }
  ];
}
