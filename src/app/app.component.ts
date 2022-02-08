import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EstudianteService } from './estudiante.service';
import { Estudiante } from './modules';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  formularioEstudiante!: FormGroup;
  estudiante!: Estudiante
  estudiantes!: Array<Estudiante>
  mostrar: boolean=false
  editar: boolean=false
  editarId!:number

  constructor(private estudiantesService: EstudianteService){}
  ngOnInit(): void {
      this.formularioEstudiante = new FormGroup({
        nombre: new FormControl(''),
        apellido: new FormControl(''),
        edad: new FormControl(''),
        telefono: new FormControl('')
      })
  }

  onSubmit(){
    this.estudiante= {
      id:Math.floor(Math.random()*10000),
      nombre: this.formularioEstudiante.get('nombre')!.value,
      apellido: this.formularioEstudiante.get('apellido')!.value,
      edad: this.formularioEstudiante.get('edad')!.value,
      telefono: this.formularioEstudiante.get('telefono')!.value,
    }
    this.estudiantesService.addEstudiante(this.estudiante)
  }
  
  mostrarEstudiantes(){
    this.mostrar=!this.mostrar
    this.estudiantes=this.estudiantesService.getEstudiantes() 
  }

  borrar(id:number):void{
    this.estudiantesService.delEstudiante(id)
    this.estudiantes=this.estudiantesService.getEstudiantes() 
  }

  edit(id:number):void{
    this.editar= !this.editar
    this.estudiante= this.estudiantesService.getEstudianteId(id) 
  }

  onSubmitEdit(id:number):void{
    this.editar= !this.editar
    this.estudiante= {
      ... this.estudiante,
      nombre: this.formularioEstudiante.get('nombre')!.value,
      apellido: this.formularioEstudiante.get('apellido')!.value,
      edad: this.formularioEstudiante.get('edad')!.value,
      telefono: this.formularioEstudiante.get('telefono')!.value,
    }
    this.estudiantesService.delEstudiante(id)
    this.estudiantesService.addEstudiante(this.estudiante)
    this.estudiantes=this.estudiantesService.getEstudiantes() 
    this.formularioEstudiante.reset()
  }
}
