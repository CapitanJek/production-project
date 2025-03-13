import { useState } from "react";

import cls from "./Counter.modules.scss";

export function Couter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = (prev: number) => {
    setCount(count - 1);
  };

  return (
    <div>
      <button onClick={increment}>+</button>
      <p className={cls.block}>{count}</p>
      <button onClick={() => decrement(3)}>-</button>
    </div>
  );
}
