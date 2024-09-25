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
          <div className="col-md-6 detail-text">
            <p>Birth Year: {item.birth_year}</p>
          </div>
          <div className="col-md-6 detail-text">
            <p>Gender: {item.gender}</p>
          </div>
          <div className="col-md-6 detail-text">
            <p>Height: {item.height} cm</p>
          </div>
          <div className="col-md-6 detail-text">
            <p>Mass: {item.mass} kg</p>
          </div>
          <div className="col-md-6 detail-text">
            <p>Hair Color: {item.hair_color}</p>
          </div>
          <div className="col-md-6 detail-text">
            <p>Eye Color: {item.eye_color}</p>
          </div>
        </>
      );
    } else if (type === "planets") {
      return (
        <>
          <div className="col-md-6 detail-text">
            <p>Climate: {item.climate}</p>
          </div>
          <div className="col-md-6 detail-text">
            <p>Population: {item.population}</p>
          </div>
          <div className="col-md-6 detail-text">
            <p>Terrain: {item.terrain}</p>
          </div>
          <div className="col-md-6 detail-text">
            <p>Gravity: {item.gravity}</p>
          </div>
          <div className="col-md-6 detail-text">
            <p>Diameter: {item.diameter} km</p>
          </div>
          <div className="col-md-6 detail-text">
            <p>Surface Water: {item.surface_water}%</p>
          </div>
        </>
      );
    } else if (type === "vehicles") {
      return (
        <>
          <div className="col-md-6 detail-text">
            <p>Model: {item.model}</p>
          </div>
          <div className="col-md-6 detail-text">
            <p>Manufacturer: {item.manufacturer}</p>
          </div>
          <div className="col-md-6 detail-text">
            <p>Cost in Credits: {item.cost_in_credits}</p>
          </div>
          <div className="col-md-6 detail-text">
            <p>Crew: {item.crew}</p>
          </div>
          <div className="col-md-6 detail-text">
            <p>Passengers: {item.passengers}</p>
          </div>
          <div className="col-md-6 detail-text">
            <p>Vehicle Class: {item.vehicle_class}</p>
          </div>
        </>
      );
    }
  };

  return (
    <>
      <div className="container-fluid p-0">
        <div className="row d-flex image-half">
          <div className="col-6 p-0">
            <img
              src="https://dummyimage.com/1200x600/000/fff"
              alt={item.name}
              className="coverimage img-fluid"
            />
          </div>
          <div className="col-6 p-0 d-flex flex-column justify-content-start align-items-start">
            <div className="col-12 text-left p-4">
              <h1 className="text-center col-6  d-flex flex-row  justify-content-center">
                {item.name}
              </h1>
            </div>
            <div className="col-12 p-4">
              <div className="row">{renderDetails()}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailCard;
