import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";
import axios from 'axios';

const LukeAPIWalker = () => {

    const { list, id } = useParams();

    let [information, setInformation] = useState({});

    useEffect(() => {
        axios.get(`https://swapi.dev/api/${list}/${id}`)
            .then(response => {
                console.log("RESPONSE FROM GETTING API WALKER!", response)
                setInformation(response.data)
            })
            .catch(err => console.log(err))
    }, [list, id])


    return (
        <div>
            {
                list === "people"?
                    <>
                    <h1>{information.name}</h1> <br />
                    <p><strong>Height:</strong> {information.height} </p>
                    <p><strong>Mass:</strong> {information.mass} </p>
                    <p><strong>Hair Color:</strong> {information.hair_color} </p>
                    <p><strong>Skin Color:</strong> {information.skin_color} </p>
                    <p><strong>Eye Color:</strong> {information.eye_color} </p>
                    <p><strong>Birth Year:</strong> {information.birth_year} </p>
                    <p><strong>Gender:</strong> {information.gender} </p>
                    </>
                : list === "planets"?
                    <>
                    <h1>{information.name}</h1> <br />
                    <p><strong>Rotation Period:</strong> {information.rotation_period} </p>
                    <p><strong>Orbital Period:</strong> {information.orbital_period} </p>
                    <p><strong>Diameter:</strong> {information.diameter} </p>
                    <p><strong>Climate:</strong> {information.climate} </p>
                    <p><strong>Gravity:</strong> {information.gravity} </p>
                    <p><strong>Terrain:</strong> {information.terrain} </p>
                    <p><strong>Surface Water:</strong> {information.surface_water} </p>
                    <p><strong>Population:</strong> {information.population} </p>
                    </>
                : list === "starships"?
                    <>
                    <h1>{information.name}</h1> <br />
                    <p><strong>Model:</strong> {information.model} </p>
                    <p><strong>Manufacturer:</strong> {information.manufacturer} </p>
                    <p><strong>Cost In Credits:</strong> {information.cost_in_credits} </p>
                    <p><strong>Length:</strong> {information.length} </p>
                    <p><strong>Max Atmosphering Speed:</strong> {information.max_atmosphering_speed} </p>
                    <p><strong>Crew:</strong> {information.crew} </p>
                    <p><strong>Passengers:</strong> {information.passengers} </p>
                    <p><strong>Cargo Capacity:</strong> {information.cargo_capacity} </p>
                    <p><strong>Consumables:</strong> {information.consumables} </p>
                    <p><strong>HyperDrive Rating:</strong> {information.hyperdrive_rating} </p>
                    <p><strong>MGLT:</strong> {information.MGLT} </p>
                    <p><strong>Starship Class:</strong> {information.startship_class} </p>
                    <p><strong>Pilots:</strong> {information.pilots} </p>
                    <p><strong>Films:</strong> {information.films} </p>
                    </>
                : 
                    <>
                    <h1>WELCOME TO STARWARS API</h1>
                    <img src="https://lumiere-a.akamaihd.net/v1/images/og-generic_02031d2b.png?region=0%2C0%2C1200%2C1200" alt="" />
                    </>
            }
        </div>
    );
};

export default LukeAPIWalker;