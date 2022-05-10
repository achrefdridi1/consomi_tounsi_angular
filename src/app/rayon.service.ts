import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RayonService {

  constructor(private http:HttpClient) { }



  public addRayonNow(rayon:any){
    return this.http.post("http://localhost:8081/SpringMVC/rayon/add-rayon",rayon,{responseType:'text' as 'json'});
  }

  public getRayons(){
    return this.http.get(" http://localhost:8081/SpringMVC/rayon/retrieve-all-rayon");
 }

 public getRayonById(idRayon:number){

  return this.http.get(" http://localhost:8081/SpringMVC/rayon/getRayon/"+idRayon);

 }

 public getRayonById1(idRayon:number){

  return this.http.get(" http://localhost:8081/SpringMVC/rayon/retrieve-rayon/"+idRayon);

 }
 public deleteRayon(idRayon:number){
  return this.http.delete(" http://localhost:8081/SpringMVC/rayon/delete-rayon/"+idRayon);

  
 }

 public updateRayon1(idRayon:number,rayon){

  return this.http.put("http://localhost:8081/SpringMVC/rayon/update-rayon2/"+idRayon,rayon)

 }

 public countRayons(){
  return this.http.get("http://localhost:8081/SpringMVC/rayon/countrayons");
}

}
