import { Component, OnInit } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Stock } from '../stock';
import { StockService } from '../stock.service';


@Component({
  selector: 'app-serach-stock',
  templateUrl: './serach-stock.component.html',
  styleUrls: ['./serach-stock.component.css']
})
export class SerachStockComponent implements OnInit {

  stocks:any;
  idStock:any;
  insc: Array<Stock> = [];
  constructor(private service:StockService) {}

  public deletStock(idStock:number){
    
    let resp=this.service.deleteStock(idStock);
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
    resp.subscribe((data)=>this.idStock);
    
  }

 public findStockById(){

  let resp=this.service.getStockById(this.idStock);
  resp.subscribe((data)=>this.stocks=data);
  }
  
  ngOnInit(): void {
   
    let resp= this.service.getStocks();
    resp.subscribe((data)=>this.stocks=data);

    
    this.service.getStocks().subscribe(data=> {this.stocks.forEach(element => {
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
