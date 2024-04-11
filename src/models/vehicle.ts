export interface Vehicle {
    id: number;
    type: string;
    brand: string;
    model: string;
    year: number;
    price: number;
    description: string;
    details?: any;
  }