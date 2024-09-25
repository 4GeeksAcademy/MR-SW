import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faOldRepublic } from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  const handleNavigateHome = () => {
    navigate("/");
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-center p-2">
        <button className=" btn btn-danger" onClick={handleNavigateHome}>
          <FontAwesomeIcon icon={faOldRepublic} />
        </button>
        <div className="btn-group ">
          <button
            type="button"
            className="btn btn-danger dropdown-toggle"
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
      </div>
    </>
  );
};
export default Navbar;
