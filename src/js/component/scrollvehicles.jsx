import React, { useEffect, useState } from "react";
import Cards from "./cards.jsx";

const Scrollvehicles = () => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const storedVehicles = localStorage.getItem("vehicles");
    if (storedVehicles) {
      setVehicles(JSON.parse(storedVehicles));
    }
  }, []);
  return (
    <>
      <div className="multiple-cards-container">
        {vehicles.map((vehicle, index) => (
          <div className="col-3 " key={index}>
            <Cards
              title={vehicle.name}
              description={`Model: ${vehicle.model}`}
              type="vehicles"
              id={vehicle.uid}
            />
          </div>
        ))}
      </div>
    </>
  );
};
export default Scrollvehicles;
