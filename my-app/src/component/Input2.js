import React, { useState } from "react";

const Input2 = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    tel: "",
  }); // 첫 배열은 빈배열, 세터함수를 쓰겠다.

  const { name, email, tel } = inputs; // 다시 선언해줘서, inputs를 쓸수있게 만들어준다.

  const onChange = (e) => {
    const value = e.target.value;
    const id = e.target.id;

    // inputs[id] =value;  => 자스 힙메모리, 이렇게 하면 상태환경 설정이 불가능하다. 즉, 배열의 상태값을 알지 못한다. 즉 변경되었다는 것을 리액트에서 필요하다
    // setInputs 안에,  깊은복사(..)을 통해서 새로운 오브젝트를 만들어낸다
    // 1. 깊은복사를 통해서 name :"" 이 들어오게 된다.

    setInputs({
      ...inputs,
      [id]: value,
    });
  };
  return (
    <div>
      <div>
        <label>이름</label>
        <input type="text" id="name" value={name} onChange={onChange} />
      </div>
      <div>
        <label>이메일</label>
        <input type="email" id="email" value={email} onChange={onChange} />
      </div>
      <div>
        <label>전화번호</label>
        <input type="tel" id="tel" value={tel} onChange={onChange} />
      </div>
      <p>이름:{name}</p>
      <p>전화번호:{tel}</p>
      <p>이메일:{email}</p>
    </div>
  );
};

export default Input2;
