import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Login from './Components/Auth/Login'
import Dashboard from './Layout/Dashboard'

function App() {
  const routes = createBrowserRouter([
    {
      path: "/login",
      element: <Login isLogin={true} />
    },
    {
      path: "/sign-up",
      element: <Login isLogin={false} />
    },
    {
      path:"/",
      element:<Dashboard/>
    }
  ])
  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App
