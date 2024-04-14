import { Timestamp } from "firebase/firestore";

export interface Persona {
    nombre: string;
    nacimiento: Timestamp;
    profesion: string;
    universidad: string;
    resume: string;
    imagenURL: string;
  }
  