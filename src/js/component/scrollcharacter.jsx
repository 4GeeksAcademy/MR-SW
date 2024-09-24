import React, { useEffect, useState } from "react";
import Cards from "./cards.jsx";

const Scrollcharacter = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const storedCharacters = localStorage.getItem("characters");
    if (storedCharacters) {
      setCharacters(JSON.parse(storedCharacters));
    }
  }, []);

  return (
    <>
      <div className="multiple-cards-container">
        {characters.map((character, index) => (
          <div className="col-3 " key={index}>
            <Cards
              title={character.name}
              description={`Gender: ${character.gender}`}
            />
          </div>
        ))}
      </div>
    </>
  );
};
export default Scrollcharacter;
