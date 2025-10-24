import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Layout/Header.jsx";
import Footer from "./components/Layout/Footer.jsx";
import MenuLeft from "./components/Layout/MenuLeft.jsx";

function App() {
  const location = useLocation();

  // Các routes không hiển thị MenuLeft
  const hideMenuLeftRoutes = ["/member"];

  // Check nếu route hiện tại nằm trong danh sách ẩn MenuLeft
  const shouldHideMenuLeft = hideMenuLeftRoutes.some((route) =>
    location.pathname.startsWith(route)
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="flex-1">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            {/* Điều kiện ẩn MenuLeft */}
            {!shouldHideMenuLeft && <MenuLeft />}

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
