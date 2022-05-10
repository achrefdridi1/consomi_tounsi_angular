import { Component, OnInit } from '@angular/core';
import { Reclamation } from '../reclamation';
import { ReclamationRegistrationService } from '../reclamation-registration.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-addreclamation',
  templateUrl: './addreclamation.component.html',
  styleUrls: ['./addreclamation.component.css']
})
export class AddreclamationComponent implements OnInit {


  constructor(private service:ReclamationRegistrationService) { }

   
    reclamation: Reclamation = new Reclamation (new Date,"","");
    message:any;

  
  ngOnInit(): void {
  }

  public addNow(){

    let resp = this.service.addrec(this.reclamation);
      resp.subscribe((data)=>this.message=data);
   

  }

}
