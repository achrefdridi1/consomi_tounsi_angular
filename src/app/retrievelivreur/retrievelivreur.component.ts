import { Component, OnInit } from '@angular/core';
import { Livreur } from '../livreur';
import { LivreurRegistrationService } from '../livreur-registration.service';
import { Router } from '@angular/router';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-retrievelivreur',
  templateUrl: './retrievelivreur.component.html',
  styleUrls: ['./retrievelivreur.component.css']
})
export class RetrievelivreurComponent implements OnInit {

  
  livreurs:any;
  id:number;
  message:any;
  constructor(private service:LivreurRegistrationService,private router:Router) { }

  public delLivreur(id:number){
   let resp=this.service.deleteLivreur(id);
   resp.subscribe((data)=>this.id);
   window.location.reload();
  }

  public findLivreur(){
    let resp=this.service.getLivreurById1(this.id);
    resp.subscribe((data)=>this.livreurs=data); 
  }

  ngOnInit(): void {
    let resp=this.service.getLivreurs();
    resp.subscribe((data)=>this.livreurs=data);
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
      PDF.save('Tableau des livreurs.pdf');
    });
  }

}
