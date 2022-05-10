import { Component, OnInit } from '@angular/core';
import { ReclamationRegistrationService } from '../reclamation-registration.service';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-retrievereclamation',
  templateUrl: './retrievereclamation.component.html',
  styleUrls: ['./retrievereclamation.component.css']
})
export class RetrievereclamationComponent implements OnInit {

  constructor(private service:ReclamationRegistrationService) { }

  reclamations:any;
  id:number;

  public delReclams(id:number){
    let resp=this.service.deleteReclamation(id);
    resp.subscribe((data)=>this.id)
    window.location.reload();
  }

  public findReclams(){
    let resp=this.service.getReclamationById1(this.id);
    resp.subscribe((data)=>this.reclamations=data);
  }

  ngOnInit(): void {
    let resp=this.service.getReclamations();
    resp.subscribe((data)=>this.reclamations=data);
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
      PDF.save('Tableau des reclamations.pdf');
    });
  }


}
