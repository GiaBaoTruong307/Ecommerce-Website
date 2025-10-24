function Login() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Login to your account
      </h2>

      <form action="#" className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-colors"
          />
        </div>

        <div>
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-colors"
          />
        </div>

        <div className="flex items-center space-x-2 py-2">
          <input
            type="checkbox"
            className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500 focus:ring-2"
          />
          <span className="text-sm text-gray-600">Keep me signed in</span>
        </div>

        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 mt-6"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
