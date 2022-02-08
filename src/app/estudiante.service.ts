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

}
