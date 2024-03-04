import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import ScrollToTop from '../components/ScrollToTop'

const Layout = () => {
  return (
    <>
        <ScrollToTop />
        <Header />
        <Outlet />
        <Footer />
    </>
  )
}

export default Layout
