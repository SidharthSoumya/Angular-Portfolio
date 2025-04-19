import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  
  socialLinks = [
    { icon: 'code', url: 'https://github.com', label: 'GitHub' },
    { icon: 'link', url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: 'mail', url: 'mailto:sidharthsoumya@gmail.com', label: 'Email' }
  ];
} 