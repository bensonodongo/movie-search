import React from "react";

export function ImagesHover() {
  return (
    <Icon>
      <i className="fas fa-heart"></i>
    </Icon>
  );
}

function Favorites() {
  return (
    <Favorites>
      <p>Add to favorites</p>
      <div>
        <ImagesHover />
      </div>
    </Favorites>
  );
}

export default Favorites;
