import { useEffect } from 'react'
import AppRoutes from './routes'
import { Toaster } from 'sonner'


function App() {

  return (
    <>
    <Toaster
    toastOptions={{
      classNames: {
        toast: "bg-vive_items",
        title: "text-white",
        description: "text-white",
      },
    }}/>
    <AppRoutes />
    </>
    
  )
}

export default App
