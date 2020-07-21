import React from "react";
import MemberCard from "./MemberCard";

export default function Members(props) {
  console.log(props);
  const { members } = props;
  return (
    <div>
      {members.map((item, index) => (
        <MemberCard member={item} key={index} />
      ))}
    </div>
  );
}
