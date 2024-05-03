import { Component, OnInit } from '@angular/core';
import { ApplicationDataService } from '../../Services_Component/application-data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  constructor(private AlldataService: ApplicationDataService) { }
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
