import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogClose, MatDialogContent } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
	selector: 'app-dialog',
	imports: [
		MatDialogContent,
		MatButtonModule,
		MatIconModule
	],
	templateUrl: './dialog.component.html',
	styleUrl: './dialog.component.scss',
	standalone: true,
})
export class DialogComponent {
	assetUrl = '';
	safeAssetUrl!: SafeResourceUrl;
	isPdf = false;

	constructor(
		@Inject(MAT_DIALOG_DATA) public data: any,
		private sanitizer: DomSanitizer
	) {
		const raw = data?.assetUrl || '';
		this.assetUrl = typeof raw === 'string' ? raw : '';
		this.isPdf = this.assetUrl.toLowerCase().split('?')[0].endsWith('.pdf');
		this.safeAssetUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.assetUrl);
	}
}