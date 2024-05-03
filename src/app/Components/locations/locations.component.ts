import { Component, OnInit } from '@angular/core';
import { ApplicationDataService } from '../../Services_Component/application-data.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrl: './locations.component.css'
})
export class LocationsComponent implements OnInit{
  constructor(private AlldataService:ApplicationDataService) { }
  allData: any[] = [];

ngOnInit(): void {
  this.FetchAllData();
}
 
//Fetch the data
FetchAllData(){
  this.AlldataService.GetallData().subscribe((res:any) => {
    // alert(JSON.stringify(res));
    this.allData = res;
  })
}
}
