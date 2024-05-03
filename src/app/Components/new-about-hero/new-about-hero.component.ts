import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ApplicationDataService } from '../../Services_Component/application-data.service';

declare var AOS: any;

@Component({
  selector: 'app-new-about-hero',
  templateUrl: './new-about-hero.component.html',
  styleUrls: ['./new-about-hero.component.css']
})
export class NewAboutHeroComponent implements OnInit {
  constructor(private router: Router, private AlldataService: ApplicationDataService) {}

  allData: any[] = [];

  ngOnInit(): void {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true
    });

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0); // Scroll the window to the top
      }
    });

    this.FetchAllData();
  }

  // Fetch the data
  FetchAllData(): void {
    this.AlldataService.GetallData().subscribe((res: any) => {
      this.allData = res;
    });
  }
}
