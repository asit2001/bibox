import { createBrowserRouter,RouterProvider } from 'react-router-dom'

import './App.css'
import Home from './pages/home'
import PartsSelectionPage from './pages/PartsSelectionPage'
import PartAssemblyPage from './pages/PartAssemblyPage'
import FinalPage from './pages/FinalPage'

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
      element:<PartAssemblyPage/>
    }
    ,{
      path:"/final",
      element:<FinalPage/>
    }
  ])

  return (<RouterProvider router={router}></RouterProvider> )
}

export default App
