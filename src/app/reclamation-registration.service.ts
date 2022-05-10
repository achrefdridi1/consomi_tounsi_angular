import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
  
  export class ReclamationRegistrationService {
    constructor(private http:HttpClient) { }

    public addrec(reclamation) {

        return this.http.post("http://localhost:8081/SpringMVC/reclamation/add-reclamation",reclamation);
    }

    public getReclamations(){
      return this.http.get("http://localhost:8081/SpringMVC/reclamation/retrieve-all-reclamations");
    }

    public getReclamationById1(id:number){
      return this.http.get("http://localhost:8081/SpringMVC/reclamation/retreiverec/"+id);
    }
  
    public getReclamationById(id:number){
      return this.http.get("http://localhost:8081/SpringMVC/reclamation/retreive-reclamation/"+id);
    }
    
    public deleteReclamation(id:number){
      return this.http.delete("http://localhost:8081/SpringMVC/reclamation/remove-reclamation/"+id);
    }

    public updateReclamation(id:number,reclamation){
      return this.http.put("http://localhost:8081/SpringMVC/reclamation/update-reclamation2/"+id,reclamation);
    }

    public countReclamation(){
      return this.http.get("http://localhost:8081/SpringMVC/reclamation/countreclamations");
    }
  }