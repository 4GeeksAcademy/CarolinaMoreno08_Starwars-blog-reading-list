import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
				<img className="card-img-top mx-5" style={{width: "5rem"}}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5iWgkRIdTTW96yTfHlhKzs9_YF0RIoZz9-ksUHlsooQ&s" alt="..."/>
				</span>
			</Link>
			{/* <div className="ml-auto"> */}
				{/* {store.message} */}
				{/* {store.favorites.map( (elemento, index)=>  <p key ={index}>    {elemento} <i className="fa-solid fa-trash"></i> </p> )}  */}
				
				
				<div className="dropdown mx-5">
					<button className="btn btn-primary dropdown-toggle " type="button" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites {store.favorites.length}
					</button>
					<ul className="dropdown-menu">
						<li>
							<a className="dropdown-item"> 
								{ store.favorites.map( (elemento, index) =>  
									<p key={index}>
										{elemento}  
										<button onClick={()=>actions.eliminarFavorito(elemento)}>
											<i className="fa-solid fa-trash fa-sm"/>
										</button>   
									</p>
								)}      
							</a>
						</li>

					</ul>
				</div>	
		
			



			{/* </div> */}
		</nav>
	);
};
