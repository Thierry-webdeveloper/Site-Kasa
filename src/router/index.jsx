import { createBrowserRouter } from 'react-router-dom'
import Layout from '../components/Layout'
import Home from '../pages/Home'
import About from '../pages/About'
import Logement from '../pages/Logement'
import Error404 from '../pages/Error404'

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/',             element: <Home /> },
      { path: '/logement/:id', element: <Logement /> },
      { path: '/about',        element: <About /> },
      { path: '*',             element: <Error404 /> },
    ],
  },
])

export default router