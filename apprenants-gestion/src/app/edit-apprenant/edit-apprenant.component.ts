import { Component } from '@angular/core';
import { InfoService } from '../services/info.service';
import { ApprenantI } from '../Interfaces/apprenant-i';
import { FormationI } from '../Interfaces/formation-i';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-apprenant',
  templateUrl: './edit-apprenant.component.html',
  styleUrls: ['./edit-apprenant.component.css']
})
export class EditApprenantComponent {

  public errMsg: string | null = null;
  public apprenant: ApprenantI = {} as ApprenantI
  public apprenantId: string | number | null = null

  public formations: FormationI[] = []
  router: any;

  constructor(private infoServ: InfoService, private activatedRoute: ActivatedRoute){}
  
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((param)=>{
      this.apprenantId = param.get('apprenantId')
    });

    if(this.apprenantId) {
      this.infoServ.getApprenantById(this.apprenantId).subscribe((data)=> {
        this.apprenant = data
        this.infoServ.getAllFormations().subscribe((formationData) => {
          this.formations = formationData
        })
      }, (err)=> {
        this.errMsg = err
      })
    }
  }

  updateApprenant() {
    if(this.apprenantId){
      this.infoServ.majApprenant(this.apprenant, this.apprenantId).subscribe(()=> {
        this.router.navigate(['/apprenants'])
      }, (err)=> {
        this.errMsg = err
        this.router.navigate([`/apprenants/edit/${this.apprenantId}`]).then()
      })
    }

  }
}
