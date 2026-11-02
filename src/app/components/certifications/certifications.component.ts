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
import { HttpClient } from '@angular/common/http';

export interface Certification {
	certificationId: string;
	issueDate: string;
	title: string;
	issuer: string;
	tags: string[];
	assetUrl: string;
}

@Component({
	selector: 'app-certifications',
	standalone: true,
	imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule, MatChipsModule, MatDividerModule, MatDialogModule],
	templateUrl: './certifications.component.html',
	styleUrls: ['./certifications.component.scss']
})
export class CertificationsComponent {
	dialog = inject(MatDialog);

	private http = inject(HttpClient);
	private apiUrl = 'https://jn52z60nt3.execute-api.ap-south-1.amazonaws.com/portfolio/certifications';

	certificates: Certification[] | any = []

	constructor() {
		this.http.get(this.apiUrl).subscribe((certResponse: any) => {
			console.log(certResponse)
			this.certificates = certResponse;
		})
	}


	viewCertificate(cert: any) {
		this.dialog.open(DialogComponent, {
			data: cert,
		});
	}
}