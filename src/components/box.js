import React from "react";
function Box({ list1 }) {
  return (
    <div className="tableau">
      {list1.map((el, i) => (
        <div className={`tableau1 ${el.class}`}>
          <p className="texte1"> {el.title}</p>

          <p className="texte1"> {el.texte} </p>
          <img src={el.image} className="image1" alt="..." />
        </div>
      ))}
    </div>
  );
}
export default Box;
