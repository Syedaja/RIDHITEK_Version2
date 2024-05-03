import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ApplicationDataService } from '../../Services_Component/application-data.service';

declare var AOS: any;

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  allData: any[] = [];
  slides: HTMLElement[] | null = null;
  text: HTMLElement[] | null = null;
  prev: HTMLElement | null = null;
  next: HTMLElement | null = null;
  i = 0;
  intervalId: any;

  constructor(private router: Router, private AlldataService: ApplicationDataService) {}

  ngOnInit(): void {
    // Get references to DOM elements
    this.slides = Array.from(document.querySelectorAll('.slides'));
    this.text = Array.from(document.querySelectorAll('.text'));
    this.next = document.querySelector('.next') as HTMLElement;
    this.prev = document.querySelector('.prev') as HTMLElement;

    // Initialize component
    this.ActiveSlide(this.i);
    this.startAutomaticSlide();
    this.animation();
    this.FetchAllData();

    // Scroll to top on route change
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }

  // Initialize AOS animation
  animation() {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true
    });
  }

  // Fetch data from service
  FetchAllData() {
    this.AlldataService.GetallData().subscribe((res: any) => {
      this.allData = res;
    })
  }

  // Activate current slide and corresponding text
  ActiveSlide(index: number) {
    if (this.slides && this.text) {
      this.slides.forEach(slide => slide.classList.remove('active'));
      this.text.forEach(texts => texts.classList.remove('active'));
      this.slides[index].classList.add('active');
      this.text[index].classList.add('active');
    }
  }

  // Move to the next slide
  nextSlide() {
    if (this.slides && this.text) {
      this.i = (this.i + 1) % this.slides.length;
      this.ActiveSlide(this.i);
    }
  }

  // Move to the previous slide
  prevSlide() {
    if (this.slides && this.text) {
      this.i = (this.i - 1 + this.slides.length) % this.slides.length;
      this.ActiveSlide(this.i);
    }
  }

  // Start automatic sliding
  startAutomaticSlide() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 8000);
  }

  // Stop automatic sliding
  stopAutomaticSlide() {
    clearInterval(this.intervalId);
  }

  // Go to a specific slide
  goToSlide(index: number) {
    this.i = index;
    this.ActiveSlide(this.i);
  }

  // Scroll to services section
  scrollToServices() {
    const servicesSection = document.getElementById('servicesSection');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
