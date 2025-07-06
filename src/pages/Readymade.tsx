import React, { useState } from 'react';
import { ShoppingCart, Filter, Monitor, Laptop } from 'lucide-react';

const Readymade = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const products = [
    {
      id: 'pc1',
      name: 'Gaming PC - Ryzen 5, 16GB RAM, RTX 4060',
      type: 'desktop',
      price: 75000,
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=300&h=300&fit=crop',
      specs: ['AMD Ryzen 5 5600X', '16GB DDR4 RAM', 'RTX 4060 8GB', '500GB NVMe SSD', '650W PSU']
    },
    {
      id: 'pc2',
      name: 'Office PC - Core i5, 8GB RAM, Integrated Graphics',
      type: 'desktop',
      price: 35000,
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&h=300&fit=crop',
      specs: ['Intel Core i5-12400', '8GB DDR4 RAM', 'Intel UHD Graphics', '256GB SSD', '450W PSU']
    },
    {
      id: 'laptop1',
      name: 'Gaming Laptop - Core i7, 16GB RAM, RTX 4050',
      type: 'laptop',
      price: 85000,
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=300&h=300&fit=crop',
      specs: ['Intel Core i7-12700H', '16GB DDR4 RAM', 'RTX 4050 4GB', '512GB SSD', '15.6" 144Hz Display']
    },
    {
      id: 'laptop2',
      name: 'Business Laptop - Core i5, 8GB RAM, Intel Graphics',
      type: 'laptop',
      price: 45000,
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=300&fit=crop',
      specs: ['Intel Core i5-1235U', '8GB DDR4 RAM', 'Intel Iris Xe', '256GB SSD', '14" Full HD Display']
    },
    {
      id: 'pc3',
      name: 'Workstation PC - Ryzen 9, 32GB RAM, RTX 4070',
      type: 'desktop',
      price: 125000,
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300&h=300&fit=crop',
      specs: ['AMD Ryzen 9 5900X', '32GB DDR4 RAM', 'RTX 4070 12GB', '1TB NVMe SSD', '750W PSU']
    },
    {
      id: 'laptop3',
      name: 'Ultrabook - Core i7, 16GB RAM, Intel Graphics',
      type: 'laptop',
      price: 65000,
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=300&h=300&fit=crop',
      specs: ['Intel Core i7-1255U', '16GB LPDDR4 RAM', 'Intel Iris Xe', '512GB SSD', '13.3" 2K Display']
    }
  ];

  const filteredProducts = products.filter(product => {
    if (selectedCategory === 'all') return true;
    return product.type === selectedCategory;
  });

  const handleAddToCart = (product: any) => {
    console.log('Adding to cart:', product);
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Ready-made PCs & Laptops</h1>
          <p className="text-gray-600">Choose from our collection of pre-built systems</p>
        </div>

        {/* Filter */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-8">
          <div className="flex items-center gap-4">
            <Filter className="h-5 w-5 text-gray-500" />
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-md flex items-center ${
                selectedCategory === 'all' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Products
            </button>
            <button
              onClick={() => setSelectedCategory('desktop')}
              className={`px-4 py-2 rounded-md flex items-center ${
                selectedCategory === 'desktop' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Monitor className="h-4 w-4 mr-2" />
              Desktop PCs
            </button>
            <button
              onClick={() => setSelectedCategory('laptop')}
              className={`px-4 py-2 rounded-md flex items-center ${
                selectedCategory === 'laptop' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Laptop className="h-4 w-4 mr-2" />
              Laptops
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                
                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-2">Specifications:</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    {product.specs.map((spec, index) => (
                      <li key={index}>• {spec}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-green-600">
                    ₹{product.price.toLocaleString()}
                  </span>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center"
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Readymade;
