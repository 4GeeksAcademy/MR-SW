const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      characters: [],
      planets: [],
      vehicles: [],
      favorites: [],
    },
    actions: {
      fetchSWData: async () => {
        const store = getStore();

        const storedCharacters = localStorage.getItem("characters");
        const storedPlanets = localStorage.getItem("planets");
        const storedVehicles = localStorage.getItem("vehicles");

        if (storedCharacters && storedPlanets && storedVehicles) {
          setStore({
            characters: JSON.parse(storedCharacters),
            planets: JSON.parse(storedPlanets),
            vehicles: JSON.parse(storedVehicles),
          });
        } else {
          const fetchBasicData = async (url) => {
            const response = await fetch(url);
            const data = await response.json();
            return data.results;
          };

          const characters = await fetchBasicData(
            "https://www.swapi.tech/api/people"
          );
          const planets = await fetchBasicData(
            "https://www.swapi.tech/api/planets"
          );
          const vehicles = await fetchBasicData(
            "https://www.swapi.tech/api/vehicles"
          );

          const fetchDetails = async (url) => {
            const response = await fetch(url);
            const data = await response.json();
            return data.result.properties;
          };

          const detailedCharacters = await Promise.all(
            characters.map(async (character) => {
              const details = await fetchDetails(character.url);
              return { ...character, ...details };
            })
          );

          const detailedPlanets = await Promise.all(
            planets.map(async (planet) => {
              const details = await fetchDetails(planet.url);
              return { ...planet, ...details };
            })
          );

          const detailedVehicles = await Promise.all(
            vehicles.map(async (vehicle) => {
              const details = await fetchDetails(vehicle.url);
              return { ...vehicle, ...details };
            })
          );

          localStorage.setItem(
            "characters",
            JSON.stringify(detailedCharacters)
          );
          localStorage.setItem("planets", JSON.stringify(detailedPlanets));
          localStorage.setItem("vehicles", JSON.stringify(detailedVehicles));

          setStore({
            characters: detailedCharacters,
            planets: detailedPlanets,
            vehicles: detailedVehicles,
          });
        }
      },
      toggleFavorite: (itemName) => {
        const store = getStore();
        const favorites = store.favorites;
        const favorite = favorites.includes(itemName);

        if (favorite) {
          setStore({
            favorites: favorites.filter((fav) => fav !== itemName),
          });
        } else {
          setStore({ favorites: [...favorites, itemName] });
        }
      },
      removeFavorite: (itemName) => {
        const store = getStore();
        setStore({
          favorites: store.favorites.filter((fav) => fav !== itemName),
        });
      },
    },
  };
};

export default getState;
