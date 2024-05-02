import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Planetinfo = props => {
	const [details, setDetails] = useState ({})
	const { store, actions } = useContext(Context);
	const params = useParams();
	console.log(params)

	useEffect (()=>{
		fetch("https://www.swapi.tech/api/planets/" + params.planetinfo_id)
		.then ( (response)=>response.json() )
		.then( (data) => setDetails(data.result.properties) )
	},[])



	return (
		<div className="container">
		<div className="jumbotron">
			{/* <h1 className="display-4">Characterinfo This will show the demo element: {params.characterinfo_id}</h1> */}
			
			<div className="row flex-row flex-nowrap">
				<img className="card-img-top" style={{width: "25rem"}} src="https://media.istockphoto.com/id/500755774/photo/lightsaber-in-space-environment-ready-for-comp-of-your-characters.jpg?s=1024x1024&w=is&k=20&c=5XkzZ1jHrVWG0APtIxWQIT0HYG0mcEx_cHXop9v6S9c=" alt="..."/>
				<div className="text-center">
					<h1>{details.name}</h1>
					<p>Lorem ipsum dolor sit amet. Quo eligendi Quis est tenetur fugit et ipsa obcaecati id magni iure ea minima beatae. Et enim reiciendis est laborum beatae qui aperiam aperiam ad temporibus modi est voluptatem galisum qui totam assumenda. Est ipsa vitae quo quos quisquam aut tenetur dolores.</p>
				</div>
			</div>

			<hr className="my-4" style={{color: "red", width:"auto"}} />

			<div className="row text-center" style={{color: "red"}}>
				<p className="col"> Name  {details.name} </p>
				<p className="col"> Terrain  {details.terrain} </p>
				<p className="col"> Population  {details.population} </p>
				<p className="col"> Climate  {details.climate} </p>
				<p className="col"> Diameter  {details.diameter} </p>
			</div>

			{/* <Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link> */}
		</div>
		</div>
	);
};

Planetinfo.propTypes = {
	match: PropTypes.object
};
