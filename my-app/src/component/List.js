import React from "react";

// 1. 배열을 하나 만들어준다.

const User = ({ userData }) => {
  return (
    <tr>
      <td> {userData.name}</td>
      <td> {userData.email}</td>
    </tr>
  );
};

const UserList = () => {
  const Users = [
    { email: "user1@gmail.com", name: "유재석" },
    { email: "user2@gmail.com", name: "김두환" },
    { email: "user3@gmail.com", name: "김종국" },
    { email: "user4@gmail.com", name: "송지효" },
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>이름</th>
          <th>이메일</th>
        </tr>
      </thead>
      <tbody>
        {Users.map((user) => (
          <User userData={user} />
        ))}
      </tbody>
    </table>
  );
};

export default UserList;
