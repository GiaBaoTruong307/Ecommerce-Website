import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter as Router } from 'react-router-dom'
import { ShopProvider } from './context/ShopContext.tsx'

createRoot(document.getElementById('root')!).render(
  <Router>
    <ShopProvider>
      <div className="min-h-screen px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <App />
      </div>
    </ShopProvider>
  </Router>
)
