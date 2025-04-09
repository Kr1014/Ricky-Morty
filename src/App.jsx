import { useEffect, useRef, useState } from "react";
import "./App.css";
import useFetch from "./hooks/useFetch";
import LocationCards from "./components/LocationCards";
import ResidentsCards from "./components/ResidentsCards";
import imageRicky from "./assets/imageRicky.png";

function App() {
  const [infoLocation, getApi, isLoading, hasError] = useFetch();
  const [search, setSearch] = useState(Math.floor(Math.random() * 126 + 1));

  useEffect(() => {
    const url = `https://rickandmortyapi.com/api/location/${search}`;
    getApi(url);
  }, [search]);

  const textInput = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearch(textInput.current.value.trim());
    event.target.reset();
  };

  return (
    <div className="container-all">
      {isLoading ? (
        <h2 className="loading">Loading....</h2>
      ) : (
        <>
          <div className="containerImage">
            <img src={imageRicky} alt="Rick and Morty" />
          </div>
          <div className="container-form">
            <form onSubmit={handleSubmit} className="search">
              <input
                type="text"
                min={1}
                max={126}
                ref={textInput}
                placeholder="Name of the location"
              />
              <button>Search</button>
            </form>
          </div>

          {hasError || search === "0" ? (
            <h2 className="err">This location do not exist</h2>
          ) : (
            <>
              <LocationCards infoLocation={infoLocation} />

              <div className="app-container">
                {infoLocation.residents.map((resident) => (
                  <ResidentsCards key={resident} url={resident} />
                ))}
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default App;
