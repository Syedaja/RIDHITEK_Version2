import { Component, AfterViewInit, OnInit } from '@angular/core';
import Swiper from 'swiper';
import { ApplicationDataService } from '../../Services_Component/application-data.service';

@Component({
  selector: 'app-about-teams',
  templateUrl: './about-teams.component.html',
  styleUrls: ['./about-teams.component.css']
})
export class AboutTeamsComponent implements OnInit {


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
