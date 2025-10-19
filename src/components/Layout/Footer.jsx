function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-auto">
      {/* Footer Top */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Company Info */}
            <div className="md:col-span-3">
              <h2 className="text-2xl font-bold mb-4">
                <span className="text-orange-500">e</span>-shopper
              </h2>
              <p className="text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor
              </p>
            </div>

            {/* Video Gallery */}
            <div className="md:col-span-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="text-center">
                    <div className="relative mb-2">
                      <div className="w-full h-20 bg-gray-600 rounded flex items-center justify-center">
                        <i className="fa fa-play-circle-o text-2xl text-orange-500"></i>
                      </div>
                    </div>
                    <p className="text-sm">Circle of Hands</p>
                    <h3 className="text-xs text-gray-400">24 DEC 2014</h3>
                  </div>
                ))}
              </div>
            </div>

            {/* Address */}
            <div className="md:col-span-3">
              <div className="text-center">
                <div className="w-full h-32 bg-gray-600 rounded mb-4 flex items-center justify-center">
                  <span className="text-gray-400">Map</span>
                </div>
                <p className="text-sm text-gray-300">
                  505 S Atlantic Ave Virginia Beach, VA(Virginia)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Middle */}
      <div className="bg-gray-900 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Service</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-gray-300 hover:text-orange-500">
                    Online Help
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-orange-500">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-orange-500">
                    Order Status
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-orange-500">
                    Change Location
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-orange-500">
                    FAQ's
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Shop</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-gray-300 hover:text-orange-500">
                    T-Shirt
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-orange-500">
                    Mens
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-orange-500">
                    Womens
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-orange-500">
                    Gift Cards
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-orange-500">
                    Shoes
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Policies</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-gray-300 hover:text-orange-500">
                    Terms of Use
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-orange-500">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-orange-500">
                    Refund Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-orange-500">
                    Billing System
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-orange-500">
                    Ticket System
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">About Shopper</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-gray-300 hover:text-orange-500">
                    Company Information
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-orange-500">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-orange-500">
                    Store Location
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-orange-500">
                    Affiliate Program
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-orange-500">
                    Copyright
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <div className="flex mb-4">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-3 py-2 bg-gray-700 text-white rounded-l focus:outline-none focus:bg-gray-600"
                />
                <button className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-r">
                  <i className="fa fa-arrow-circle-o-right"></i>
                </button>
              </div>
              <p className="text-xs text-gray-400">
                Get the most recent updates from our site and be updated
                yourself...
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-black py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p className="text-gray-400">
              Copyright © 2013 E-SHOPPER Inc. All rights reserved.
            </p>
            <p className="text-gray-400">
              Designed by
              <a
                href="http://www.themeum.com"
                target="_blank"
                className="text-orange-500 hover:underline"
              >
                <span className="pl-1">Gia Bảo Trương</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
