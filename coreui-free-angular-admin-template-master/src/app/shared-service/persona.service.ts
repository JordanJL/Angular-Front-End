import {Injectable} from '@angular/core';
import {Http, Response ,Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import {Persona} from '../persona';


@Injectable()
export class PersonaService{
    private baseUrl: String = 'http://localhost:8080';
    private hearders= new Headers({'Content-Type':'application/json'});
    private options = new RequestOptions({headers: this.hearders});

    constructor(private _http:Http){}

    getPersonas(size:Number,page:Number, criteria:String){

        return this._http.get(this.baseUrl+'/pacientes?size='+size+'&page='+page+'&criteria='+criteria,this.options).map((response:Response)=>response.json())
        .catch(this.errorHandler);
    }

    
    getPersona(id:Number){

        return this._http.get(this.baseUrl+'/personas/'+id,this.options).map((response:Response)=>response.json())
        .catch(this.errorHandler);

    }

    deletePersona(id:Number){

        return this._http.delete(this.baseUrl+'/personas/'+id,this.options).map((response:Response)=>response.json())
        .catch(this.errorHandler);

    }

    cretePersona(persona:Persona){

        return this._http.post(this.baseUrl+'/personas/',JSON.stringify(persona),this.options).map((response:Response)=>response.json())
        .catch(this.errorHandler);

    }

    
    updatePersona(persona:Persona){
        
        return this._http.put(this.baseUrl+'/personas/',JSON.stringify(persona),this.options).map((response:Response)=>response.json())
        .catch(this.errorHandler);

    }
    /*
     * PROFESIONES
     */

     getProfesiones(){
        return this._http.get(this.baseUrl+'/profesion',this.options).map((response:Response)=>response.json())
        .catch(this.errorHandler);
     }
      /*
     * Estado Civil
     */

     getEstadoCivil(){
        return this._http.get(this.baseUrl+'/civil',this.options).map((response:Response)=>response.json())
        .catch(this.errorHandler); 
     }

     /*
     *  Pais
     */

    getPais(){
        return this._http.get(this.baseUrl+'/pais',this.options).map((response:Response)=>response.json())
        .catch(this.errorHandler); 
     }

    errorHandler(error:Response){
        return Observable.throw(error||"SERVER ERROR");
    }
}