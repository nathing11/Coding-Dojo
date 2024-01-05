import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const baseURL = "https://swapi.dev/api/";
  const DisplayPeople = () => {
  const [chosenUser, setChosenUser] = useState({});
  console.log(useParams());
  const { selected, Id } = useParams();
  const nav = useNavigate();
  useEffect(() => {
    let apiUrl = `${baseURL}/${selected}/${Id}`;
    axios
      .get(apiUrl)
      .then((response) => setChosenUser(response.data))
      .catch((error) => nav("/error"));
  }, [Id, selected]);
  return (
    <div>
      {chosenUser &&  <> {selected === "people"?
        <>
          <h1>{chosenUser.name}</h1>
          <h4>Height :{chosenUser.height}</h4>
          <h4>{chosenUser.mass}</h4>
          <h4>{chosenUser.hair_color}</h4>
          <h4>{chosenUser.skin_color}</h4>
        </>
            :<>
            <h1>planets: {chosenUser.name}</h1>
        <h4>planets :{chosenUser.climate}</h4>
        <h4>{chosenUser.terrain}</h4>
          <h4>{chosenUser.surface_water}</h4>
        <h4>planets :{chosenUser.population}</h4>
        </>    
      }</>}
    </div>
  );
};

export default DisplayPeople;
