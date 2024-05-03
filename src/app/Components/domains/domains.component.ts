import { Component, OnInit } from '@angular/core';
import { ApplicationDataService } from '../../Services_Component/application-data.service';

@Component({
  selector: 'app-domains',
  templateUrl: './domains.component.html',
  styleUrls: ['./domains.component.css']
})
export class DomainsComponent implements OnInit {
  constructor(private AlldataService: ApplicationDataService) { }
  allData: any[] = [];

  ngOnInit(): void {
    this.FetchAllData();
    document.addEventListener("DOMContentLoaded", () => {
      const carousel = document.querySelector(".carouselDomain") as HTMLElement;
      const arrowBtns = document.querySelectorAll(".wrapperDomain i");
      const wrapper = document.querySelector(".wrapperDomain") as HTMLElement;

      const firstCard = carousel.querySelector(".cardDomain") as HTMLElement;
      if (!firstCard) return;

      const firstCardWidth: number = firstCard.offsetWidth;

      let isDragging: boolean = false;
      let startX: number = 0;
      let startScrollLeft: number = 0;
      let timeoutId: NodeJS.Timeout | undefined;

      const dragStart = (e: MouseEvent) => {
        isDragging = true;
        carousel.classList.add("dragging");
        startX = e.pageX;
        startScrollLeft = carousel.scrollLeft;
      };

      const dragging = (e: MouseEvent) => {
        if (!isDragging) return;

        // Calculate the new scroll position
        const newScrollLeft = startScrollLeft - (e.pageX - startX);

        // Check if the new scroll position exceeds
        // the carousel boundaries
        if (newScrollLeft <= 0 || newScrollLeft >=
          carousel.scrollWidth - carousel.offsetWidth) {

          // If so, prevent further dragging
          isDragging = false;
          return;
        }

        // Otherwise, update the scroll position of the carousel
        carousel.scrollLeft = newScrollLeft;
      };

      const dragStop = () => {
        isDragging = false;
        carousel.classList.remove("dragging");
      };

      const autoPlay = () => {
        // Return if window is smaller than 800
        if (window.innerWidth < 800) return;

        // Calculate the total width of all cards
        const totalCardWidth = carousel.scrollWidth;

        // Calculate the maximum scroll position
        const maxScrollLeft = totalCardWidth - carousel.offsetWidth;

        // If the carousel is at the end, stop autoplay
        if (carousel.scrollLeft >= maxScrollLeft) return;

        // Autoplay the carousel after every 2500ms
        timeoutId = setTimeout(() =>
          carousel.scrollLeft += firstCardWidth, 2500);
      };

      carousel.addEventListener("mousedown", dragStart);
      carousel.addEventListener("mousemove", dragging);
      document.addEventListener("mouseup", dragStop);
      wrapper.addEventListener("mouseenter", () =>
        clearTimeout(timeoutId!)); // Use optional chaining
      wrapper.addEventListener("mouseleave", autoPlay);

      // Function to scroll to the previous card
      const scrollToPrevCard = () => {
        carousel.scrollLeft -= firstCardWidth;
      };

      // Function to scroll to the next card
      const scrollToNextCard = () => {
        carousel.scrollLeft += firstCardWidth;
      };

      // Add event listeners for the arrow buttons to
      // scroll the carousel left and right
      arrowBtns.forEach(btn => {
        btn.addEventListener("click", () => {
          if (btn.id === "left") {
            scrollToPrevCard();
          } else if (btn.id === "right") {
            scrollToNextCard();
          }
        });
      });
    });
  }

  // Fetch the data
  FetchAllData() {
    this.AlldataService.GetallData().subscribe((res: any) => {
      this.allData = res;
    });
  }
}
