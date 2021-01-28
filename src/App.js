import React, {createContext, useEffect, useState} from 'react'
import { BrowserRouter } from 'react-router-dom'
import MainRouter from './MainRouter'


import redWine1 from '../src/assert/images/product image/2016-brovia-barolo-villero-piedmont-italy.png'
import redWine2 from '../src/assert/images/product image/contrada-r-passopisciaro-2018_28361_zoom.png'
import redWine3 from '../src/assert/images/product image/unnamed (1).png'
import redWine4 from '../src/assert/images/product image/yEAehUFlR5upV_nc1vNytQ_pb_600x600.png'

import whiteWine1 from '../src/assert/images/product image/21pour9-superJumbo.png'
import whiteWine2 from '../src/assert/images/product image/21pour1-superJumbo.png'
import whiteWine3 from '../src/assert/images/product image/21pour5-superJumbo.png'
import whiteWine4 from '../src/assert/images/product image/21pour3-superJumbo.png'

import roseWine1 from '../src/assert/images/product image/AX4iJ1vxQCaPD_-bWnlxoQ_pb_x600.png'
import roseWine2 from '../src/assert/images/product image/Mask Group 10.png'
import roseWine3 from '../src/assert/images/product image/RDs2ILRkTAi6wkKxsfYu_Q_pb_x600.png'
import roseWine4 from '../src/assert/images/product image/Fattoria_fibbiano_wine_sofia_FE5B7463.png'


const RedWine = createContext()
const WhiteWine = createContext()
const RoseName = createContext()

const App = () => {

  let redWineData = [
    { name: 'BROVIA 2016 GARBLÈT SUÈ', price: 90.50, image: redWine1 },
    { name: 'FRANCHETTI–PASSOPISCIARO', price: 90.50, image: redWine2 },
    { name: "CIACCI PICCOLOMINI D'ARAGONA", price: 90.50, image: redWine3 },
    { name: 'CASTELLO DI NEIVE', price: 90.50, image: redWine4 },
  ]
  let whiteWhineData = [
    { name: "ABRUZZO PECORINO SUPERIORE", price: 17.99, image: whiteWine1 },
    { name: "TERRE SICILIANE RAMÍ", price: 24.99, image: whiteWine2 },
    { name: "VERDICCHIO DI MATELICA", price: 90.50, image: whiteWine3 },
    { name: "CALABRIA ZIBIBBO", price: 90.50, image: whiteWine4 },
  ]

  let roseWineData = [
    { name: "ABRUZZO PECORINO SUPERIORE", price: 17.99, image: roseWine1 },
    { name: "TERRE SICILIANE RAMÍ", price: 24.99, image: roseWine2 },
    { name: "VERDICCHIO DI MATELICA", price: 90.50, image: roseWine3 },
    { name: "CALABRIA ZIBIBBO", price: 90.50, image: roseWine4 },
  ]
  return (
    <div>
      <BrowserRouter>
        <RedWine.Provider value={redWineData}>
          <WhiteWine.Provider value={whiteWhineData}>
            <RoseName.Provider value={roseWineData}>
              <MainRouter />
            </RoseName.Provider>
          </WhiteWine.Provider>
        </RedWine.Provider>
      </BrowserRouter>
    </div>
  )
}

export default App
export { RedWine };
export { WhiteWine };
export { RoseName };
