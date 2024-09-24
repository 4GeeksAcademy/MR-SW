import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";

const DetailCard = () => {
  const { store } = useContext(Context);
  const { type, id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const selectedItem = store[type]?.find((item, index) => item.uid === id);
    setItem(selectedItem);
  }, [store, type, id]);

  if (!item) {
    return <div>not found</div>;
  }

  const renderDetails = () => {
    if (type === "characters") {
      return (
        <>
          <div className="col-md-2">
            <h3>Birth Year: {item.birth_year}</h3>
          </div>
          <div className="col-md-2">
            <h3>Gender: {item.gender}</h3>
          </div>
          <div className="col-md-2">
            <h3>Height: {item.height} cm</h3>
          </div>
          <div className="col-md-2">
            <h3>Mass: {item.mass} kg</h3>
          </div>
          <div className="col-md-2">
            <h3>Hair Color: {item.hair_color}</h3>
          </div>
          <div className="col-md-2">
            <h3>Eye Color: {item.eye_color}</h3>
          </div>
        </>
      );
    } else if (type === "planets") {
      return (
        <>
          <div className="col-md-2">
            <h3>Climate: {item.climate}</h3>
          </div>
          <div className="col-md-2">
            <h3>Population: {item.population}</h3>
          </div>
          <div className="col-md-2">
            <h3>Terrain: {item.terrain}</h3>
          </div>
          <div className="col-md-2">
            <h3>Gravity: {item.gravity}</h3>
          </div>
          <div className="col-md-2">
            <h3>Diameter: {item.diameter} km</h3>
          </div>
          <div className="col-md-2">
            <h3>Surface Water: {item.surface_water}%</h3>
          </div>
        </>
      );
    } else if (type === "vehicles") {
      return (
        <>
          <div className="col-md-2">
            <h3>Model: {item.model}</h3>
          </div>
          <div className="col-md-2">
            <h3>Manufacturer: {item.manufacturer}</h3>
          </div>
          <div className="col-md-2">
            <h3>Cost in Credits: {item.cost_in_credits}</h3>
          </div>
          <div className="col-md-2">
            <h3>Crew: {item.crew}</h3>
          </div>
          <div className="col-md-2">
            <h3>Passengers: {item.passengers}</h3>
          </div>
          <div className="col-md-2">
            <h3>Vehicle Class: {item.vehicle_class}</h3>
          </div>
        </>
      );
    }
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <img
              src="https://dummyimage.com/1200x600/000/fff"
              alt={item.name}
              className="img-fluid"
            />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12">
            <h3>{item.name}</h3>
          </div>
          {renderDetails()}
        </div>
      </div>
    </>
  );
};

export default DetailCard;
