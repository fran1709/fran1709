import { Timestamp } from "firebase/firestore";

export interface Persona {
  nombre: string;
  nacimiento: Timestamp;
  profesion: string;
  universidad: string;
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