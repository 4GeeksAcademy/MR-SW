import React from "react";
import CharacterCard from "./charactercard.jsx";

const Scrollcharacter = () => {
  return (
    <>
      <div className="multiple-cards-container">
        {Array.from({ length: 10 }).map((_, index) => (
          <div className="col-4">
            <CharacterCard />
          </div>
        ))}
      </div>
    </>
  );
};
export default Scrollcharacter;
