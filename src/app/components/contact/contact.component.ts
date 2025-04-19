import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

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

	constructor(private fb: FormBuilder, private snackBar: MatSnackBar) {
		this.contactForm = this.fb.group({
			name: ['', Validators.required],
			email: ['', [Validators.required, Validators.email]],
			subject: ['', Validators.required],
			message: ['', Validators.required]
		});
	}

	onSubmit() {
		if (this.contactForm.valid) {
			this.isSubmitting = true;
			// Here you would typically send the form data to your backend
			console.log(this.contactForm.value);

			// Simulate API call
			setTimeout(() => {
				this.isSubmitting = false;
				this.snackBar.open('Message sent successfully!', 'Close', {
					duration: 3000,
					horizontalPosition: 'end',
					verticalPosition: 'top'
				});
				this.contactForm.reset();
			}, 1000);
		}
	}
}
