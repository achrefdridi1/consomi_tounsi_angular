import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Alert } from 'selenium-webdriver';
import { Commentaire } from '../data/commentaire';
import { UserForumService } from '../user-forum.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Publication } from '../data/publication';
import { AppDataService } from '../service/appdata.service';










@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css'],
})
//export class InputOverviewExample {}
export class ForumComponent implements OnInit {
  
  publications: Observable<Publication[]>;

  term:string;  
  //commentaires: Observable<Commentaire[]>;
  //commentaireText;

  publication: Publication=new Publication("","","");
  nCommentaire: Commentaire=new Commentaire("");
  message:any;
  filePath:string;
  myForm: FormGroup;
  alert: Alert;
  expanded:boolean;
  loggedInUserId:number;

  constructor(private service:UserForumService, public fb : FormBuilder, private _sanitizer: DomSanitizer, private router: Router,private appDataService: AppDataService) 
  {
    this.myForm = this.fb.group({
      img: [null],
      filename: ['']
    })
   }

   transform(base64Image:any){
    return this._sanitizer.bypassSecurityTrustResourceUrl(base64Image);
}

  ngOnInit() {
    
    this.loggedInUserId = this.appDataService.userId;
    this.reloadData()
  }
   ispub(pubid){
     if(pubid == this.loggedInUserId) return true;
     else return true;
  }

 
  
  
  reloadData() {
    this.publications = this.service.getPublications();
    //this.commentaires = this.service.getCommentaires(2);
  }

  

  public onKey(val,pub) { 
    console.log(val);
      this.nCommentaire.contenuCommentaire = val;
      //this.nCommentaire.publication.publicationId= pub;
      let resp=this.service.addCommentaire(this.nCommentaire,pub,this.appDataService.userId);
      this.ngOnInit();
      resp.subscribe((data)=>this.message=data);
      
  }

  public addPostNow(){
let resp=this.service.doRegistration(this.publication,this.appDataService.userId);
this.ngOnInit();
this.router.navigate(['/forum'])
resp.subscribe((data)=>this.message=data);


  }

  public deleteComment(id){
    let resp=this.service.deleteCommentaire(id);
    resp.subscribe((data)=>this.message=data);
    this.ngOnInit();
  }

  imagePreview(e) {
    
    const file = (e.target as HTMLInputElement).files[0];

    this.myForm.patchValue({
      img: file});

    this.myForm.get('img').updateValueAndValidity()

    const reader = new FileReader();
    reader.onload = () => {
      this.filePath = reader.result as string;
      this.publication.contenuPublication = reader.result!.toString();

    }
    
    this.message = file.type;

    if (!file.type.startsWith("image/jpeg") && !file.type.startsWith("image/png")){
      this.alert;
      this.message = "Only Images(jpeg or png) are supported.";
      this.filePath = null;
      return;
    }
    reader.readAsDataURL(file)
    this.publication.contenuPublication = file.name;
    
  }
  submit() {
    console.log(this.myForm.value)
    this.reloadData()
  }

  onImagePlanUpload(event?: any) {
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      console.log("image plan :", reader);
      this.publication.contenuPublication = reader.result!.toString();
      console.log("image plan :", reader);
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }

 

}
