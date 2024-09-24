import React from "react";
import CharacterCard from "./charactercard.jsx";

const Scrollvehicles = () => {
  return (
    <>
      <div className="multiple-cards-container">
        {Array.from({ length: 10 }).map((_, index) => (
          <div className="col-4">
            <CharacterCard key={index} />
          </div>
        ))}
      </div>
    </>
  );
};
export default Scrollvehicles;
