import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { FaTimes } from 'react-icons/fa';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useCart } from 'react-use-cart';
import { NavLink } from 'react-router-dom';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const { totalUniqueItems, inCart, addItem } = useCart();

  const allProducts = [
    {
      id: 1,
      brand: 'apple',
      name: 'iPhone 14 Pro Max',
      image1: 'https://www.fkaysmartphone.com/web/image/product.template/6047/image_1920?unique=74735af',
      image2: 'https://www.digitaltrends.com/wp-content/uploads/2022/09/iPhone-14-Pro-Back-Purple-Hand.jpg?p=1',
      image3: 'https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/Apple_iphone_14_Pro_iPhone_14_Pro_Max_concept_renderings_drdNBC.jpg',
      price: 1140,
      description: 'The iPhone 14 Pro Max delivers a powerful A16 Bionic chip, a stunning Super Retina XDR display, and a groundbreaking 48MP camera system.',
      specifications: {
        battery: 5000,
        camera: '108mp',
        display: '6.5-inch Super Retina XDR display',
        storage: {
          rom: "8gb",
          ram: "256gb"
        }
      }
    },
    
    {
      id: 2,
      brand: 'samsung',
      name: 'Galaxy S23 Ultra',
      image1: 'https://i.ytimg.com/vi/RkivRN8NuMY/sddefault.jpg',
      image2: 'https://www.gizchina.com/wp-content/uploads/images/2023/06/Galaxy-S23-Ultra-Promo.jpg',
      image3: 'https://www.zdnet.com/a/img/resize/d8987160c06d8045db550c095c7f6a501a487c84/2023/01/30/d37c456f-55f8-4986-a2e8-8da1eb8b4b9d/galaxys23-ultra-4colors.jpg?auto=webp&width=1280',
      price: 1080,
      description: 'The Galaxy S23 Ultra boasts an impressive camera system, a long-lasting battery, and a sleek S Pen integration.',
      specifications: {
        battery: 5000,
        camera: '108mp',
        display: '6.5-inch Super Retina XDR display',
        storage: {
          rom: "8gb",
          ram: "256gb"
        }
      }
    },
    {
        id: 3,
        brand: 'apple',
        name: 'iPhone 13 pro',
        image1: 'https://i.ebayimg.com/images/g/V7EAAOSwbhFjLLxB/s-l400.jpg',
        image2: 'https://cdn.mos.cms.futurecdn.net/BHiwWkpNWGCUmuA5g66Dgi.jpg',
        image3: 'https://i.insider.com/618c1c0c596d9b00111856a9?width=700',
        price: 1500,
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur vitae explicabo distinctio nam quod, earum repellendus nobis quae veritatis dolore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, earum?',
        specifications: {
            battery: 5000,
            camera: '108mp',
            display: '6.5-inch Super Retina XDR display',
            storage: {
              rom: '8gb',
              ram: '256gb'
            }
        } 
    },
    {
        id: 4,
        brand: 'apple',
        name: 'iPhone 14',
        image1: 'https://i0.wp.com/cdnssl.ubergizmo.com/wp-content/uploads/2022/09/iphone-14-review-06.jpg',
        image2: 'https://www.apple.com/newsroom/images/product/iphone/geo/Apple-iPhone-14-iPhone-14-Plus-hero-220907-geo.jpg.news_app_ed.jpg',
        image3: 'https://www.apple.com/newsroom/images/product/iphone/geo/Apple-iPhone-14-iPhone-14-Plus-2up-purple-220907-geo_inline.jpg.large.jpg',
        price: 800,
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur vitae explicabo distinctio nam quod, earum repellendus nobis quae veritatis dolore! Lorem ipsum dolor sit amet consectetur',
        specifications: {
            battery: 5000,
            camera: '108mp',
            display: '6.5-inch Super Retina XDR display',
            storage: {
              rom: '8gb',
              ram: '256gb'
            }
        } 
    },
    {
        id: 5,
        brand: 'oppo',
        name: 'Oppo N3 fold',
        image1: 'https://geekculture.co/wp-content/uploads/2023/10/geek-review-oppo-find-n3-19.jpg',
        image2: 'https://www.gizchina.com/wp-content/uploads/images/2023/10/oppo-find-n3-11.jpg',
        image3: 'https://cworld.id/wp-content/uploads/2023/11/d29d8a8d-5027-4f71-8afe-cb56a30c7f9a.jpg',
        price: 987,
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur vitae explicabo distinctio nam quod, earum repellendus nobis quae veritatis dolore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, earum?',
        specifications: {
            battery: 5000,
            camera: '108mp',
            display: '6.5-inch Super Retina XDR display',
            storage: {
              rom: '8gb',
              ram: '256gb'
            }
        } 
    },
    {
        id: 6,
        brand: 'samsung',
        name: 'SamSung s20 ultra',
        image1: 'https://i.ytimg.com/vi/ikYrKYfHpzA/maxresdefault.jpg',
        image2: 'https://i.insider.com/5e5d4f12fee23d426f1c4a45?width=1400&format=jpeg&auto=webp',
        image3: 'https://m.media-amazon.com/images/I/71rNaLeEL9L._AC_UF1000,1000_QL80_.jpg',
        price: 1540,
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur vitae explicabo distinctio nam quod, earum repellendus nobis quae veritatis dolore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, earum?',
        specifications: {
            battery: 5000,
            camera: '108mp',
            display: '6.5-inch Super Retina XDR display',
            storage: {
              rom: '8gb',
              ram: '256gb'
            }
        } 
    },
    {
        id: 7,
        brand: 'oppo',
        name: 'Oppo Reno 11 pro 5g',
        image1: 'https://smarttechphones.co.ke/wp-content/uploads/2024/01/Oppo-Reno-11-Pro-5G.jpg',
        image2: 'https://i.ytimg.com/vi/S0aOsLOjmNY/maxresdefault.jpg',
        image3: 'https://cdn.zeebiz.com/sites/default/files/2024/01/24/277541-opporeno11pro5greview.jpg',
        price: 650,
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur vitae explicabo distinctio nam quod, earum repellendus nobis quae veritatis dolore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, earum?',
        specifications: {
            battery: 5000,
            camera: '108mp',
            display: '6.5-inch Super Retina XDR display',
            storage: {
              rom: '8gb',
              ram: '256gb'
            }
        } 
    },
    {
        id: 8,
        brand: 'tecno',
        name: 'Tecno Camon 30 premier',
        image1: 'https://www.gizchina.com/wp-content/uploads/images/2024/05/IMG_8867-700x394.jpg?mrf-size=m',
        image2: 'https://www.digitaltrends.com/wp-content/uploads/2024/04/tecno-camon-30-premier-back-hand.jpg?fit=3000%2C2000&p=1',
        image3: 'https://www.gadgetpilipinas.net/wp-content/uploads/2024/02/TECNO-Camon-30-Premier-5G-MWC-2024-2.jpg',
        price: 450,
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur vitae explicabo distinctio nam quod, earum repellendus nobis quae veritatis dolore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, earum?',
        specifications: {
            battery: 5000,
            camera: '108mp',
            display: '6.5-inch Super Retina XDR display',
            storage: {
              rom: '8gb',
              ram: '256gb'
            }
        } 
    },
    {
        id: 9,
        brand: 'tecno',
        name: 'Tecno Phantom X2',
        image1: 'https://www.alphamobitech.co.ke/web/image/product.template/13421/image_1024?unique=58f5b07',
        image2: 'https://www.gizchina.com/wp-content/uploads/images/2023/01/Tecno-Phantom-X2-Pro-Back-in-Hand-scaled.webp',
        image3: 'https://i0.wp.com/techtrendske.co.ke/wp-content/uploads/2023/02/TECNO-Phatom-X2-Review.png?fit=1000%2C634&ssl=1',
        price: 560,
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur vitae explicabo distinctio nam quod, earum repellendus nobis quae veritatis dolore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, earum?',
        specifications: {
            battery: 5000,
            camera: '108mp',
            display: '6.5-inch Super Retina XDR display',
            storage: {
              rom: '8gb',
              ram: '256gb'
            }
        } 
    },
    {
        id: 10,
        brand: 'tecno',
        name: 'Tecno Spark 20 pro plus',
        image1: 'https://i.ytimg.com/vi/mCMisrj_2bc/maxresdefault.jpg',
        image2: 'https://angkormeas.com/wp-content/uploads/2024/03/spark-20-pro-plus.jpg',
        image3: 'https://static.reach-tele.com/uploads/thumbs/f1/f140736e379c6c327a5a2ad69437b61e.jpg',
        price: 198,
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur vitae explicabo distinctio nam quod, earum repellendus nobis quae veritatis dolore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, earum?',
        specifications: {
            battery: 5000,
            camera: '108mp',
            display: '6.5-inch Super Retina XDR display',
            storage: {
              rom: '8gb',
              ram: '256gb'
            }
        } 
    },
    {
        id: 11,
        brand: 'oppo',
        name: 'Oppo F21 pro',
        image1: 'https://m.media-amazon.com/images/I/81PZQzTmZjL._AC_UF1000,1000_QL80_.jpg',
        image2: 'https://akm-img-a-in.tosshub.com/indiatoday/images/bodyeditor/202205/Oppo_F21_Pro_review-1200x900.jpg?lP0QF3TZNE1pS4gp4HDStDLDdShTYHlS',
        image3: 'https://images.fonearena.com/blog/wp-content/uploads/2022/04/OPPO-F21-Pro-5G_FoneArena-2.jpg',
        price: 215,
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur vitae explicabo distinctio nam quod, earum repellendus nobis quae veritatis dolore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, earum?',
        specifications: {
            battery: 5000,
            camera: '108mp',
            display: '6.5-inch Super Retina XDR display',
            storage: {
              rom: '8gb',
              ram: '256gb'
            }
        } 
    },
    {
        id: 12,
        brand: 'oppo',
        name: 'Oppo Xr',
        image1: 'https://images.tokopedia.net/img/cache/700/VqbcmM/2021/8/18/2af8236b-52c9-4a0d-87ad-b32985ebce01.jpg',
        image2: 'https://media.karousell.com/media/photos/products/2023/10/15/iphone_xr_64gb_1697392403_b74e049e_progressive.jpg',
        image3: 'https://images.tokopedia.net/img/cache/700/VqbcmM/2023/8/24/b353613c-ef12-4009-b321-e2b0af206c42.jpg',
        price: 415,
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur vitae explicabo distinctio nam quod, earum repellendus nobis quae veritatis dolore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, earum?',
        specifications: {
            battery: 5000,
            camera: '108mp',
            display: '6.5-inch Super Retina XDR display',
            storage: {
              rom: '8gb',
              ram: '256gb'
            }
        } 
    },
    {
        id: 13,
        brand: 'samsung',
        name: 'SamSung A72',
        image1: 'https://i0.wp.com/www.bovic.co.ke/wp-content/uploads/2021/03/maxresdefault.jpg?fit=1280%2C720&ssl=1',
        image2: 'https://gadgetsandmoreinc.com/wp-content/uploads/2021/05/samsung_galaxy_a72_colours_press_image_thumb800-1.jpg',
        image3: 'https://images.tokopedia.net/img/cache/500-square/VqbcmM/2021/7/5/65d1859b-2c64-45c7-8610-b6a12f5ee490.jpg',
        price: 680,
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur vitae explicabo distinctio nam quod, earum repellendus nobis quae veritatis dolore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, earum?',
        specifications: {
            battery: 5000,
            camera: '108mp',
            display: '6.5-inch Super Retina XDR display',
            storage: {
              rom: '8gb',
              ram: '256gb'
            }
        } 
    },
    {
        id: 14,
        brand: 'samsung',
        name: 'SamSung S10+',
        image1: 'https://images.samsung.com/uk/smartphones/galaxy-s10/images/galaxy-s10-share-image.jpg',
        image2: 'https://img.phonandroid.com/2023/04/samsung-galaxyS10-finsuivi.jpg',
        image3: 'https://media.karousell.com/media/photos/products/2019/09/29/samsung_s10_plus_8128_resmi_sein_fullset_mulus_1569724792_4c395578_progressive.jpg',
        price: 600,
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur vitae explicabo distinctio nam quod, earum repellendus nobis quae veritatis dolore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, earum?',
        specifications: {
            battery: 5000,
            camera: '108mp',
            display: '6.5-inch Super Retina XDR display',
            storage: {
              rom: '8gb',
              ram: '256gb'
            }
        } 
    },
    {
        id: 15,
        brand: 'tecno',
        name: 'Tecno Phantom X',
        image1: 'https://smarttechphones.co.ke/wp-content/uploads/2023/01/Tecno-Phantom-X-price-in-Kenya.jpg',
        image2: 'https://fdn.gsmarena.com/imgroot/reviews/21/tecno-phantom-x/lifestyle/-1200w5/gsmarena_017.jpg',
        image3: 'https://technave.com/data/files/article/202205070844179535.jpeg',
        price: 415,
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur vitae explicabo distinctio nam quod, earum repellendus nobis quae veritatis dolore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, earum?',
        specifications: {
            battery: 5000,
            camera: '108mp',
            display: '6.5-inch Super Retina XDR display',
            storage: {
              rom: '8gb',
              ram: '256gb'
            }
        } 
    },
    
    
    // ... more products
  ];

  useEffect(() => {
    setProducts(selectedBrand === 'all' ? allProducts : allProducts.filter(product => product.brand === selectedBrand));
  }, [selectedBrand]);

  const handleBrandChange = (event) => {
    setSelectedBrand(event.target.value);
  };

  const handleCheckoutClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCancelClick = () => {
    setSelectedProduct(null);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-slate-900 text-white">
      <header className="flex flex-col sm:flex-row justify-between items-center mb-8 p-4 sm:p-0">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-0">Phone Smart</h1>
        <div className="flex flex-col sm:flex-row items-center w-full sm:w-auto">
          <select
            id="brand-select"
            className="mb-4 sm:mb-0 sm:mr-4 px-4 py-2 rounded-md border border-gray-700 bg-slate-800 text-gray-300 focus:outline-none focus:ring focus:ring-white w-full sm:w-auto"
            value={selectedBrand}
            onChange={handleBrandChange}
          >
            <option value="all">All Brands</option>
            <option value="apple">Apple</option>
            <option value="samsung">Samsung</option>
            <option value="oppo">Oppo</option>
            <option value="tecno">Tecno</option>
          </select>
          <NavLink to='/cart'>
            <button type="button" className="px-4 py-2 rounded-md bg-emerald-500 text-white hover:bg-emerald-600 focus:outline-none focus:ring focus:ring-white w-full sm:w-auto">
              Cart ({totalUniqueItems})
            </button>
          </NavLink>
        </div>
      </header>

      <section id="products" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-slate-800 rounded-md shadow-md p-4 cursor-pointer hover:bg-slate-700"
          >
            <img className="w-full h-48 object-cover rounded-t-md" src={product.image1} alt={product.name} />
            <div className="mt-4">
              <h3 className="text-xl font-bold">{product.name}</h3>
              <p className="text-gray-400">${product.price}</p>
              <button 
                className="mt-2 px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring focus:ring-white"
                onClick={() => handleCheckoutClick(product)}
                disabled={inCart(product.id)}
              >
                {inCart(product.id) ? "Check in Cart" : "Checkout"}
              </button>
            </div>
          </div>
        ))}
      </section>

      {selectedProduct && (
        <div>
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
            <div className="bg-white text-black p-6 rounded-lg shadow-lg relative max-w-lg mx-auto w-full sm:w-3/4 md:w-1/2 lg:w-1/3">
              <button 
                className="absolute top-4 right-2 text-gray-500 hover:text-gray-800"
                onClick={handleCancelClick}
              >
                <FaTimes size={24} />
              </button>
              <Slider {...settings}>
                <div>
                  <img src={selectedProduct.image1} alt={selectedProduct.name} className="w-full h-64 rounded-md object-scale-down" />
                </div>
                {selectedProduct.image2 && (
                  <div>
                    <img src={selectedProduct.image2} alt={selectedProduct.name} className="w-full h-64 rounded-md object-scale-down" />
                  </div>
                )}
                {selectedProduct.image3 && (
                  <div>
                    <img src={selectedProduct.image3} alt={selectedProduct.name} className="w-full h-64 rounded-md object-scale-down" />
                  </div>
                )}
              </Slider>

              <h2 className="text-2xl font-bold mt-4">{selectedProduct.name}</h2>
              <p className="text-lg mt-2">${selectedProduct.price}</p>
              <p className="mt-4">{selectedProduct.description}</p>

              <ul className="mt-4 list-disc list-inside">
                <li>Battery: {selectedProduct.specifications.battery}mAh</li>
                <li>Camera: {selectedProduct.specifications.camera}</li>
                <li>Display: {selectedProduct.specifications.display}</li>
                <li>Storage: {selectedProduct.specifications.storage.rom} ROM / {selectedProduct.specifications.storage.ram} RAM</li>
              </ul>

              <button 
                className="mt-6 px-6 py-3 rounded-md bg-emerald-500 text-white hover:bg-emerald-600 focus:outline-none focus:ring focus:ring-white"
                onClick={() => addItem(selectedProduct)}
                disabled={inCart(selectedProduct.id)}
              >
                {inCart(selectedProduct.id) ? "In Cart" : "Add to Cart"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
