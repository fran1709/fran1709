export interface Persona {
  nombre: string;
  profesion: string;
  resume: string;
  imagenURL: string;
  correo: string;
  github: string;
  linkedin: string;
  telegram: string;
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