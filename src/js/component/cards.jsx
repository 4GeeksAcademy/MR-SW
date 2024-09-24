import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons/faHeart";

const Cards = ({ title, description }) => {
  const { actions } = useContext(Context);
  const [favorite, setFavorite] = useState(false);

  const handleFavorites = () => {
    setFavorite(!favorite);
    actions.toggleFavorite(title);
  };

  return (
    <div className="card">
      <img
        src="https://dummyimage.com/300x150/000/fff"
        className="card-img-top"
        alt={title}
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
        <button
          className={`btn ${favorite ? "active" : ""}`}
          onClick={handleFavorites}
        >
          <FontAwesomeIcon icon={favorite ? solidHeart : regularHeart} />
        </button>
      </div>
    </div>
  );
};

export default Cards;
