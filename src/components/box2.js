import React from "react";

function Box2({ list2 }) {
  return (
    <div className="carre">
      {list2.map((el, i) => (
        <div className="tableau2">
          <img src={el.image} className="" alt="..." />
          <p className=""> {el.title}</p>
          <p className=""> {el.texte} </p>
        </div>
      ))}
    </div>
  );
}
export default Box2;
