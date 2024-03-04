import Layout from "./layout/Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Products from "./pages/Products"
import NoPage from "./pages/NoPage"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import SkeletonComp from "./pages/SkeletonComp"
import { lazy, Suspense } from 'react'

const LazyAbout = lazy(() => import('./pages/About'))
const LazyHome = lazy(() => import('./pages/Home'))
const LazyContact = lazy(() => import('./pages/Contact'))
const LazyProducts = lazy(() => import('./pages/Products'))
const LazyNoPage = lazy(() => import('./pages/NoPage'))


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: (
          <Suspense
            fallback={
              <SkeletonComp/>
            }
          >
            <LazyHome />
          </Suspense>
        )
        // element: <Home />,
      },
      {
        path: "about-us",
        element: (
          <Suspense
            fallback={
              <SkeletonComp/>
            }
          >
            <LazyAbout />
          </Suspense>
        )
      },
      {
        path: "contact-us",
        element: (
          <Suspense
            fallback={
              <SkeletonComp/>
            }
          >
            <LazyContact />
          </Suspense>
        )
      },
      {
        path: "our-products",
        element: (
          <Suspense
            fallback={
              <SkeletonComp/>
            }
          >
            <LazyProducts />
          </Suspense>
        )
      },
      {
        path: "*",
        element: (
          <Suspense
            fallback={
              <SkeletonComp/>
            }
          >
            <LazyNoPage />
          </Suspense>
        )
      },
    ]
  }
])

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
