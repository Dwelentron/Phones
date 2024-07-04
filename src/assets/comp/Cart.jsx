import React from 'react';
import { useCart } from 'react-use-cart';

const Cart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  if (isEmpty) return <p className="text-center text-gray-400">Your cart is empty</p>;

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold text-white mb-4">Shopping Cart</h2>
      <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold text-gray-200 mb-2">
          Cart ({totalUniqueItems}) Total Items: ({totalItems})
        </h3>
        <ul>
          {items.map((item) => (
            <li key={item.id} className="flex justify-between items-center mb-4 p-2 bg-gray-900 rounded-lg">
              <div className="flex items-center">
                <img src={item.image2} alt={item.name} className="w-16 h-16 object-cover mr-4 rounded" />
                <div>
                  <h4 className="text-lg text-white">{item.name}</h4>
                  <p className="text-sm text-gray-400">SubTotal: ${item.price * item.quantity}</p>
                  <div className="flex items-center mt-2">
                    <button
                      onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                      className="px-2 py-1 bg-red-600 text-white rounded-lg mr-2"
                    >
                      -
                    </button>
                    <span className="text-lg text-white">{item.quantity}</span>
                    <button
                      onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                      className="px-2 py-1 bg-green-600 text-white rounded-lg ml-2"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <button
                  onClick={() => removeItem(item.id)}
                  className="px-2 py-1 bg-gray-600 text-white rounded-lg"
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
        <div className="text-right text-white mt-4">
          <p className="text-lg font-semibold">Subtotal: ${cartTotal}</p>
          <button
            onClick={() => emptyCart()}
            className="mt-2 px-4 py-2 bg-red-700 text-white rounded-lg"
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
