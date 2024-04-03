import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LyceeService {
  eleves: any[] = [];
  classes: string[] = ['Terminal S1', 'Terminal S2', 'Terminal L1a', 'Terminal L2b'];


  constructor() { }
  
  //CRUD des classes
  addClasse( classe:string){
    this.classes.push(classe);
  }

  deleteClasse(index: number){
    this.classes.splice(index, 1);
  }

  //CRUD des eleves
  addEleve(eleve:any){
    this.eleves.push(eleve);
  }

  deleteEleve(index: number){
    this.eleves.splice(index,1);
  }

  //récupère les classes
  getClasses(){
    return this.classes;
  }


}
