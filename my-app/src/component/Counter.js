import React, { useState } from "react";

const Counter = () => {
  const [num, setNumber] = useState(0); // 앞에있는 값을 설정할수 있는 세터함수

  const increase = () => {
    setNumber(num + 1);
    // num = num + 1; // 세터함수를 사용해서 상태를 관리할수있다
  };

  const decrease = () => {
    setNumber(num - 1);
    // num = num - 1; // 세터함수를 사용해서 상태를 관리할수있다
  };

  return (
    <div>
      <button onClick={increase}>+1</button>
      <button onClick={decrease}>-1</button>
      <p>{num}</p>
    </div>
  );
};

export default Counter;
