import { Component, OnInit } from '@angular/core';
import { Stock } from '../stock';
import { StockService } from '../stock.service';


@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  stock: Stock=new Stock(0,0,0,"");
  msg:any;
  

  constructor(private service:StockService) {}

  ngOnInit(): void {

  }

  public addStock(){

    let resp= this.service.addStockNow(this.stock);

    resp.subscribe((data)=>this.msg=data);
  }
  

 

}
