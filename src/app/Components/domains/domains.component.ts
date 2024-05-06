import { Component, OnInit,ElementRef, ViewChild, AfterViewInit, HostListener } from '@angular/core';
import { ApplicationDataService } from '../../Services_Component/application-data.service';
import Swiper from 'swiper';

@Component({
  selector: 'app-domains',
  templateUrl: './domains.component.html',
  styleUrls: ['./domains.component.css']
})
export class DomainsComponent implements OnInit,AfterViewInit {
  constructor(private AlldataService: ApplicationDataService,private elementRef: ElementRef) { }
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
        if (newScrollLeft <= 0 || newScrollLeft >= carousel.scrollWidth - carousel.offsetWidth) {
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
        // Calculate the total width of all cards
        const totalCardWidth = carousel.scrollWidth;
      
        // If the carousel is at the end, reset to the beginning
        if (carousel.scrollLeft + carousel.offsetWidth >= totalCardWidth) {
          carousel.scrollLeft = 0;
          return;
        }
      
        // Autoplay the carousel
        carousel.scrollLeft += firstCardWidth;
      };

      carousel.addEventListener("mousedown", dragStart);
      carousel.addEventListener("mousemove", dragging);
      document.addEventListener("mouseup", dragStop);
      wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId!)); // Use optional chaining
      wrapper.addEventListener("mouseleave", autoPlay);

   // Function to scroll to the previous card
const scrollToPrevCard = () => {
  // Calculate the total width of all cards
  const totalCardWidth = carousel.scrollWidth;
  
  // Calculate the maximum scroll position
  const maxScrollLeft = totalCardWidth - carousel.offsetWidth;
  
  // If the carousel is at the beginning, scroll to the last card
  if (carousel.scrollLeft <= 0) {
    carousel.scrollLeft = maxScrollLeft;
    return;
  }

  // Otherwise, scroll to the previous card
  carousel.scrollLeft -= firstCardWidth;
};

// Function to scroll to the next card
const scrollToNextCard = () => {
  // Calculate the total width of all cards
  const totalCardWidth = carousel.scrollWidth;
  
  // Calculate the maximum scroll position
  const maxScrollLeft = totalCardWidth - carousel.offsetWidth;
  
  // If the carousel is at the end, reset to the beginning
  if (carousel.scrollLeft >= maxScrollLeft) {
    carousel.scrollLeft = 0;
    return;
  }
  
  // Otherwise, scroll to the next card
  carousel.scrollLeft += firstCardWidth;

  // If the carousel is at the end after scrolling, loop back to the first card
  if (carousel.scrollLeft >= maxScrollLeft - firstCardWidth) {
    carousel.scrollLeft = 0;
  }
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
  ngAfterViewInit(): void {
    new Swiper(this.elementRef.nativeElement.querySelector('.mySwiper'), {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      slidesPerView: 3,
      spaceBetween: 30,
      freeMode: true
    });
  }
}
