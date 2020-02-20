import React from "react";

function Box3({ list3 }) {
  return (
    <div className="tableau4">
      {list3.map(el => (
        <div className="tableau5">
          <p className="title3"> {el.title}</p>

          <bouton className="bouton3"> {el.bouton} </bouton>
          <img src={el.image} className="image3" alt="..." />
        </div>
      ))}
    </div>
  );
}
export default Box3;
