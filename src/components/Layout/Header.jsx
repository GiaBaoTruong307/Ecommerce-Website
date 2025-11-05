import { Link } from "react-router-dom";

function Header() {
  const token = localStorage.getItem("token");

  const handleLogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    alert("Đăng xuất thành công");
  };

  return (
    <header id="header" className="w-full">
      {/* Header Top */}
      <div className="bg-gray-100 py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2">
                <i className="fa fa-phone text-orange-500"></i>
                <span className="text-sm">+2 95 01 88 821</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="fa fa-envelope text-orange-500"></i>
                <span className="text-sm">info@domain.com</span>
              </div>
            </div>

            <div className="flex space-x-3">
              <a href="#" className="text-gray-600 hover:text-orange-500">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-orange-500">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-orange-500">
                <i className="fa fa-linkedin"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-orange-500">
                <i className="fa fa-dribbble"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-orange-500">
                <i className="fa fa-google-plus"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Header Middle */}
      <div className="bg-white py-4 border-b">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="logo">
                <a href="/" className="text-2xl font-bold text-orange-500">
                  E-SHOPPER
                </a>
              </div>

              <div className="flex space-x-2">
                <div className="relative">
                  <button className="bg-orange-500 text-white px-3 py-2 rounded text-sm">
                    USA
                    <i className="fa fa-caret-down ml-1"></i>
                  </button>
                </div>
                <div className="relative">
                  <button className="bg-orange-500 text-white px-3 py-2 rounded text-sm">
                    DOLLAR
                    <i className="fa fa-caret-down ml-1"></i>
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <a
                href="#"
                className="flex items-center space-x-1 text-gray-600 hover:text-orange-500"
              >
                <i className="fa fa-user"></i>
                <span>Account</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-1 text-gray-600 hover:text-orange-500"
              >
                <i className="fa fa-star"></i>
                <span>Wishlist</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-1 text-gray-600 hover:text-orange-500"
              >
                <i className="fa fa-crosshairs"></i>
                <span>Checkout</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-1 text-gray-600 hover:text-orange-500"
              >
                <i className="fa fa-shopping-cart"></i>
                <span>Cart</span>
              </a>
              <Link
                to="/member/login-register"
                className="flex items-center space-x-1 text-gray-600 hover:text-orange-500"
              >
                <i className="fa fa-user"></i>
                {token ? (
                  <span onClick={handleLogOut}>Logout</span>
                ) : (
                  <span>Login</span>
                )}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Header Bottom - Navigation */}
      <div className="bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <nav className="flex space-x-8">
              <Link
                to="/"
                className="text-white hover:text-orange-500 py-4 block"
              >
                Home
              </Link>
              <div className="relative group">
                <a
                  href="#"
                  className="text-white hover:text-orange-500 py-4 flex items-center"
                >
                  Shop
                  <i className="fa fa-angle-down ml-1"></i>
                </a>
                <div className="absolute top-full left-0 bg-white shadow-lg min-w-48 hidden group-hover:block z-10">
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-orange-500 hover:text-white"
                  >
                    Products
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-orange-500 hover:text-white"
                  >
                    Product Details
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-orange-500 hover:text-white"
                  >
                    Checkout
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-orange-500 hover:text-white"
                  >
                    Cart
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-orange-500 hover:text-white"
                  >
                    Login
                  </a>
                </div>
              </div>
              <div className="relative group">
                <a href="#" className="text-orange-500 py-4 flex items-center">
                  Blog
                  <i className="fa fa-angle-down ml-1"></i>
                </a>
                <div className="absolute top-full left-0 bg-white shadow-lg min-w-48 hidden group-hover:block z-10">
                  <Link
                    to="/blog/list"
                    className="block px-4 py-2 text-gray-800 hover:bg-orange-500 hover:text-white"
                  >
                    Blog List
                  </Link>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-orange-500 hover:text-white"
                  >
                    Blog Single
                  </a>
                </div>
              </div>
              <a
                href="#"
                className="text-white hover:text-orange-500 py-4 block"
              >
                404
              </a>
              <a
                href="#"
                className="text-white hover:text-orange-500 py-4 block"
              >
                Contact
              </a>
            </nav>

            <div className="flex items-center">
              <input
                type="text"
                placeholder="Search"
                className="px-3 text-white py-2 border rounded-l focus:outline-none focus:border-orange-500"
              />
              <button className="bg-orange-500 text-white px-3 py-2 rounded-r hover:bg-orange-600">
                <i className="fa fa-search"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
