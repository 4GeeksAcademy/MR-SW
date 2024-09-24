const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      characters: [],
      planets: [],
      vehicles: [],
      favorites: [],
    },
    actions: {
      fetchSWData: () => {
        const store = getStore();

        if (store.characters.length === 0) {
          fetch("https://www.swapi.tech/api/people")
            .then((response) => response.json())
            .then((data) => {
              setStore({ characters: data.results });
            })
            .catch((error) =>
              console.error("error fetching characters", error)
            );
        }
        if (store.planets.length === 0) {
          fetch("https://www.swapi.tech/api/planets")
            .then((response) => response.json())
            .then((data) => {
              setStore({ planets: data.results });
            })
            .catch((error) => console.error("error fetching planets", error));
        }
        if (store.vehicles.length === 0) {
          fetch("https://www.swapi.tech/api/vehicles")
            .then((response) => response.json())
            .then((data) => {
              setStore({ vehicles: data.results });
            })
            .catch((error) => console.error("error fetching vehicles", error));
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
