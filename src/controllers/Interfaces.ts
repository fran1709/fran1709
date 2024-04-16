export interface Persona {
  nombre: string;
  profesion: string;
  resume: string;
  imagenURL: string;
  correo: string;
  github: string;
  linkedin: string;
  telegram: string;
  info: string;
}

export interface Project {
  nombre: string;
  descripcion: string;
  imagenURL: string;
  tecnologias: string[];
  tareas: string[];
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

export interface Certification {
  nombre: string;
  entidad: string;
  id: string;
  imagenURL: string;
}

export interface CertificationProps {
  certification: Certification;
}