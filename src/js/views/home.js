import React, { useContext, useEffect } from "react";

import Scrollcharacter from "../component/scrollcharacter.jsx";
import Scrollplanet from "../component/scrollplanet.jsx";
import Scrollvehicles from "../component/scrollvehicles.jsx";

import { Context } from "../store/appContext.js";

export const Home = () => {
  const { actions } = useContext(Context);
  useEffect(() => {
    actions.fetchSWData();
  }, []);
  return (
    <>
      <div className="text-center mt-5 gx-5">
        <h1 className="title">Characters</h1>
        <Scrollcharacter />
        <h1 className="title">Planets</h1>
        <Scrollplanet />
        <h1 className="title">Vehicles</h1>
        <Scrollvehicles />
      </div>
      ;
    </>
  );
};
