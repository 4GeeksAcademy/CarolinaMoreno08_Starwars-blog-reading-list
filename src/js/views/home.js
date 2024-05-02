import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";

import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Characters } from "../component/characters";
import { Planets } from "../component/planets";

export const Home = () => {

	const { store, actions } = useContext(Context);
	// const [characters, setCharacters] = useState([])


	// se crearon los personajes localmente, pero despues fue reemplazado y el nuevo condigo esta en FLUX, en "loadSomeData" dentro de "actions":
		// useEffect(() =>{
		// 	console.log("cargo home")
		// 	fetch("https://www.swapi.tech/api/people")
		// 	.then ( (response)=>response.json() )
		// 	//.then( (data) => console.log(data.results) )
		// 	.then ( (data)=>setCharacters(data.results) )	
		// },[])  

	return (
		<div className="text-center mt-5">
			{/* <Characters name="Luke Skywalker" />
			    <Characters name="C-3PO" /> */}
			{/* {characters.map( (elemento) => <p key={elemento.uid}>{elemento.name}</p>)} */}
			{/* <h1>Characters desde api!</h1>
			{characters.map( (elemento) => <Characters key={elemento.uid} name={elemento.name} />)} */}

			

			<h1 className="titleCharacter text-start mx-3" style={{color: "red"}}>Characters</h1>

			<div className="row flex-row flex-nowrap" style={{overflowX: "auto"}}>
			{ store.charactersflux.map( (elemento) => 
				<Characters 
					key={elemento.url} 
					uid={elemento.url.replace("https://swapi.dev/api/people/","").replace("/","")} 
					name={elemento.name} 
					gender={elemento.gender} 
					hair_color={elemento.hair_color} 
					eye_color={elemento.eye_color} />
			)}
			</div>

			<h1 className="titlePlanets text-start mx-3  mt-5"  style={{color: "red"}}>Planets</h1>

			<div className="row flex-row flex-nowrap" style={{overflowX: "auto"}}>
			{ store.planetsflux.map( (elemento) => 
				<Planets 
					key={elemento.url} 
					uid={elemento.url.replace("https://swapi.dev/api/planets/","").replace("/","")} 
					name={elemento.name} 
					terrain={elemento.terrain} 
					population={elemento.population}
					climate={elemento.climate}
					diameter={elemento.diameter} />
			)}
			</div>

		</div>
	);
	
}