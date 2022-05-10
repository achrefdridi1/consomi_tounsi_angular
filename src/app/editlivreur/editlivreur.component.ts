import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LivreurRegistrationService } from '../livreur-registration.service';
import { Livreur } from '../livreur';


@Component({
  selector: 'app-editlivreur',
  templateUrl: './editlivreur.component.html',
  styleUrls: ['./editlivreur.component.css']
})
export class EditlivreurComponent implements OnInit {

  constructor(private service:LivreurRegistrationService, private route:ActivatedRoute, private datepipe:DatePipe) { }
  
  message : any;
  livreurs: any;
   editlivreur=new FormGroup({
     //id: new FormControl(''),
    firstName : new FormControl(''),
    lastName : new FormControl(''),
    email : new FormControl(''),
    cin : new FormControl(''),
    score : new FormControl(''),
    date : new FormControl(''),
    charge : new FormControl(''),
    salaire : new FormControl(''),
  });

     

  public doUpdate(){
    console.log(this.route.snapshot.params['livreur_id']);
      let resp = this.service.updateLivreur(this.route.snapshot.params['livreur_id'],this.editlivreur.value).subscribe((result)=>{
        console.log (result);
      })
  }

  ngOnInit(): void {
      // console.log(this.route.snapshot.params['livreur_id']);
   this.service.getLivreurById(this.route.snapshot.params['livreur_id']).subscribe((result :any) =>{
        let event = new Date(result.dateNaissance);
        let x=this.datepipe.transform(event,"yyyy-MM-dd");
        result.dateNaissance=x;
        this.editlivreur=new FormGroup(
          {// id : new FormControl(result['livreur_id']),
            lastName : new FormControl(result['lastName']),
            firstName : new FormControl(result['firstName']),
            email : new FormControl(result['email']), 
            cin : new FormControl(result['cin']),
            score : new FormControl(result['score']),
            dateNaissance : new FormControl(result['dateNaissance']),
            charge_travail : new FormControl(result['charge_travail']),
            salaire : new FormControl(result['salaire']), 
          });  
      }
    )};
  }


