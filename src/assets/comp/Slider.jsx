import React from "react";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function User() {
  const users = [
    {
      name: "James Heathen",
      img: "https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=1868",
      review: "Welcome to ShopSmart, your ultimate guide to the world of smartphones! Whether you're a tech enthusiast or just looking for the perfect phone to suit your needs, we've got you covered.",
      rating: 4.5
    },
    {
      name: "Lucy Bancovers",
      img: "https://dwpdigital.blog.gov.uk/wp-content/uploads/sites/197/2016/07/P1090594-1.jpeg",
      review: "Welcome to ShopSmart, your ultimate guide to the world of smartphones! Whether you're a tech enthusiast or just looking for the perfect phone to suit your needs, we've got you covered.",
      rating: 4.0
    },
    {
      name: "Joely Esther",
      img: "https://i.dailymail.co.uk/i/pix/2016/05/23/22/348B850600000578-3605456-image-m-32_1464040491071.jpg",
      review: "Welcome to ShopSmart, your ultimate guide to the world of smartphones! Whether you're a tech enthusiast or just looking for the perfect phone to suit your needs, we've got you covered.",
      rating: 3.5
    },
    {
      name: "Ann Yolivva",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
      review: "Welcome to ShopSmart, your ultimate guide to the world of smartphones! Whether you're a tech enthusiast or just looking for the perfect phone to suit your needs, we've got you covered.",
      rating: 5.0
    },
    {
        name: "Maria Cecil",
        img: "https://img.freepik.com/free-photo/selfie-portrait-videocall_23-2149186124.jpg",
        review: "Welcome to ShopSmart, your ultimate guide to the world of smartphones! Whether you're a tech enthusiast or just looking for the perfect phone to suit your needs, we've got you covered.",
        rating: 4.5
      },
      {
        name: "Mohammed Yusuf",
        img: "https://www.citrix.com/blogs/wp-content/uploads/2018/03/slack_compressed-e1521621363404-360x360.jpg",
        review: "Welcome to ShopSmart, your ultimate guide to the world of smartphones! Whether you're a tech enthusiast or just looking for the perfect phone to suit your needs, we've got you covered.",
        rating: 4.0
      },
      {
        name: "Edos Waldgo",
        img: "https://edoswaldgo.com/assets/images/bio-photo.jpg",
        review: "Welcome to ShopSmart, your ultimate guide to the world of smartphones! Whether you're a tech enthusiast or just looking for the perfect phone to suit your needs, we've got you covered.",
        rating: 3.5
      },
      {
        name: "Brian Joseph",
        img: "https://htmlstream.com/preview/unify-v2.6/assets/img-temp/400x450/img5.jpg",
        review: "Welcome to ShopSmart, your ultimate guide to the world of smartphones! Whether you're a tech enthusiast or just looking for the perfect phone to suit your needs, we've got you covered.",
        rating: 5.0
      }
  ];

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < Math.floor(rating)) {
        stars.push(<FaStar key={i} className="text-yellow-500" />);
      } else if (i < rating) {
        stars.push(<FaStar key={i} className="text-yellow-500 opacity-50" />);
      } else {
        stars.push(<FaStar key={i} className="text-gray-300" />);
      }
    }
    return stars;
  };

  return (
    <section className="bg-black bg-opacity-10 py-8 px-4 sm:px-8">
      <p className="text-gray-700 text-center text-2xl font-semibold mb-6">User Reviews</p>
      <Slider {...settings}>
        {users.map((item, index) => (
          <div key={index} className="bg-black bg-opacity-50 rounded-lg p-6 shadow-lg mx-2">
            <section className="flex justify-center mb-4">
              <img
                src={item.img}
                alt=""
                className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover border-4 border-gray-200"
              />
            </section>
            <section className="text-center space-y-2">
              <p className="text-lg font-medium text-gray-300">{item.name}</p>
              <p className="text-gray-400">{item.review}</p>
              <div className="flex justify-center items-center space-x-1">
                {renderStars(item.rating)}
                <span className="text-gray-800 ml-2">{item.rating}</span>
              </div>
            </section>
          </div>
        ))}
      </Slider>
    </section>
  );
}
