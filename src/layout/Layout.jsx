import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import ScrollToTop from '../components/ScrollToTop'

const Layout = () => {
  return (
    <div className='overflow-x-clip'>
        <ScrollToTop />
        <Header />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout
