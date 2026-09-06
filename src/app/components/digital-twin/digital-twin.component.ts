import { Component, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-digital-twin',
  standalone: true,
  imports: [],
  templateUrl: './digital-twin.component.html',
  styleUrls: ['./digital-twin.component.scss']
})
export class DigitalTwinComponent {
  private sanitizer = inject(DomSanitizer);
  private renderUrl = 'https://twin-5onx.onrender.com/';

  safeUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.renderUrl);

  // Helper method to safely toggle scroll on the body when dialog opens/closes
  toggleBodyScroll(lock: boolean) {
    document.body.style.overflow = lock ? 'hidden' : '';
  }
}

