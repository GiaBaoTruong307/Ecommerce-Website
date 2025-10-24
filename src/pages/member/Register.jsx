import { useState, useRef } from "react";
import axios from "axios";

function Register() {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  });
  const [errors, setErrors] = useState({});
  const [avatar, setAvatar] = useState(null); // Avatar mã hóa để gửi qua API
  const [getFile, setFile] = useState(null); // File gốc để kiểm tra kích thước và định dạng

  // tạo ref để reset input file
  const fileInputRef = useRef(null);

  // Xử lý file upload
  const handleAvatar = (e) => {
    const file = e.target.files[0];

    if (file) {
      let reader = new FileReader();
      reader.onload = (e) => {
        setAvatar(e.target.result);
        setFile(file);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};
    let flag = true;

    ["name", "email", "password", "phone", "address"].forEach((field) => {
      if (!inputs[field]) {
        newErrors[field] = `Vui lòng nhập ${field}`;
        flag = false;
      }
    });

    // Kiểm tra định dạng email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (inputs.email && !emailRegex.test(inputs.email)) {
      newErrors.email = "Định dạng email không hợp lệ";
      flag = false;
    }

    // Kiểm tra định dạng số điện thoại Việt Nam
    const phoneRegex = /^(0[0-9]{9})$/;
    if (inputs.phone && !phoneRegex.test(inputs.phone)) {
      newErrors.phone = "Số điện thoại phải gồm 10 chữ số và bắt đầu bằng 0";
      flag = false;
    }

    // Kiểm tra ảnh đại diện
    if (getFile === null) {
      newErrors.avatar = "Vui lòng tải lên ảnh đại diện";
      flag = false;
    } else {
      const allowedTypes = [
        "image/jpeg",
        "image/jpg",
        "image/png",
        "image/gif",
      ];

      if (!allowedTypes.includes(getFile.type)) {
        newErrors.avatar =
          "Chỉ chấp nhận các định dạng ảnh: jpeg, jpg, png, gif";
        flag = false;
      }

      if (getFile.size > 1024 * 1024) {
        newErrors.avatar = "Kích thước ảnh phải nhỏ hơn 1MB";
        flag = false;
      }
    }

    if (!flag) {
      setErrors(newErrors);
    } else {
      const data = {
        ...inputs,
        avatar: avatar,
        level: 0,
      };

      axios
        .post("http://localhost/laravel8/public/api/register", data)
        .then((res) => {
          if (res.data.errors) {
            setErrors(res.data.errors);
            alert("Đăng ký thất bại! Vui lòng kiểm tra lại thông tin.");
            return;
          } else {
            alert("Đăng ký thành công!");
            setInputs({
              name: "",
              email: "",
              password: "",
              phone: "",
              address: "",
            });
            setAvatar(null);
            setFile(null);
            setErrors({});
            // reset input file thực tế
            if (fileInputRef.current) {
              fileInputRef.current.value = "";
            }
          }
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        New User Signup!
      </h2>

      <form action="#" className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={inputs.name}
            onChange={handleInput}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-colors"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        <div>
          <input
            type="text"
            placeholder="Email Address"
            name="email"
            value={inputs.email}
            onChange={handleInput}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-colors"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <div>
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={inputs.password}
            onChange={handleInput}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-colors"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password}</p>
          )}
        </div>

        <div>
          <input
            type="text"
            placeholder="Phone"
            name="phone"
            value={inputs.phone}
            onChange={handleInput}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-colors"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
          )}
        </div>

        <div>
          <input
            type="text"
            placeholder="Address"
            name="address"
            value={inputs.address}
            onChange={handleInput}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-colors"
          />
          {errors.address && (
            <p className="text-red-500 text-sm mt-1">{errors.address}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="file-upload"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Upload Avatar Picture
          </label>
          <input
            type="file"
            id="file-upload"
            name="avatar"
            onChange={handleAvatar}
            accept="image/*"
            ref={fileInputRef}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-colors"
          />
          {errors.avatar && (
            <p className="text-red-500 text-sm mt-1">{errors.avatar}</p>
          )}

          {/* Preview Avatar */}
          {avatar && (
            <div className="mt-4">
              <p className="text-sm font-medium text-gray-700 mb-1">Preview:</p>
              <img
                src={avatar}
                alt="Avatar Preview"
                className="w-24 h-24 object-cover rounded-full border border-gray-300"
              />
            </div>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 mt-6"
        >
          Signup
        </button>
      </form>
    </div>
  );
}

export default Register;
