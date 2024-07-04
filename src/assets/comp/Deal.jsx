import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

export default function Deal() {
    const [showOffer, setShowOffer] = useState(false);

    const deal = [
        {
            name: "iPhone 11 pro max",
            id: 5,
            descr: "The iPhone 11 Pro Max features a 6.5-inch Super Retina XDR display, triple-camera system for stunning photos and videos, A13 Bionic chip for exceptional performance, and long-lasting battery life. It combines sleek design with advanced technology, making it the ultimate smartphone for power users and photography enthusiasts.",
            price1: 115500,
            price2: 100000,
            image: 'https://i0.wp.com/www.mobiflip.de/wp-content/uploads/2019/09/apple-iphone-11-pro-box-header.jpg?fit=1200%2C798&ssl=1'
        }
    ];

    const handleCheckout = () => {
        setShowOffer(true);
    };

    const handleClose = () => {
        setShowOffer(false);
    };

    return (
        <div className="relative p-6 bg-black text-white">
            <div className="flex flex-col items-center">
                <h2 className="text-2xl font-bold mb-4">Special Offer</h2>
                <div className="flex flex-col md:flex-row bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                    <img src={deal[0].image} alt={deal[0].name} className="w-full md:w-1/3 object-cover" />
                    <div className="p-4 flex flex-col justify-between">
                        <h3 className="text-xl font-semibold">{deal[0].name}</h3>
                        <div className="mt-2">
                            <span className="line-through text-gray-400 mr-2">Ksh {deal[0].price1}</span>
                            <span className="text-green-500 font-bold">Ksh {deal[0].price2}</span>
                        </div>
                        <button
                            onClick={handleCheckout}
                            className="mt-4 px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-bold rounded"
                        >
                            Checkout
                        </button>
                    </div>
                </div>
            </div>

            {showOffer && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
                    <div className="bg-white text-black p-6 rounded-lg shadow-lg relative max-w-lg mx-auto">
                        <button onClick={handleClose} className="absolute top-4 right-4 text-black">
                            <FaTimes />
                        </button>
                        <h2 className="text-2xl font-bold mb-4">{deal[0].name}</h2>
                        <img src={deal[0].image} alt={deal[0].name} className="w-full h-64 object-cover mb-4" />
                        <p>{deal[0].descr}</p>
                        <button className="mt-4 px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-bold rounded">
                            Add to Cart
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
