import React, { Suspense, useEffect, useState } from 'react'
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
          <Suspense fallback={<PreLoader />}>
            <LazyHome />
          </Suspense>
        )
      },
      {
        path: 'about-us',
        element: (
          <Suspense fallback={<PreLoader />}>
            <LazyAbout />
          </Suspense>
        )
      },
      {
        path: 'contact-us',
        element: (
          <Suspense fallback={<PreLoader />}>
            <LazyContact />
          </Suspense>
        )
      },
      {
        path: 'our-products',
        element: (
          <Suspense fallback={<PreLoader />}>
            <LazyProducts />
          </Suspense>
        )
      },
      {
        path: '*',
        element: (
          <Suspense fallback={<PreLoader />}>
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
  }, 5000); // Simulated loading time: 1 second

  return (
    <div className="app">
      {loading ? (
        <Skeleton />
      ) : (
        <RouterProvider router={router}></RouterProvider>
      )}
    </div>
  )
}

export default App
