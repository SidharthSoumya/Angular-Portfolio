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
    { icon: 'graph_8', url: 'https://github.com/SidharthSoumya?tab=repositories', label: 'GitHub' },
    { icon: 'link', url: 'https://www.linkedin.com/in/j-soumya-sidharth-88645a7a/', label: 'LinkedIn' },
    { icon: 'mail', url: 'mailto:sidharthsoumya@gmail.com', label: 'Email' }
  ];
} 