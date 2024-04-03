import { Component, OnInit } from '@angular/core';
import { LyceeService } from '../services/lycee.service';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrl: './classes.component.css'
})
export class ClassesComponent implements OnInit{
  classes: string[]= [];
  newClasse='';

  constructor(private lyceeService:LyceeService){}

  ngOnInit(): void {
      this.classes= this.lyceeService.classes;
      
  }

  addClasse(classe: string){
    this.lyceeService.addClasse(classe);
    this.newClasse='';

  }
  deleteClasse(index: number){
    this.lyceeService.deleteClasse(index);
  }

 

}
