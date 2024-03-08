import React, { Suspense, useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layout/Layout'
import PreLoader from './pages/PreLoader'
import Skeleton from './pages/Skeleton'
// import { Skeleton } from '@mui/material'

// Lazy load your pages
const LazyHome = React.lazy(() => import('./pages/Home'))
const LazyAbout = React.lazy(() => import('./pages/About'))
const LazyContact = React.lazy(() => import('./pages/Contact'))
const LazyProducts = React.lazy(() => import('./pages/Products'))
const LazyNoPage = React.lazy(() => import('./pages/NoPage'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: (
          <Suspense fallback={<Skeleton />}>
            <LazyHome />
          </Suspense>
        )
      },
      {
        path: 'about-us',
        element: (
          <Suspense fallback={<Skeleton />}>
            <LazyAbout />
          </Suspense>
        )
      },
      {
        path: 'contact-us',
        element: (
          <Suspense fallback={<Skeleton />}>
            <LazyContact />
          </Suspense>
        )
      },
      {
        path: 'our-products',
        element: (
          <Suspense fallback={<Skeleton />}>
            <LazyProducts />
          </Suspense>
        )
      },
      {
        path: '*',
        element: (
          <Suspense fallback={<Skeleton />}>
            <LazyNoPage />
          </Suspense>
        )
      }
    ]
  }
])

function App () {
  const [loading, setLoading] = useState(true)

  // Set loading to false once the main component mounts
  // This will happen automatically without the need for a useEffect hook
  // since it's the initial state
  setTimeout(() => {
    setLoading(false);
  }, 100); // Simulated loading time: 0.1 second

  return (
    < >
      {loading ? (
        <Skeleton />
      ) : (
        <RouterProvider router={router}></RouterProvider>
      )}
    </>
  )
}

export default App
