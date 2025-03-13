import { FC, useMemo, useState } from "react";
import { Car, CarContext } from "./Contex";

const defaultCar = Car.BMW;

const ContextProvider: FC = ({ children }) => {
  const [car, setCar] = useState<Car>(defaultCar);

  const defaultValue = useMemo(
    () => ({
      car: car,
      setCar: setCar,
    }),
    [car]
  );

  return (
    <CarContext.Provider value={defaultValue}>{children}</CarContext.Provider>
  );
};

export default ContextProvider;
