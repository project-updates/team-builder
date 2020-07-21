import React from "react";

export default function MemberCard(props) {
  console.log(props);
  const { name, age, location } = props.member;
  return (
    <div>
      <h2> {name} </h2>
      <p>Age: {age} </p>
      <p>Location: {location} </p>
    </div>
  );
}
