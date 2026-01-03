// ...existing code...
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
	selector: 'app-certifications',
	standalone: true,
	imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule, MatChipsModule, MatDividerModule, MatDialogModule],
	templateUrl: './certifications.component.html',
	styleUrls: ['./certifications.component.scss']
})
export class CertificationsComponent {
	dialog = inject(MatDialog);
	// Add or reorder certificates here (newest first). Each entry alternates left/right in the timeline.
	certificates = [
		{
			date: 'Jan 2 2026',
			title: 'Intro to N8N Agents: Automate Work Effortlessly',
			issuer: 'Udemy',
			certificateUrl: '/assets/certificates/intro-to-n8n-agents.jpg',
			tags: ['N8N', 'AI', 'Workflow']
		},
		{
			date: 'Nov 25 2025',
			title: 'Drawing and Painting on the iPad with Procreate',
			issuer: 'Udemy',
			certificateUrl: '/assets/certificates/drawing-with-procreate.jpg',
			tags: ['Procreate', 'Digital Art']
		},
		{
			date: 'Oct 19 2025',
			title: 'Basic AWS Architecture Best Practices',
			issuer: 'Udemy',
			certificateUrl: '/assets/certificates/aws-best-practices.jpg',
			tags: ['AWS', 'Security']
		},
		{
			date: 'Sept 29 2025',
			title: 'AWS Serverless APls & Apps - A Complete Introduction',
			issuer: 'Udemy',
			certificateUrl: '/assets/certificates/aws-serverless-api.jpg',
			tags: ['AWS S3', 'AWS Lambda', 'AWS DynamoDB']
		},
		{
			date: 'Dec 30 2024',
			title: 'Angular Deep Dive - Beginner to Advanced (Angular 19)',
			issuer: 'Udemy',
			certificateUrl: '/assets/certificates/angular-deep-dive.jpg',
			tags: ['Angular', 'Performance', 'Typescript']
		},
		{
			date: 'Jun 1 2024',
			title: 'Introduction to Unit Testing',
			issuer: 'Scrimba',
			certificateUrl: '/assets/certificates/intro-to-unit-test.jpg',
			tags: ['Javascript', 'Jasmine']
		},
		{
			date: 'May 20 2024',
			title: 'Learn CSS Grid',
			issuer: 'Scrimba',
			certificateUrl: '/assets/certificates/learn-css-grid.jpg',
			tags: ['CSS', 'SCSS']
		},
		{
			date: 'Apr 9 2024',
			title: 'Advanced React',
			issuer: 'Scrimba',
			certificateUrl: '/assets/certificates/advanced-react.jpg',
			tags: ['ReactJS', 'Typescript', 'Performance']
		},
		{
			date: 'Mar 19 2024',
			title: 'Introduction to Clean Code',
			issuer: 'Scrimba',
			certificateUrl: '/assets/certificates/intro-to-clean-code.jpg',
			tags: ['Code', 'Optimization']
		},
		{
			date: 'Mar 18 2024',
			title: 'Learn Flexbox',
			issuer: 'Scrimba',
			certificateUrl: '/assets/certificates/learn-flexbox.jpg',
			tags: ['CSS', 'SCSS']
		},
		{
			date: 'Feb 22 2024',
			title: 'Learn React',
			issuer: 'Scrimba',
			certificateUrl: '/assets/certificates/learn-react.jpg',
			tags: ['ReactJS', 'Typescript', 'Javascript']
		},
		{
			date: 'Sept 9 2020',
			title: 'Python Basic',
			issuer: 'HackerRank',
			certificateUrl: '/assets/certificates/python-basic.jpg',
			tags: ['Python']
		},

	];

	viewCertificate(cert: any) {
		this.dialog.open(DialogComponent, {
			data: cert,
			width: '1000px',
		});
	}
}