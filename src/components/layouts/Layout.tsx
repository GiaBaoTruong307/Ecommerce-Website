import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import SearchBar from '../ui/SearchBar'
import { ToastContainer } from 'react-toastify'

const Layout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <ToastContainer />
      <Navbar />
      <SearchBar />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default Layout
