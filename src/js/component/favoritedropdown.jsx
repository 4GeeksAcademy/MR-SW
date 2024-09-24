import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FavoriteDropdown = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <div className="btn-group">
        <button
          type="button"
          className="btn btn-primary dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Favorites ({store.favorites.length})
        </button>
        <ul className="dropdown-menu">
          {store.favorites.length === 0 ? (
            <li className="dropdown-item"> No favorites</li>
          ) : (
            store.favorites.map((fav, index) => (
              <li
                key={index}
                className="dropdown-item d-flex justify-content-between"
              >
                {fav}
                <button
                  className="btn btn-danger"
                  onClick={() => actions.removeFavorite(fav)}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
    </>
  );
};
export default FavoriteDropdown;
