import React from "react";

export default function Card(props) {
  return (
    <div className="bg-light-green br3 pa3 ma2 grow bw2">
      <img alt="profile pic" src={`https://robohash.org/${props.id}?200x200`} />
      <div>
        <h2>{props.name}</h2>
        <p>{props.email}</p>
      </div>
    </div>
  );
}
