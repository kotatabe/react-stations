// DO NOT DELETE

import * as React from 'react'
import { useState } from 'react'

export function BreedsSelect (props) {

	const [ selectedBreed, setSelectedBreed ] = useState("");
	return (
		<div className="select-breeds">
			<label htmlFor="select-breeds">breeds List</label>
			<select value={selectedBreed} onChange={ e => { setSelectedBreed(e.target.value) }}>
				<option value="">--Please Select--</option>
				{props.breedsArr.map(b => <option value={b}>{b}</option>)}
			</select>
		</div>
	);
}