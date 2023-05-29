import React, { useState } from "react";

const Input = () => {
  const [txtValue, setTextValue] = useState(0); // 첫 배열은 빈배열, 세터함수를 쓰겠다.

  const onChange = (e) => {
    setTextValue(e.target.Value);
  };

  return (
    <div>
      <input type="text" value={txtValue} onChange={onChange} />
      <br />
      <p>{txtValue}</p>
    </div>
  );
};

export default Input;
