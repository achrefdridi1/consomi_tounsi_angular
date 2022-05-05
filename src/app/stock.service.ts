import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private http:HttpClient) { }



  public addStockNow(stock:any){
    return this.http.post("http://localhost:8081/SpringMVC/add-stock",stock,{responseType:'text' as 'json'});
  }

  public getStocks(){
    return this.http.get(" http://localhost:8081/SpringMVC/retrive-all-stock");
 }

 public getStockById(idStock:number){

  return this.http.get(" http://localhost:8081/SpringMVC/stock/getstock/"+idStock);

 }
 public deleteStock(idStock:number){
  return this.http.delete(" http://localhost:8081/SpringMVC/stock/remove-stock/"+idStock);

 }
}
