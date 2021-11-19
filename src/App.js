// DO NOT DELETE

import * as React from 'react'
import { useState, useEffect } from 'react'
import './App.css'

/**
 * 
 * @type {React.FC}
 */
export const App = () => {

  const [dogUrl, setDogUrl] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => setDogUrl(data.message))
  }, [count]);

  return (
    <body>
      <header>
        <h1>Dog App</h1>
      </header>
      <p>this is a dog</p>
      <img src={dogUrl} alt="Dog" />
      <button onClick={() => setCount(count + 1) }>更新</button>
    </body>
  )
}
