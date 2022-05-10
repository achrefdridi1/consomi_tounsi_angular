import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LivreurRegistrationService {

  constructor(private http:HttpClient) { }

  public doRegistration(livreur){
    return this.http.post("http://localhost:8081/SpringMVC/livreur/add-livreur",livreur);

  }

  public getLivreurs(){
    return this.http.get("http://localhost:8081/SpringMVC/livreur/retrieve-all-livreurs");
  }

  public getLivreurById(id:number){
    return this.http.get("http://localhost:8081/SpringMVC/livreur/retreive-livreur/"+id);
  }

  public getLivreurById1(id:number){
    return this.http.get("http://localhost:8081/SpringMVC/livreur/retreiveliv/"+id);
  }
  
  public deleteLivreur(id:number){
    return this.http.delete("http://localhost:8081/SpringMVC/livreur/remove-livreur/"+id);
  }

  public updateLivreur(id:number,livreur){
    return this.http.put("http://localhost:8081/SpringMVC/livreur/update-livreur2/"+id,livreur);
}
  public countlivreurs(){
    return this.http.get("http://localhost:8081/SpringMVC/livreur/countlivreurs");
  }
}
