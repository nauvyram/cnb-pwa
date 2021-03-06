import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

interface NewCarData {
  data: any
}

@Injectable()
export class NewCarsModelsService {
  private urlPage = 'https://auto.ndtv.com/Native/NewCar/Default/Listing?';
  
  constructor(private http: HttpClient) {}

	public getNewCarListing(filters:string = ''): Observable<NewCarData> {
		let httpHeaders = new HttpHeaders()
			.set('x-app-api-key', 'carandbike_app_1')
			.set('x-app-api-secret', '3b36a010bde30e3411fe026870a29d8e');
		return this.http
		  .get(this.urlPage + filters, {
			headers: httpHeaders
		  })
		  .catch(this._handleError);
	}

  private extractData(res:Response) {
    
  }

  private _handleError(err: HttpErrorResponse | any) {
		const errorMsg = err.message || 'Error: Unable to complete request.';
		if (err.message) {
		  console.log(errorMsg);
		}
		return Observable.throw(errorMsg);
	}

}

