import { Component, OnInit } from '@angular/core';
import { ApplicationDataService } from '../../Services_Component/application-data.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor(private AlldataService: ApplicationDataService) {}
 
  allData: any[] = [];

  ngOnInit(): void {
    this.FetchAllData();
  }
 
  // Fetch the data
  FetchAllData() {
    this.AlldataService.GetallData().subscribe((res: any) => {
      // alert(JSON.stringify(res));
      this.allData = res;
    });
  }
}
