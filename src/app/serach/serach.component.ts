import { Component, OnInit } from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Rayon } from '../rayon';
import { RayonService } from '../rayon.service';

@Component({
  selector: 'app-serach',
  templateUrl: './serach.component.html',
  styleUrls: ['./serach.component.css'],
  template: `

  <ul>
      <li *ngFor="let item of collection | paginate: { itemsPerPage: 10, currentPage: p }"> ... </li>
    </ul>
               
    <pagination-controls (pageChange)="p = $event"></pagination-controls>
    `
    })
export class SerachComponent implements OnInit {

  rayons:any;
  idRayon:any;
  insc: Array<Rayon> = [];
  p: number = 1;
  constructor(private service:RayonService) {}

  public deletRayon(idRayon:number){
    
    let resp=this.service.deleteRayon(idRayon);
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
    resp.subscribe((data)=>this.idRayon);
    window.location.reload();
    
  }

 public findRayonById(){

  let resp=this.service.getRayonById(this.idRayon);
  resp.subscribe((data)=>this.rayons=data);

  }
  
  ngOnInit(): void {
   
    let resp= this.service.getRayons();
    resp.subscribe((data)=>this.rayons=data);

    
    this.service.getRayons().subscribe(data=> {this.rayons.forEach(element => {
      this.insc.push(element)
    });})
    
    
  }
  public openPDF(): void {
    let DATA: any = document.getElementById('htmlData');
      html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('Tableau des Rayons.pdf');
    });
  }

}
