import { Component } from '@angular/core';
import { FormationI } from '../Interfaces/formation-i';
import { InfoService } from '../services/info.service';

@Component({
  selector: 'app-formation-apprenant',
  templateUrl: './formation-apprenant.component.html',
  styleUrls: ['./formation-apprenant.component.css']
})
export class FormationApprenantComponent {
  public formations: FormationI[] = [];
  public errMsg: string | null = null;

  constructor(public infoServ: InfoService){}

  ngOnInit() {
    this.getFormations();
  }

  getFormations() {
    this.infoServ.getAllFormations().subscribe((data: FormationI[]) => {
          console.log(data);
          this.formations = data;
        }, (err) => {
          this.errMsg = err
        })
  }


}

