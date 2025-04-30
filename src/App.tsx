import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Login from './Components/Auth/Login'

function App() {
  const routes = createBrowserRouter([
    {
      path: "/login",
      element: <Login />
    }
  ])
  return (
    <>
<RouterProvider router={routes}/>
    </>
  )
}

export default App
