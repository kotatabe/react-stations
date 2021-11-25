// DO NOT DELETE

import * as React from 'react'
import { useState } from 'react'
import { DogImage } from './DogImage.js'

export function Description() {
	const [dogUrl, setDogUrl] = useState("https://images.dog.ceo/breeds/setter-english/n02100735_10147.jpg");
	return (
		<div className="description-area">
			<div className="description">犬の画像を表示するアプリです</div>
			<div className="img-btn">
				<DogImage url={dogUrl} />
				<button onClick={() => 
					fetch("https://dog.ceo/api/breeds/image/random")
					.then(response => response.json())
					.then(data => setDogUrl(data.message))
				}>
					更新
				</button>
			</div>
		</div>
	);
}