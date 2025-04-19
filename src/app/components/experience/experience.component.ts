import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';

@Component({
	selector: 'app-experience',
	standalone: true,
	imports: [CommonModule, MatChipsModule],
	templateUrl: './experience.component.html',
	styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
	experiences = [
		{
			title: 'Senior Angular Developer',
			company: 'TechCorp Solutions',
			location: 'Bangalore, India',
			startDate: 'Jan 2021',
			endDate: 'Present',
			description: 'Leading the frontend development team in building enterprise-level applications using Angular and related technologies.',
			responsibilities: [
				'Architected and implemented a scalable micro-frontend architecture using Angular modules and lazy loading',
				'Developed reusable component libraries that reduced development time by 40% across multiple projects',
				'Mentored junior developers and conducted code reviews to maintain high code quality standards',
				'Implemented state management solutions using NgRx for complex application state',
				'Optimized application performance resulting in a 60% reduction in load times'
			],
			technologies: ['Angular', 'TypeScript', 'NgRx', 'RxJS', 'SCSS', 'Jest', 'Cypress']
		},
		{
			title: 'Angular Developer',
			company: 'WebTech Innovations',
			location: 'Hyderabad, India',
			startDate: 'Mar 2019',
			endDate: 'Dec 2020',
			description: 'Worked on multiple client projects, focusing on responsive design and performance optimization.',
			responsibilities: [
				'Built responsive web applications using Angular and Angular Material',
				'Integrated RESTful APIs and implemented authentication using JWT',
				'Developed interactive data visualizations using D3.js and Chart.js',
				'Implemented unit and end-to-end tests using Jasmine and Protractor',
				'Collaborated with UX designers to implement pixel-perfect designs'
			],
			technologies: ['Angular', 'TypeScript', 'Angular Material', 'D3.js', 'Chart.js', 'Jasmine', 'Protractor']
		},
		{
			title: 'Frontend Developer',
			company: 'Digital Solutions Inc.',
			location: 'Mumbai, India',
			startDate: 'Jun 2018',
			endDate: 'Feb 2019',
			description: 'Started as a junior developer and quickly progressed to handling more complex features and components.',
			responsibilities: [
				'Developed and maintained multiple Angular applications for various clients',
				'Implemented responsive designs using CSS frameworks and custom SCSS',
				'Worked with RESTful APIs and handled data transformation',
				'Participated in daily stand-ups and sprint planning meetings',
				'Fixed bugs and implemented feature requests based on client feedback'
			],
			technologies: ['Angular', 'JavaScript', 'HTML5', 'CSS3', 'SCSS', 'Bootstrap', 'RESTful APIs']
		}
	];
}
