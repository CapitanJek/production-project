import { createContext } from "react";

export enum Car {
  BMW = "bmw",
  AUDI = "audi",
}

export interface CarProps {
  car?: Car;
  setCar?: (car: Car) => void;
}

export const CarContext = createContext<CarProps>({});
