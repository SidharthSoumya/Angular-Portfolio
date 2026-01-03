import { Component, Inject, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';


@Component({
	selector: 'app-dialog',
	imports: [
		MatDialogTitle,
		MatDialogContent,
		MatButtonModule,
		MatIconModule,
		MatDialogClose
	],
	templateUrl: './dialog.component.html',
	styleUrl: './dialog.component.scss',
	standalone: true,
})
export class DialogComponent {
	imageUrl = '';
	safeImageUrl!: SafeUrl;

	constructor(
		@Inject(MAT_DIALOG_DATA) public data: any,
		private sanitizer: DomSanitizer
	) {
		const raw = data?.certificateUrl || '';
		this.imageUrl = typeof raw === 'string' ? raw : '';
		const url = typeof raw === 'string' ? raw : URL.createObjectURL(raw as Blob);
		this.safeImageUrl = this.sanitizer.bypassSecurityTrustUrl(url);
	}
}
