function Rate() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mt-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
        <div className="flex items-center space-x-4 mb-4 sm:mb-0">
          <span className="text-gray-700 font-medium">Rate this item:</span>
          <div className="flex items-center space-x-1">
            <i className="fa fa-star text-orange-500"></i>
            <i className="fa fa-star text-orange-500"></i>
            <i className="fa fa-star text-orange-500"></i>
            <i className="fa fa-star text-gray-300"></i>
            <i className="fa fa-star text-gray-300"></i>
          </div>
          <span className="text-orange-500 text-sm">(6 votes)</span>
        </div>
      </div>

      {/* Tags */}
      <div className="flex items-center space-x-4">
        <span className="text-gray-700 font-medium">TAG:</span>
        <div className="flex items-center space-x-2">
          <a className="text-orange-500 hover:text-orange-600" href="#">
            Pink <span className="text-gray-400">/</span>
          </a>
          <a className="text-orange-500 hover:text-orange-600" href="#">
            T-Shirt <span className="text-gray-400">/</span>
          </a>
          <a className="text-orange-500 hover:text-orange-600" href="#">
            Girls
          </a>
        </div>
      </div>
    </div>
  );
}

export default Rate;
