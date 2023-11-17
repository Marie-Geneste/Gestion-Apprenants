import { Component } from '@angular/core';
import { InfoService } from '../services/info.service';
import { ApprenantI } from '../Interfaces/apprenant-i';
import { Router } from '@angular/router';
import { FormationI } from '../Interfaces/formation-i';

@Component({
  selector: 'app-add-apprenant',
  templateUrl: './add-apprenant.component.html',
  styleUrls: ['./add-apprenant.component.css']
})
export class AddApprenantComponent {

  public apprenant : ApprenantI = {} as ApprenantI
  public formations: FormationI[] = [];
  public errMsg: string | null = null;

  constructor(private infoServ: InfoService, private router: Router){}
  
  create(){
    this.infoServ.createApprenant(this.apprenant).subscribe(()=>{
      this.router.navigate(['/apprenants']).then()
    }, (err)=> {
      this.errMsg = err;
      this.router.navigate(['/apprenants/add'])
    })
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
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
