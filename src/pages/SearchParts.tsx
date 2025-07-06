
import React, { useState } from 'react';
import { Search, ShoppingCart, Filter, Star } from 'lucide-react';

const SearchParts = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const parts = [
    {
      id: 'cpu1',
      name: 'Intel Core i5-12400F',
      category: 'CPU',
      price: 15000,
      brand: 'Intel',
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=200&h=200&fit=crop',
      specs: ['6 Cores, 12 Threads', '2.5GHz Base, 4.4GHz Boost', 'LGA1700 Socket']
    },
    {
      id: 'gpu1',
      name: 'NVIDIA RTX 4060',
      category: 'GPU',
      price: 35000,
      brand: 'NVIDIA',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=200&h=200&fit=crop',
      specs: ['8GB GDDR6', '2460MHz Boost Clock', 'Ray Tracing Support']
    },
    {
      id: 'ram1',
      name: '16GB DDR4 3200MHz',
      category: 'RAM',
      price: 5000,
      brand: 'Corsair',
      rating: 4.3,
      image: 'https://images.unsplash.com/photo-1562976540-1502c2145186?w=200&h=200&fit=crop',
      specs: ['16GB (2x8GB)', 'DDR4-3200', 'CL16 Latency']
    },
    {
      id: 'ssd1',
      name: '1TB NVMe SSD',
      category: 'Storage',
      price: 7500,
      brand: 'Samsung',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=200&h=200&fit=crop',
      specs: ['1TB Capacity', 'NVMe 1.3', '3500MB/s Read Speed']
    },
    {
      id: 'mb1',
      name: 'ASUS B550M-K',
      category: 'Motherboard',
      price: 8000,
      brand: 'ASUS',
      rating: 4.2,
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=200&h=200&fit=crop',
      specs: ['AM4 Socket', 'Micro-ATX', 'DDR4 Support']
    },
    {
      id: 'psu1',
      name: '650W 80+ Gold PSU',
      category: 'PSU',
      price: 6000,
      brand: 'Corsair',
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=200&h=200&fit=crop',
      specs: ['650W Output', '80+ Gold Certified', 'Modular Cables']
    }
  ];

  const categories = ['all', 'CPU', 'GPU', 'RAM', 'Storage', 'Motherboard', 'PSU', 'Case'];

  const filteredParts = parts.filter(part => {
    const matchesCategory = selectedCategory === 'all' || part.category === selectedCategory;
    const matchesSearch = part.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         part.brand.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleAddToCart = (part: any) => {
    console.log('Adding to cart:', part);
    alert(`${part.name} added to cart!`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Search PC Components</h1>
          <p className="text-gray-600">Find the perfect parts for your custom build</p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search components..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-gray-500" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredParts.map(part => (
            <div key={part.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src={part.image}
                alt={part.name}
                className="w-full h-48 object-cover"
              />
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded">
                    {part.category}
                  </span>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm text-gray-600">{part.rating}</span>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{part.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{part.brand}</p>
                
                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-2">Key Features:</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    {part.specs.map((spec, index) => (
                      <li key={index}>• {spec}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-green-600">
                    ₹{part.price.toLocaleString()}
                  </span>
                  <button
                    onClick={() => handleAddToCart(part)}
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

        {filteredParts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No components found matching your criteria.</p>
            <p className="text-gray-400">Try adjusting your search or filter settings.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchParts;
