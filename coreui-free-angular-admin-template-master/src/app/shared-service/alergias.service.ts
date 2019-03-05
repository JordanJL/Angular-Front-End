import {Injectable} from '@angular/core';
import {Http, Response ,Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/internal/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import {Alergias} from '../alergias';
import { HttpClientModule} from "@angular/common/http";


@Injectable()
export class AlergiasService{
    private baseUrl: String = 'http://localhost:8080/alergias';
    private hearders= new Headers({'Content-Type':'application/json'});
    private options = new RequestOptions({headers: this.hearders});

    constructor(private _http:Http){}

    getAlergias(){
        return this._http.get(this.baseUrl+'/alergias',this.options).map((response:Response)=>response.json())
        .catch(this.errorHandler);
    }

    
    getAlergia(id:Number){

        return this._http.get(this.baseUrl+'/alergias/'+id,this.options).map((response:Response)=>response.json())
        .catch(this.errorHandler);

    }

    deleteAlergia(id:Number){

        return this._http.delete(this.baseUrl+'/alergias/'+id,this.options).map((response:Response)=>response.json())
        .catch(this.errorHandler);

    }

    creteAlergia(alergia:Alergias){

        return this._http.post(this.baseUrl+'/alergias/',JSON.stringify(alergia),this.options).map((response:Response)=>response.json())
        .catch(this.errorHandler);

    }

    updateAlergia(alergia:Alergias){

        return this._http.put(this.baseUrl+'/alergias/',JSON.stringify(alergia),this.options).map((response:Response)=>response.json())
        .catch(this.errorHandler);

    }

    errorHandler(error:Response){
        return Observable.throw(error||"SERVER ERROR");
    }
}