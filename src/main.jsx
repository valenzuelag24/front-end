import { Fragment, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Comienzo from './principal.jsx'

//import './index.css'
//import App from './App.jsx'

const root = createRoot(document.getElementById('root'))

root.render(
  <Fragment>
    
    <Comienzo/>
    
  </Fragment>,
)
