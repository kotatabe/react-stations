// DO NOT DELETE

import * as React from 'react'
import { useState, useEffect } from 'react'
import { BreedsSelect } from './BreedsSelect.js'

export function DogListContainer () {

	const [breeds, setBreeds] = useState([]);
	const [imgList, setImgList] = useState([]);

	useEffect(() => {
		fetch("https://dog.ceo/api/breeds/list/all")
			.then(response => response.json())
			.then(data => {
				var arr = Object.keys(data.message);
				setBreeds(arr);
			});
	}, []);

	return (
		<div className="dog-list-container">
			<BreedsSelect breeds={breeds} setImgList={setImgList} />
			<ul className="dog-img-list">
				{ imgList.map(url => <li><img src={url} /></li>) }
			</ul>
		</div>
	);
}