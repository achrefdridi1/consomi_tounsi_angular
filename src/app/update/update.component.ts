import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Rayon } from '../rayon';
import { RayonService } from '../rayon.service';



@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {


  editrayon=new FormGroup({
    libelleRayon: new FormControl(''),
    codeRayon: new FormControl(''),

  })
  

  constructor(private service:RayonService, private route:ActivatedRoute) {}

 

  public UpdateRayon(){

    let resp= this.service.UpdateRayon1(this.route.snapshot.params['idRayon'],this.editrayon.value).subscribe((result)=>{
      console.log(result);
    });
  }

  ngOnInit(): void {

    console.log(this.service.getRayonById(this.route.snapshot.params['idRayon']).subscribe());
    this.service.getRayonById(this.route.snapshot.params['idRayon']).subscribe((result : any)=>{
      this.editrayon= new FormGroup({
        libelleRayon : new FormControl(result['libelleRayon']),
        codeRayon: new FormControl(result['codeRayon']),
      })
    })

  }
  

 

}