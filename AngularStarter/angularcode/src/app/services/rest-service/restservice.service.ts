import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from '../../../environments/environment';
@Injectable()
export class RestserviceService {

  restRoot = environment.restServerUrl;
  constructor(private http:Http) { }

  getData(){
    return this.http.get(this.restRoot+'/rest/getMachines')
    .map((res:Response) => res.json());
  }
}
