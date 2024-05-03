import { Component, OnInit } from '@angular/core';
import { ApplicationDataService } from '../../Services_Component/application-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private AlldataService: ApplicationDataService) { }
  allData: any[] = [];
  menutoggle: NodeListOf<Element> | null = null; // Declare menutoggle as a class property
  headernav: NodeListOf<Element> | null = null;

  ngOnInit(): void {
    this.menutoggle = document.querySelectorAll('.toggle');
    this.headernav = document.querySelectorAll('.headernav');
    this.FetchAllData();
  }

  // Fetch the data
  FetchAllData() {
    this.AlldataService.GetallData().subscribe((res: any) => {
      // alert(JSON.stringify(res));
      this.allData = res;
    });
  }
  // Toggle Menu
  ToggleMenu() {
    if (this.menutoggle && this.headernav) {
      this.menutoggle.forEach(toggle => toggle.classList.toggle('active'));
      this.headernav.forEach(nav => nav.classList.toggle('active'));
    }
  }
  // Scroll to Services
  scrollToServices() {
    const servicesSection = document.getElementById('servicesSection');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
