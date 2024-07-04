import {NavLink} from 'react-router-dom'
export default function Footer() {
    const menuItems = [
        { name: 'Home', path: '*' },
        {name: "Products", path: '/products'},
        { name: 'Cart', path: '/cart' },
        { name: 'About', path: '/about' },
        
    ];
    return (
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
              <h2 className="text-xl font-bold mb-2">PhoneSmart</h2>
              <p className="text-gray-400">
                Leading the way in cutting-edge smartphone technology.
              </p>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
              <h2 className="text-xl font-bold mb-2">Quick Links</h2>
              <ul className="flex flex-col p-4">
                        {menuItems.map((item) => (
                            <li key={item.path}>
                                <NavLink
                                    to={item.path}
                                    className={`hover:text-gray-300 ${location.pathname === item.path ? 'one underline font-bold text-red-600 text-xl ' : ''}`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </NavLink>
                            </li>
                        ))}
                </ul>

            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
              <h2 className="text-xl font-bold mb-2">Contact Us</h2>
              <p className="text-gray-400">
                1234 Kimende Lari,<br />
                Kiambu, Kenya<br />
                Phone: (+254)7 23 456-7890<br />
                Email: info@phonesmart.com
              </p>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
              <h2 className="text-xl font-bold mb-2">Follow Us</h2>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-twitter"></i></a>
                <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-instagram"></i></a>
                <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>
          <div className="text-center mt-6 border-t border-gray-700 pt-4">
            <p className="text-gray-400">&copy; {new Date().getFullYear()} PhoneSmart. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }
  