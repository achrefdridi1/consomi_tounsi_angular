import { Component, OnInit } from '@angular/core';
import { Rayon } from '../rayon';
import { RayonService } from '../rayon.service';

@Component({
  selector: 'app-rayon',
  templateUrl: './rayon.component.html',
  styleUrls: ['./rayon.component.css'],
  template: `
  <ul>
    <li *ngFor="let item of collection | paginate: { itemsPerPage: 10, currentPage: p }"> ... </li>
  </ul>
             
  <pagination-controls (pageChange)="p = $event"></pagination-controls>
  `
})

export class RayonComponent implements OnInit {

  p: number = 1;
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
