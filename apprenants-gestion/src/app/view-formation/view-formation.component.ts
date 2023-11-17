import { Component } from '@angular/core';
import { FormationI } from '../Interfaces/formation-i';
import { InfoService } from '../services/info.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-formation',
  templateUrl: './view-formation.component.html',
  styleUrls: ['./view-formation.component.css']
})
export class ViewFormationComponent {

    public errMsg : string | null = null
    public formation: FormationI = {} as FormationI
    public formationId: string | number | null = null

    constructor(private infoServ: InfoService, private activatedRoute: ActivatedRoute){}

    ngOnInit() {
      this.activatedRoute.paramMap.subscribe((param) => {
        this.formationId = param.get('formationId')
        console.log('FORMATIONID',this.formationId);
        })

    if(this.formationId) {

        //Get formation Details
        this.infoServ.getFormationById(this.formationId).subscribe((id) => {
          this.formation = id
        }, (err) => {
        this.errMsg = err
      })
      }
    
    }
        
}

