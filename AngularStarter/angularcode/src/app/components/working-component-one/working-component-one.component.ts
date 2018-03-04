import { Component, OnInit } from '@angular/core';
import {RestserviceService} from '../../services/rest-service/restservice.service';
@Component({
  selector: 'app-working-component-one',
  templateUrl: './working-component-one.component.html',
  styleUrls: ['./working-component-one.component.css']
})
export class WorkingComponentOneComponent implements OnInit {

  restData:any;
  constructor(private restService:RestserviceService) { }

  ngOnInit() {
  }

  getDataFromSpring(){
      this.restData=this.restService.getData().subscribe(data=>this.restData=data);
  }
}
