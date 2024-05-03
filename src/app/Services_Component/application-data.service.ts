import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class ApplicationDataService {

  constructor(private http:HttpClient) { }

  GetallData(){
    return this.http.get('../../../../assets/JSON_FROMAT_DATAS/AllData.json');
  }
}
