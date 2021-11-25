// DO NOT DELETE

import * as React from 'react'
import { useState, useEffect } from 'react'
import { BreedsSelect } from './BreedsSelect.js'

export function DogListContainer () {

	const [breeds, setBreeds] = useState([]);

	useEffect(() => {
		fetch("https://dog.ceo/api/breeds/list/all")
			.then(response => response.json())
			.then(data => {
				var arr = Object.keys(data.message);
				setBreeds(arr);
			});
	}, []);

	return (
		<BreedsSelect breedsArr={breeds} />
	);
}