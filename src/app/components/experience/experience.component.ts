import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

@Component({
	selector: 'app-experience',
	standalone: true,
	imports: [CommonModule, MatChipsModule, MatIconModule],
	templateUrl: './experience.component.html',
	styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
	experiences = [
		{
			title: 'Senior Software Engineer',
			company: 'Tyler Technologies (ARInspect)',
			location: 'Ahmedabad, IN',
			startDate: 'Sep 2022',
			endDate: 'Present',
			description: 'Lead the development of a large-scale web application using Angular, focusing on performance and scalability.',
			responsibilities: [
				'Architected PWA with offline capabilities for the application using Angular and Service Workers',
				'Designed and implemented reusable components and services to improve code maintainability',
				'Integrated RESTful APIs and third-party libraries to enhance application functionality',
				'Conducted code reviews and provided mentorship to junior developers',
				'Followed Agile methodologies to manage project timelines and deliverables',
				'Collaborated with UX/UI designers to create a user-friendly interface',
				'Participated in sprint planning and retrospectives to continuously improve team processes',
				'Worked closely with the DevOps team to implement CI/CD pipelines for automated testing and deployment',
			],
			technologies: ['Angular', 'TypeScript', 'Node.js', 'HTML5', 'CSS3', 'SCSS', 'Angular Material', 'Bootstrap', 'RxJS', 'RESTful APIs', 'Service Workers', 'Git', 'Jenkins']
		},
		{
			title: 'Angular Developer',
			company: 'Cipio India Private Limited',
			location: 'Ahmedabad, IN',
			startDate: 'July 2021',
			endDate: 'Sep 2022',
			description: 'Developed & designed the web product using Angular, focusing on performance and scalability best user experience.',
			responsibilities: [
				'Developed a responsive web application using Angular and Bootstrap',
				'Created reusable components and services to improve code maintainability',
				'Integrated social media APIs like Facebook & Instagram for user authentication and data retrieval',
				'Used socket.io for real-time data updates and notifications',
				'chart.js was used for data visualization and analytics',
			],
			technologies: ['Angular', 'TypeScript', 'HTML5', 'CSS3', 'SCSS', 'Bootstrap', 'chart.js', 'socket.io']
		},
		{
			title: 'Angular Developer',
			company: 'Silicon Techlab Private Limited',
			location: 'Bhubaneswar, IN',
			startDate: 'Dec 2018',
			endDate: 'Apr 2021',
			description: 'Worked on multiple client projects, focusing on responsive design and performance optimization.',
			responsibilities: [
				'Built responsive web applications using Angular and Bootstrap',
				'Integrated RESTful APIs and third-party libraries to enhance application functionality',
				'Collaborated with UX designers to implement pixel-perfect designs',
				'Participated in Agile ceremonies and contributed to sprint planning and retrospectives',
			],
			technologies: ['Angular', 'TypeScript', 'HTML5', 'CSS3', 'SCSS', 'Bootstrap']
		},
		{
			title: 'System Engineer Trainee',
			company: 'Infosys Limited',
			location: 'Mysore, IN',
			startDate: 'Feb 2018',
			endDate: 'July 2018',
			description: 'Trained in various industry-standard technologies and frameworks, focusing on Frontend Web development.',
			responsibilities: [
				'Completed a rigorous training program on Angular, JavaScript, and web development best practices',
				'Worked on a team project to develop a web application using Angular and Bootstrap',
				'Learned about python language and its applications in industry',
			],
			technologies: ['Python', 'Angular', 'JavaScript', 'HTML5', 'CSS3', 'SCSS', 'Bootstrap']
		}
	];
}
