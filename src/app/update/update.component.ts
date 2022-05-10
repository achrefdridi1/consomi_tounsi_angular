import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { RayonService } from '../rayon.service';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private service:RayonService, private route:ActivatedRoute) { }
  
  message : any;
  rayons: any;
   update=new FormGroup({
     //id: new FormControl(''),
    libelleRayon : new FormControl(''),
    codeRayon : new FormControl(''),
  });

     

  public doUpdatee(){
    console.log(this.route.snapshot.params['idRayon']);
      let resp = this.service.updateRayon1(this.route.snapshot.params['idRayon'],this.update.value).subscribe((result)=>{
        console.log (result);
      })
  }

  ngOnInit(): void {
    
    this.service.getRayonById1(this.route.snapshot.params['idRayon']).subscribe((result :any) =>{
        this.update=new FormGroup(
          {// id : new FormControl(result['livreur_id']),
            libelleRayon : new FormControl(result['libelleRayon']),
            codeRayon : new FormControl(result['codeRayon']), 
          });  
      }
    )};
}


