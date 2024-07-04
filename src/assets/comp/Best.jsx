import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Best() {
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
              slidesToScroll: 1
            }
          }
        ]
      };
  const [selectedItem, setSelectedItem] = useState(null);

  const bestSellers = [
    {
      name: "SamSung Fold",
      img: "https://m.media-amazon.com/images/I/612E5zfpLGL.jpg",
      price: 114000,
      id: 1,
      description: "The Samsung Z Flip 5 is a sleek, innovative foldable smartphone featuring a compact design and a stunning 6.7-inch Dynamic AMOLED display. It offers seamless multitasking, a powerful Snapdragon 8 Gen 2 processor, advanced camera capabilities, and enhanced durability, making it perfect for those seeking cutting-edge technology in a stylish form."
    },
    {
        name:"iPhone 15 pro max",
        img:"https://cdn.mos.cms.futurecdn.net/b7HJX9i4gGiecMMxbAdFBU-1200-80.jpg",
        price:199999,
        id: 2,
        description:"The iPhone 15 Pro Max features a stunning 6.7-inch Super Retina XDR display, advanced A17 Bionic chip, and a triple-camera system with improved low-light performance. It boasts a sleek design, longer battery life, 5G capabilities, and enhanced durability with Ceramic Shield. Ideal for photography, gaming, and multitasking."
    },
    {
        name:"Tecno Camon 30",
        img:"https://www.geeky-gadgets.com/wp-content/uploads/2024/04/Tecno-Camon-30-Premier-2.webp",
        price:29000,
        id:3,
        description:"The Tecno Camon 30 combines sleek design with powerful performance, featuring a vibrant 6.8-inch display and a high-resolution quad-camera system designed for stunning photography and videography. With a robust processor and ample storage, it offers a seamless experience for capturing, viewing, and sharing your memorable moments."
    },
    {
        name:"Samsung A14",
        img:"https://grandhub.co.ke/wp-content/uploads/2023/09/Samsung-Galaxy-A14-Mobile-Phone-in-Nairobi.jpeg",
        price:27800,
        id: 4,
        description:"The Samsung A14 offers a sleek design and robust performance, featuring a vibrant 6.5-inch display and a powerful octa-core processor. With a versatile quad-camera setup and long-lasting battery, it delivers seamless multitasking and immersive entertainment, making it an ideal choice for everyday use."
    },
    {
        name:"Redmi 13c",
        img:"https://down-br.img.susercontent.com/file/br-11134207-7r98o-lologriwug246c",
        price:25000,
        id: 45,
        description:"The Redmi Note 13 C blends high performance with affordability, featuring a vibrant 6.5-inch display and a powerful Snapdragon processor. With a sleek design and impressive camera capabilities, it's tailored for multitasking and capturing moments on the go, delivering a seamless user experience at an accessible price point."
    },
    
  ];


  return (
    <div className="p-4 bg-black bg-opacity-70 min-h-screen">
      <h1 className="text-3xl font-bold mb-4 text-white text-center">Best Sellers</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {bestSellers.map((item) => (
          <div key={item.id} className="border rounded-lg overflow-hidden shadow-lg p-4 bg-black bg-opacity-50 ">
            <section>
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-44 hover:object-contain object-cover "
              />
            </section>
            <section className="mt-2">
              <p className="font-bold text-lg text-white">{item.name}</p>
              <p className="text-gray-400">{item.price} KES</p>
            </section>
            <button
              onClick={() => setSelectedItem(item)}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Checkout
            </button>
          </div>
        ))}
      </div>

      {selectedItem && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-gray-950 p-6 rounded-lg shadow-lg max-w-lg w-full relative text-white">
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
            >
              <AiOutlineClose size={24} />
            </button>
            <section>
              <img src={selectedItem.img} alt={selectedItem.name} className="w-full h-48 hover:object-contain object-cover mb-4" />
            </section>
            <section>
              <p className="font-bold text-2xl mb-2">{selectedItem.name}</p>
              <p className="text-gray-300 mb-4">{selectedItem.description}</p>
              <p className="text-gray-400 mb-4">{selectedItem.price} KES</p>
            </section>
            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
              Add to Cart
            </button>
          </div>
        </div>
      )}
      
    </div>
  );
}

