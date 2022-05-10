import { Component, OnInit } from '@angular/core';
import { ReclamationRegistrationService } from '../reclamation-registration.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup,FormControl } from '@angular/forms';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-editreclamation',
  templateUrl: './editreclamation.component.html',
  styleUrls: ['./editreclamation.component.css']
})
export class EditreclamationComponent implements OnInit {

  constructor(private service:ReclamationRegistrationService, private route:ActivatedRoute,private datepipe:DatePipe) { }

  editreclamation=new FormGroup({
    userEmail: new FormControl(''),
   dateReclamation : new FormControl(''),
   description : new FormControl(''),
 });


 public Update(){
  let resp = this.service.updateReclamation(this.route.snapshot.params['reclamation_id'],this.editreclamation.value).subscribe((result)=>{
    console.log (result);
  })
 }

  ngOnInit(): void {
    this.service.getReclamationById(this.route.snapshot.params['reclamation_id']).subscribe((result :any) =>{
      let event = new Date(result.dateReclamation);
      let x=this.datepipe.transform(event,"yyyy-MM-dd");
      result.dateReclamation=x;
      this.editreclamation=new FormGroup({
        userEmail : new FormControl(result['userEmail']),
        dateReclamation : new FormControl(result['dateReclamation']),
        description : new FormControl(result['description']), 
          }); 
        }
    )}
}
