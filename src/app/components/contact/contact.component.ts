import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { Router } from '@angular/router';

@Component({
	selector: 'app-contact',
	standalone: true,
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		MatCardModule,
		MatFormFieldModule,
		MatInputModule,
		MatButtonModule,
		MatIconModule,
		MatSnackBarModule
	],
	templateUrl: './contact.component.html',
	styleUrl: './contact.component.scss'
})
export class ContactComponent {
	contactForm: FormGroup;
	isSubmitting = false;

	serviceId = 'service_b71l4er'; // Replace with your Service ID
	templateId = 'template_wblyx6d'; // Replace with your Template ID
	publicKey = 'Y9ivSTKoXFWtgm1an';

	constructor(private fb: FormBuilder, private snackBar: MatSnackBar, private router: Router) {
		this.contactForm = this.fb.group({
			name: ['', Validators.required],
			email: ['', [Validators.required, Validators.email]],
			mobile: ['', [Validators.required]],
			subject: ['', Validators.required],
			message: ['', Validators.required]
		});
	}

	async onSubmit(event: Event): Promise<void> {
		if (this.contactForm.valid) {
			this.isSubmitting = true;

			try {
				this.isSubmitting = false;
				const response = await emailjs.sendForm(
					this.serviceId,
					this.templateId,
					event.target as HTMLFormElement,
					{ publicKey: this.publicKey }
				);
				this.snackBar.open('Message sent successfully!', 'Close', {
					duration: 3000,
					horizontalPosition: 'end',
					verticalPosition: 'top'
				});
				this.router.navigate(['/home']);
			} catch (error) {
				console.error('Error sending email:', error);
			}
		}
	}
}
