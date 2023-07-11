import { createBrowserRouter,RouterProvider } from 'react-router-dom'

import './App.css'
import Home from './pages/home'
import PartsSelectionPage from './pages/PartsSelectionPage'

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/part-selection",
      element:<PartsSelectionPage/>
    },{
      path:"/part-assembly",

    }
  ])

  return (<RouterProvider router={router}></RouterProvider> )
}

export default App
