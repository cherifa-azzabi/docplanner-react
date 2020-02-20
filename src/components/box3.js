import React from "react";

function Box3({ list3 }) {
  return (
    <div className="tableau4">
      {list3.map((el, i) => (
        <div className="tableau5">
          <img src={el.image} className="image3" />
          <div className="aaa">
            <p className="title3"> {el.title}</p>

            <button type="button" className="bouton3">
              {el.button}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Box3;
