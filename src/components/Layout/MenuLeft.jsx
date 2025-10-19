function MenuLeft() {
  return (
    <div className="w-full md:w-1/4 px-4">
      <div className="bg-white rounded-lg shadow-sm">
        {/* Category */}
        <div className="p-4 border-b">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Category</h2>

          <div className="space-y-2">
            <div className="border border-gray-200 rounded">
              <div className="p-3 bg-gray-50 cursor-pointer hover:bg-orange-500 hover:text-white">
                <h4 className="flex justify-between items-center">
                  <span>Sportswear</span>
                  <i className="fa fa-plus text-sm"></i>
                </h4>
              </div>
            </div>

            <div className="border border-gray-200 rounded">
              <div className="p-3 bg-gray-50 cursor-pointer hover:bg-orange-500 hover:text-white">
                <h4 className="flex justify-between items-center">
                  <span>Mens</span>
                  <i className="fa fa-plus text-sm"></i>
                </h4>
              </div>
            </div>

            <div className="border border-gray-200 rounded">
              <div className="p-3 bg-gray-50 cursor-pointer hover:bg-orange-500 hover:text-white">
                <h4 className="flex justify-between items-center">
                  <span>Womens</span>
                  <i className="fa fa-plus text-sm"></i>
                </h4>
              </div>
            </div>

            <div className="border border-gray-200 rounded">
              <div className="p-3 bg-gray-50 cursor-pointer hover:bg-orange-500 hover:text-white">
                <span>Kids</span>
              </div>
            </div>

            <div className="border border-gray-200 rounded">
              <div className="p-3 bg-gray-50 cursor-pointer hover:bg-orange-500 hover:text-white">
                <span>Fashion</span>
              </div>
            </div>

            <div className="border border-gray-200 rounded">
              <div className="p-3 bg-gray-50 cursor-pointer hover:bg-orange-500 hover:text-white">
                <span>Households</span>
              </div>
            </div>
          </div>
        </div>

        {/* Brands */}
        <div className="p-4 border-b">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Brands</h2>
          <div className="space-y-2">
            <a
              href="#"
              className="flex justify-between items-center py-2 px-3 rounded hover:bg-orange-500 hover:text-white"
            >
              <span>Acne</span>
              <span className="text-sm bg-gray-200 text-gray-600 px-2 py-1 rounded">
                (50)
              </span>
            </a>
            <a
              href="#"
              className="flex justify-between items-center py-2 px-3 rounded hover:bg-orange-500 hover:text-white"
            >
              <span>Grüne Erde</span>
              <span className="text-sm bg-gray-200 text-gray-600 px-2 py-1 rounded">
                (56)
              </span>
            </a>
            <a
              href="#"
              className="flex justify-between items-center py-2 px-3 rounded hover:bg-orange-500 hover:text-white"
            >
              <span>Albiro</span>
              <span className="text-sm bg-gray-200 text-gray-600 px-2 py-1 rounded">
                (27)
              </span>
            </a>
            <a
              href="#"
              className="flex justify-between items-center py-2 px-3 rounded hover:bg-orange-500 hover:text-white"
            >
              <span>Ronhill</span>
              <span className="text-sm bg-gray-200 text-gray-600 px-2 py-1 rounded">
                (32)
              </span>
            </a>
          </div>
        </div>

        {/* Price Range */}
        <div className="p-4">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Price Range</h2>
          <div className="bg-gray-50 p-4 rounded">
            <input type="range" min="0" max="600" className="w-full mb-2" />
            <div className="flex justify-between text-sm font-bold">
              <span>$ 0</span>
              <span>$ 600</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuLeft;
