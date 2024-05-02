import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Planets = (props) => {
    const { actions } = useContext(Context);

	return (
        <div className="card m-3 text-start" style={{width: "18rem"}}>
            <img className="card-img-top" src="https://media.istockphoto.com/id/500755774/photo/lightsaber-in-space-environment-ready-for-comp-of-your-characters.jpg?s=1024x1024&w=is&k=20&c=5XkzZ1jHrVWG0APtIxWQIT0HYG0mcEx_cHXop9v6S9c=" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
             
                    <p className="card-text mb-0">Population: {props.population}</p>
                    <p className="card-text mb-0">Terrain: {props.terrain}</p>
      
                <div className="row justify-content-between mt-4">
                    <div className="col-8">
                        <Link className="btn btn-primary" to={"/planetinfo/" + props.uid}>
                            <span>Learn more!</span>
                        </Link>
                    </div>
                    <div className="col-4  text-end">
                        <button onClick={()=>actions.agregarFavorito(props.name)}>♡</button>
                    </div> 
                </div> 
            </div>
        </div>
	);
};