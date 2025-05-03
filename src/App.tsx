import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Login from './Components/Auth/Login'
import Dashboard from './Layout/Dashboard'
import AdminDashboard from './Pages/Admin/DashboardPage'

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
      path: "/",
      element: <Dashboard />,
      children: [
        {
          path: "/",
          element: <AdminDashboard />
        }
      ]
    }
  ])
  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App
