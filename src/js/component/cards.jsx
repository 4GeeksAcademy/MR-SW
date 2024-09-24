import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons/faHeart";
import { useNavigate } from "react-router-dom";

const Cards = ({ title, description, type, id }) => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const checkFavorite = store.favorites.includes(title);

  const handleDetailview = () => {
    navigate(`/detail/${type}/${id}`);
  };

  const handleFavorites = () => {
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
        <button className="btn btn-primary" onClick={handleDetailview}>
          Go somewhere
        </button>
        <button className="btn" onClick={handleFavorites}>
          <FontAwesomeIcon icon={checkFavorite ? solidHeart : regularHeart} />
        </button>
      </div>
    </div>
  );
};

export default Cards;
