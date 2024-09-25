import React, { useEffect, useState } from "react";

import Cards from "./cards.jsx";

const Scrollplanet = () => {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    const storedPlanets = localStorage.getItem("planets");
    if (storedPlanets) {
      setPlanets(JSON.parse(storedPlanets));
    }
  }, []);
  return (
    <>
      <div className="multiple-cards-container">
        {planets.map((planet, index) => (
          <div className="col " key={index}>
            <Cards
              title={planet.name}
              description={`Climate: ${planet.climate}, Population: ${planet.population}, Terrain: ${planet.terrain}`}
              type="planets"
              id={planet.uid}
            />
          </div>
        ))}
      </div>
    </>
  );
};
export default Scrollplanet;
