import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {PrimeReactProvider} from 'primereact/api'
import Tailwind from 'primereact/passthrough/tailwind';



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode >
    <PrimeReactProvider value={{ unstyled: false, pt: Tailwind,  }}>

    <App />
     </PrimeReactProvider>
  </React.StrictMode>,
)
  