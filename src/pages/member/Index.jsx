import Login from "./Login";
import Register from "./Register";

function Index() {
  return (
    <section id="form" className="py-16 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
            {/* Login Form */}
            <div className="lg:col-span-2">
              <Login />
            </div>

            {/* OR Divider */}
            <div className="lg:col-span-1 flex justify-center">
              <div className="relative">
                {/* Vertical line for desktop */}
                <div className="hidden lg:block w-px h-32 bg-gray-300 mx-auto"></div>
                {/* Horizontal line for mobile */}
                <div className="lg:hidden w-full h-px bg-gray-300 my-8"></div>
                
                {/* OR Circle */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border-2 border-orange-500 rounded-full w-16 h-16 flex items-center justify-center">
                  <span className="text-orange-500 font-bold text-lg">OR</span>
                </div>
              </div>
            </div>

            {/* Register Form */}
            <div className="lg:col-span-2">
              <Register />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Index;