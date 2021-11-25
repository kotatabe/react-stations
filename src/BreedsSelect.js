// DO NOT DELETE

import * as React from 'react'
import { useState } from 'react'

export function BreedsSelect (props) {

	const [ selectedBreed, setSelectedBreed ] = useState("");
	return (
		<div className="select-breeds">
			<label htmlFor="select-breeds">breeds List</label>
			<select value={selectedBreed}
				onChange={e => { setSelectedBreed(e.target.value)}}>
				<option value="">--Please Select--</option>
				{props.breeds.map(b => <option value={b}>{b}</option>)}
			</select>
			<button onClick={() => {
				if (selectedBreed) {
					fetch("https://dog.ceo/api/breed/" + selectedBreed + "/images/random/12")
					.then(response => response.json())
					.then(data => {
						props.setImgList(data.message);
					})
				}
				else {
					props.setImgList([]);
				}
			}}>
				表示
			</button>
		</div>
	);
}