import React from "react";

import "../../styles/home.css";
import CharacterCard from "../component/Charactercard.jsx";

export const Home = () => (
  <div className="text-center mt-5">
    <h1>Hello Rigo!</h1>
    <p>
      <CharacterCard />
    </p>
    <a href="#" className="btn btn-success">
      If you see this green button, bootstrap is working
    </a>
  </div>
);
