import { Injectable } from '@angular/core';
import { Estudiante } from './modules';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {
  estudiantes: Array<Estudiante>=[]

  constructor() { }

  addEstudiante(estudiante:Estudiante): void{
    this.estudiantes.push(estudiante)
  }
  getEstudiantes(){
    return this.estudiantes
  }

  delEstudiante(id:number):void {
    this.estudiantes=this.estudiantes.filter(e=>e.id!==id)
  }

  getEstudianteId(id:number){
    return this.estudiantes.filter(e=>e.id===id)[0]
  }
}
