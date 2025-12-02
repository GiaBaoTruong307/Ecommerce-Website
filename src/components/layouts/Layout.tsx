// src/components/layouts/MainLayout.tsx
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

      {/* Nội dung page sẽ hiện ở đây */}
      <main className="flex-1 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default Layout
