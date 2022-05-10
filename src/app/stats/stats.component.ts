import { Component, OnInit } from '@angular/core';
import { LivreurRegistrationService } from '../livreur-registration.service';
import { RayonService } from '../rayon.service';
import { ReclamationRegistrationService } from '../reclamation-registration.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  constructor(private service:LivreurRegistrationService,private serviice:ReclamationRegistrationService,private servicee:RayonService) { }

  ngOnInit(): void {
    this.cLivreurs();
    this.cReclamations();
    this.cRayon();
  }

  public cLivreurs(){
    this.service.countlivreurs().subscribe((result)=>{
      var x:string;
      x=JSON.stringify(result);
      document.getElementById('nbrliv').innerHTML=x;
    })
  }

  public cReclamations(){
    this.serviice.countReclamation().subscribe((result1)=>{
      var y:string;
      y=JSON.stringify(result1);
      document.getElementById('nbrrec').innerHTML=y;
    })
}

public cRayon(){
  this.servicee.countRayons().subscribe((result2)=>{
    var y:string;
    y=JSON.stringify(result2);
    document.getElementById('nbrray').innerHTML=y;
  })
}



}
