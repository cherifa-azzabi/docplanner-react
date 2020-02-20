import React from "react";

function Navmenu({ list }) {
  return (
    <div>
      <ul className="ul">
        {list.map(el => (
          <li className="li">{el.item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Navmenu;
