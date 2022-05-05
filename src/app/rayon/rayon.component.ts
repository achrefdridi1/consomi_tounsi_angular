import { Component, OnInit } from '@angular/core';
import { Rayon } from '../rayon';
import { RayonService } from '../rayon.service';


@Component({
  selector: 'app-rayon',
  templateUrl: './rayon.component.html',
  styleUrls: ['./rayon.component.css']
})
export class RayonComponent implements OnInit {

  rayon: Rayon=new Rayon(0,"","");
  msg:any;
  

  constructor(private service:RayonService) {}

  ngOnInit(): void {

  }

  public addRayon(){

    let resp= this.service.addRayonNow(this.rayon);

    resp.subscribe((data)=>this.msg=data);
  }
  

 

}
