import React from "react";

import "../../styles/home.css";

import Scrollcharacter from "../component/scrollcharacter.jsx";
import Scrollplanet from "../component/scrollplanet.jsx";
import Scrollvehicles from "../component/scrollvehicles.jsx";
import FavoriteDropdown from "../component/favoritedropdown.jsx";

export const Home = () => (
  <div className="text-center mt-5 gx-5">
    <FavoriteDropdown />
    <h1 className="title">Characters</h1>
    <Scrollcharacter />
    <h1 className="title">Planets</h1>
    <Scrollplanet />
    <h1 className="title">Vehicles</h1>
    <Scrollvehicles />
    <a href="#" className="btn btn-success">
      If you see this green button, bootstrap is working
    </a>
  </div>
);
