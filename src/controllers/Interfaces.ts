export interface Persona {
  nombre: string;
  profesion: string;
  resume: string;
  imagenURL: string;
}

export interface Project {
  nombre: string;
  descripcion: string;
  imagenURL: string;
}

export interface ProjectProps {
  project: Project;
}

export interface University {
  nombre: string;
  carrera: string;
  descripcion: string;
  fechaInicio: string;
  fechaFin: string;
}