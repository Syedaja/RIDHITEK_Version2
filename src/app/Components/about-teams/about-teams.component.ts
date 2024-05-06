import { Component, AfterViewInit, OnInit } from '@angular/core';
import Swiper from 'swiper';
import { ApplicationDataService } from '../../Services_Component/application-data.service';
declare var jQuery: any;
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


    jQuery(document).ready(() => {

      const detect_active = () => {
        // get active
        const get_active = jQuery("#dp-slider .dp_item:first-child").data("class");
        jQuery("#dp-dots li").removeClass("active");
        jQuery("#dp-dots li[data-class=" + get_active + "]").addClass("active");
      };
      
      jQuery("#dp-next").click(() => {
        const total = jQuery(".dp_item").length;
        jQuery("#dp-slider .dp_item:first-child").hide().appendTo("#dp-slider").fadeIn();
        jQuery.each(jQuery('.dp_item'), (index: number, dp_item: HTMLElement) => {
          jQuery(dp_item).attr('data-position', index + 1);
        });
        detect_active();
      });

      jQuery("#dp-prev").click(() => {
        const total = jQuery(".dp_item").length;
        jQuery("#dp-slider .dp_item:last-child").hide().prependTo("#dp-slider").fadeIn();
        jQuery.each(jQuery('.dp_item'), (index: number, dp_item: HTMLElement) => {
          jQuery(dp_item).attr('data-position', index + 1);
        });
        detect_active();
      });

      jQuery("#dp-dots li").click(function(this: HTMLElement){
        jQuery("#dp-dots li").removeClass("active");
        jQuery(this).addClass("active");
        const get_slide = jQuery(this).attr('data-class');
        console.log(get_slide);
        jQuery("#dp-slider .dp_item[data-class=" + get_slide + "]").hide().prependTo("#dp-slider").fadeIn();
        jQuery.each(jQuery('.dp_item'), (index: number, dp_item: HTMLElement) => {
          jQuery(dp_item).attr('data-position', index + 1);
        });
      });

      jQuery("body").on("click", "#dp-slider .dp_item:not(:first-child)", function(this: HTMLElement){
        const get_slide = jQuery(this).attr('data-class');
        console.log(get_slide);
        jQuery("#dp-slider .dp_item[data-class=" + get_slide + "]").hide().prependTo("#dp-slider").fadeIn();
        jQuery.each(jQuery('.dp_item'), (index: number, dp_item: HTMLElement) => {
          jQuery(dp_item).attr('data-position', index + 1);
        });
        detect_active();
      });
    });
  }
 
//Fetch the data
FetchAllData(){
  this.AlldataService.GetallData().subscribe((res:any) => {
    // alert(JSON.stringify(res));
    this.allData = res;
  })
}


}
