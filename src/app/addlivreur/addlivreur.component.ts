import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Livreur } from '../livreur';
import { LivreurRegistrationService } from '../livreur-registration.service';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-addlivreur',
  templateUrl: './addlivreur.component.html',
  styleUrls: ['./addlivreur.component.css']
})
export class AddlivreurComponent implements OnInit {


 livreur: Livreur=new Livreur(0,"","","",0,0,new Date,0,0);
  message:any;
  

  constructor(private service:LivreurRegistrationService) { }

  ngOnInit(): void {
  }


  public registerNow(){

    let resp = this.service.doRegistration(this.livreur);
      resp.subscribe((data)=>this.message=data);
  }
}
