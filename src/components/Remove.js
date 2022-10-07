import React from "react";
import { Favourites, Icon } from "./MoviesList.styled";

export function ImagesHover() {
  return (
    <Icon>
      <i className="fas fa-times"></i>
    </Icon>
  );
}

function Remove() {
  return (
    <Favourites>
      <p>Remove from favorites</p>
      <div>
        <ImagesHover />
      </div>
    </Favourites>
  );
}

export default Remove;