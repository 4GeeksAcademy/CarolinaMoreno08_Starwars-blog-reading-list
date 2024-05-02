const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			charactersflux: [],
			message: "desde flux",
			favorites: [],
			planetsflux: []
		},

		
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			// agregarFavorito: (characterName) => {
			// 	console.log("cambiar texto" + characterName);

			// 	const store = getStore();

			// 	if (store.favorites.includes(characterName) ) {
			// 		console.log("ya esta en la lista")
			// 		setStore({ favorites: store.favorites.filter( (item)=> item != characterName )  })
			// 	} else {
			// 		console.log ("no esta en la lista")
			// 		setStore({ favorites: [...store.favorites, characterName] });
			// 	}

			// 	setStore({ message: characterName });
			// 	//agregar el elemento a "favoritos"
				
			// },
		
		
			agregarFavorito: (characterName) => {
				console.log("cambiar texto" + characterName);

				const store = getStore();

				if (store.favorites.includes(characterName) ) {
					console.log("ya esta en la lista")
					// setStore({ favorites: store.favorites.filter( (item)=> item != characterName )  })
				} else {
					console.log ("no esta en la lista")
					setStore({ favorites: [...store.favorites, characterName] });
				}

				setStore({ message: characterName });
				//agregar el elemento a "favoritos"
				
			},

			eliminarFavorito: (characterName) => {
				console.log("cambiar texto" + characterName);

				const store = getStore();

				if (store.favorites.includes(characterName) ) {
					console.log("ya esta en la lista")
					setStore({ favorites: store.favorites.filter( (item)=> item != characterName )  })
				} else {
					console.log ("no esta en la lista")
					// setStore({ favorites: [...store.favorites, characterName] });
				}

				setStore({ message: characterName });
				//agregar el elemento a "favoritos"
				
			},



			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
				console.log("se cargo pagina desde flux")
				fetch("https://swapi.dev/api/people")
				.then ( (response)=>response.json() )
				//.then( (data) => console.log(data.results) )
				.then ( (data)=>setStore({ charactersflux: data.results }) )

				console.log("se cargo pagina desde flux - planets")
				fetch("https://swapi.dev/api/planets")
				.then ( (response)=>response.json() )
				//.then( (data) => console.log(data.results) )
				.then ( (data)=>setStore({ planetsflux: data.results }) )

				
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
