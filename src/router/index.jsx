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
      { path: '/error404',     element: <Error404 /> },
      { path: '*',             element: <Error404 /> },
    ],
  },
], {
  basename: import.meta.env.BASE_URL, // valeur de « base » fournie par Vite
})

export default router