import StarRatings from "react-star-ratings";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Rate() {
  const { id } = useParams();

  const [rating, setRating] = useState(0);
  const [totalVotes, setTotalVotes] = useState(0);

  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    axios
      .get(`http://localhost/laravel8/public/api/blog/rate/${id}`)
      .then((res) => {
        const rates = res.data.data;
        if (rates.length > 0) {
          // item là từng object trong mảng rates
          // 0 là giá trị khởi tạo ban đầu cho biến total
          const total = rates.reduce((sum, item) => sum + item.rate, 0);
          const avg = total / rates.length;
          setRating(avg);
          setTotalVotes(rates.length);
        } else {
          setRating(0);
          setTotalVotes(0);
        }
      })
      .catch((err) => console.log(err));
  }, [id]);

  function changeRating(newRating) {
    setRating(newRating);
    // - xu ly logic
    if (!token) {
      alert("Vui lòng đăng nhập để đánh giá.");
      return;
    }
    // - xu ly api
    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };

    let data = {
      user_id: user.id,
      blog_id: id,
      rate: newRating,
    };

    axios
      .post(
        `http://localhost/laravel8/public/api/blog/rate/${id}`,
        data,
        config
      )
      .then((res) => {
        console.log(res.data);
        alert("Cảm ơn bạn đã đánh giá!");
      })
      .catch((err) => {
        console.log(err);
        alert("Lỗi khi gửi đánh giá. Vui lòng thử lại sau.");
      });
  }

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mt-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
        <div className="flex items-center space-x-4 mb-4 sm:mb-0">
          <span className="text-gray-700 font-medium">Rate this item:</span>
          <div className="flex items-center">
            <StarRatings
              rating={rating}
              starRatedColor="blue"
              changeRating={changeRating}
              numberOfStars={5}
              name="rating"
              starDimension="24px"
              starSpacing="2px"
            />
          </div>
          <span className="text-orange-500 text-sm ml-2">
            ({totalVotes} votes)
          </span>
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
