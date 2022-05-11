import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserForumService {

  constructor(private http:HttpClient) { }


  public doRegistration(publication,userId){
    console.log(userId);
    this.http.get("http://localhost:8081/SpringMVC/sendSms/"+"HELLO your post: "+publication.ti+" , has been successfully published");
    return this.http.post("http://localhost:8081/SpringMVC/publication/add-publication/"+userId,publication,{responseType:'text' as 'json'});
  }

  public getPublications():Observable<any>{
    return this.http.get("http://localhost:8081/SpringMVC/publication/retrieve-all-publications");
  }

  public getPublicationById(id){
    return this.http.get("http://localhost:9090//findPublication/"+id);
  }

  public deletePublication(id){
    return this.http.delete("http://localhost:9090/cancel/"+id);
  }
  public deleteCommentaire(id){
    return this.http.delete("http://localhost:8081/SpringMVC/commentaire/remove-commentaire/"+id);
  }

  public getCommentaires(publicationId):Observable<any>{
    return this.http.get("http://localhost:8081/SpringMVC/commentaire/"+publicationId);
  }
  
  public addCommentaire(commentaire,pubId,userId){
    return this.http.post("http://localhost:8081/SpringMVC/commentaire/add-commentaire/"+pubId+"/"+userId,commentaire,{responseType:'text' as 'json'});
  }
}
