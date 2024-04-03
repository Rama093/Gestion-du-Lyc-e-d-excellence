import { Component, OnInit } from '@angular/core';
import { LyceeService } from '../services/lycee.service';

@Component({
  selector: 'app-eleves',
  templateUrl: './eleves.component.html',
  styleUrl: './eleves.component.css'
})
export class ElevesComponent implements OnInit{
  eleves: any[] = [];
  newEleve: any = {nom:'', prenom:'', classe:''};
  classes: string[]=[];

  constructor(private lyceeService: LyceeService){}

  ngOnInit(): void {
      this.eleves = this.lyceeService.eleves;
      this.classes = this.lyceeService.getClasses();
  }

  addEleve(eleve: any){
    this.lyceeService.addEleve(eleve);
    this.newEleve = { nom: '', prenom: '', classe: '' };
  }
  deleteEleve(index: number){
    this.lyceeService.deleteEleve(index);
  }


}
