import { Component,HostListener } from '@angular/core';


@Component({
  selector: 'app-back-to-top',
  templateUrl: './back-to-top.component.html',
  styleUrl: './back-to-top.component.css'
})
export class BackToTopComponent {

  constructor(){}
  // Set the scroll position to show the button
  scrollPositionToShowButton = 100; 
  isButtonvisibleBACKTOTOP = false;
  

  // Function to handle scrolling
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.pageYOffset > this.scrollPositionToShowButton) {
      this.isButtonvisibleBACKTOTOP = true;
    } else {
      this.isButtonvisibleBACKTOTOP = false;
    }
  } 
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
