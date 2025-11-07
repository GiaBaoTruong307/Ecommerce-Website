import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";
import MenuLeft from "./components/Layout/MenuLeft.jsx";

function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="flex-1">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            {!location.pathname.includes("member") && <MenuLeft />}

            <div className="flex-1 px-4">
              <Outlet />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
