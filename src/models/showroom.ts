import { Vehicle } from "./vehicle";

export interface Showroom {
    id: number;
    name: string;
    location: string;
    vehicles?: Vehicle[];
  }