// DO NOT DELETE

import * as React from 'react'
import './App.css'
import { Description } from './Description'
import { Header } from './Header.js'

/**
 * 
 * @type {React.FC}
 */
export const App = () => {
  return (
    <body>
      <Header />
      <div className="main">
      <Description />
      </div>
      <hr></hr>
    </body>
  )
}
