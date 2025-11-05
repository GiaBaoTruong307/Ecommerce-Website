import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};
    let flag = true;

    if (!inputs.email) {
      newErrors.email = "Vui lòng nhập Email";
      flag = false;
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (inputs.email && !emailRegex.test(inputs.email)) {
        newErrors.email = "Định dạng email không hợp lệ";
        flag = false;
      }
    }

    if (!inputs.password) {
      newErrors.password = "Vui lòng nhập Password";
      flag = false;
    }

    if (!flag) {
      setErrors(newErrors);
    } else {
      const data = {
        email: inputs.email,
        password: inputs.password,
        level: 0,
      };

      axios
        .post("http://localhost/laravel8/public/api/login", data)
        .then((res) => {
          if (res.data.errors) {
            setErrors(res.data.errors);
          } else {
            setErrors({});
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("user", JSON.stringify(res.data.Auth));
            alert("Đăng nhập thành công");
            navigate("/");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Login to your account
      </h2>

      <form action="#" className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-colors"
            name="email"
            value={inputs.email}
            onChange={handleInput}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <div>
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-colors"
            name="password"
            value={inputs.password}
            onChange={handleInput}
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password}</p>
          )}
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
