import React, { useState, useCallback } from 'react';
import PCBuilderScene from '../components/PCBuilderScene';
import BuilderUI from '../components/BuilderUI';
import BuildSummary from '../components/BuildSummary';
import { Settings, Zap, Shield, Thermometer } from 'lucide-react';

const BuildPC = () => {
  console.log('BuildPC component rendering...');

  const [selectedParts, setSelectedParts] = useState({
    cpu: null,
    motherboard: null,
    ram: null,
    storage: null,
    gpu: null,
    psu: null,
    case: null,
    cooling: null,
    monitor: null,
    keyboard: null,
    mouse: null
  });

  const [buildPreferences, setBuildPreferences] = useState({
    purpose: 'gaming',
    budget: 'medium',
    performance: 'balanced',
    compatibility: true
  });

  const partOptions = {
    cpu: [
      { id: 'cpu1', name: 'Intel Core i5-12400F', price: 15000, brand: 'Intel', socket: 'LGA1700', cores: 6, threads: 12, image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=100&h=100&fit=crop' },
      { id: 'cpu2', name: 'AMD Ryzen 5 5600X', price: 18000, brand: 'AMD', socket: 'AM4', cores: 6, threads: 12, image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=100&h=100&fit=crop' },
    ],
    motherboard: [
      { id: 'mb1', name: 'ASUS B550M-K', price: 8000, brand: 'ASUS', socket: 'AM4', formFactor: 'mATX', image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=100&h=100&fit=crop' },
      { id: 'mb2', name: 'MSI B450M PRO-VDH MAX', price: 6500, brand: 'MSI', socket: 'AM4', formFactor: 'mATX', image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=100&h=100&fit=crop' },
    ],
    ram: [
      { id: 'ram1', name: '16GB DDR4 3200MHz', price: 5000, brand: 'Corsair', capacity: '16GB', speed: '3200MHz', type: 'DDR4', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=100&h=100&fit=crop' },
      { id: 'ram2', name: '32GB DDR4 3600MHz', price: 12000, brand: 'G.Skill', capacity: '32GB', speed: '3600MHz', type: 'DDR4', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=100&h=100&fit=crop' },
    ],
    storage: [
      { id: 'ssd1', name: '500GB NVMe SSD', price: 4000, brand: 'Samsung', capacity: '500GB', type: 'NVMe SSD', speed: '3500MB/s', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=100&h=100&fit=crop' },
      { id: 'ssd2', name: '1TB NVMe SSD', price: 7500, brand: 'WD', capacity: '1TB', type: 'NVMe SSD', speed: '3500MB/s', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=100&h=100&fit=crop' },
    ],
    gpu: [
      { id: 'gpu1', name: 'RTX 4060', price: 35000, brand: 'NVIDIA', memory: '8GB GDDR6', performance: 'Mid-range', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=100&h=100&fit=crop' },
      { id: 'gpu2', name: 'RTX 4070', price: 55000, brand: 'NVIDIA', memory: '12GB GDDR6X', performance: 'High-end', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=100&h=100&fit=crop' },
    ],
    psu: [
      { id: 'psu1', name: '650W 80+ Gold', price: 6000, brand: 'Corsair', wattage: '650W', efficiency: '80+ Gold', modular: 'Semi-modular', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=100&h=100&fit=crop' },
      { id: 'psu2', name: '750W 80+ Bronze', price: 4500, brand: 'Cooler Master', wattage: '750W', efficiency: '80+ Bronze', modular: 'Non-modular', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=100&h=100&fit=crop' },
    ],
    case: [
      { id: 'case1', name: 'Mid Tower RGB', price: 4000, brand: 'Corsair', size: 'Mid Tower', rgb: true, image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=100&h=100&fit=crop' },
      { id: 'case2', name: 'Compact mATX', price: 2500, brand: 'Fractal Design', size: 'mATX', rgb: false, image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=100&h=100&fit=crop' },
    ],
    cooling: [
      { id: 'cool1', name: 'Air Cooler - Basic', price: 2000, brand: 'Cooler Master', type: 'Air', performance: 'Basic', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=100&h=100&fit=crop' },
      { id: 'cool2', name: 'AIO Liquid Cooler 240mm', price: 8000, brand: 'Corsair', type: 'Liquid', performance: 'High', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=100&h=100&fit=crop' },
    ],
    monitor: [
      { id: 'mon1', name: '24" 1080p 144Hz', price: 12000, brand: 'ASUS', size: '24"', resolution: '1080p', refreshRate: '144Hz', image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=100&h=100&fit=crop' },
      { id: 'mon2', name: '27" 1440p 165Hz', price: 25000, brand: 'LG', size: '27"', resolution: '1440p', refreshRate: '165Hz', image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=100&h=100&fit=crop' },
    ],
    keyboard: [
      { id: 'kb1', name: 'Mechanical RGB Keyboard', price: 4500, brand: 'Corsair', type: 'Mechanical', rgb: true, image: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=100&h=100&fit=crop' },
      { id: 'kb2', name: 'Wireless Gaming Keyboard', price: 8000, brand: 'Logitech', type: 'Wireless', rgb: true, image: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=100&h=100&fit=crop' },
    ],
    mouse: [
      { id: 'ms1', name: 'Gaming Mouse 12000 DPI', price: 3500, brand: 'Razer', dpi: '12000', type: 'Gaming', image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=100&h=100&fit=crop' },
      { id: 'ms2', name: 'Wireless Office Mouse', price: 1500, brand: 'Logitech', dpi: '1600', type: 'Office', image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=100&h=100&fit=crop' },
    ]
  };

  const handlePartSelect = useCallback((category: string, part: any) => {
    console.log('Part selected:', category, part);
    setSelectedParts(prev => ({
      ...prev,
      [category]: part
    }));
  }, []);

  const handlePreferenceChange = useCallback((key: string, value: string | boolean) => {
    setBuildPreferences(prev => ({
      ...prev,
      [key]: value
    }));
  }, []);

  const getCompatibilityWarnings = useCallback(() => {
    const warnings = [];
    
    if (selectedParts.cpu && selectedParts.motherboard) {
      if (selectedParts.cpu.socket !== selectedParts.motherboard.socket) {
        warnings.push('CPU and Motherboard socket mismatch!');
      }
    }
    
    return warnings;
  }, [selectedParts]);

  const handleAddToCart = useCallback(() => {
    const selectedPartsList = Object.entries(selectedParts)
      .filter(([_, part]) => part !== null)
      .map(([category, part]) => `${part.name} - ₹${part.price.toLocaleString()}`);
    
    const totalPrice = Object.values(selectedParts).reduce((total, part) => total + (part ? part.price : 0), 0);
    
    console.log('Adding custom PC build to cart:', {
      parts: selectedPartsList,
      totalPrice,
      preferences: buildPreferences
    });
    
    alert('Custom PC Build added to cart!\n\nComponents:\n' + selectedPartsList.join('\n') + `\n\nTotal: ₹${totalPrice.toLocaleString()}`);
  }, [selectedParts, buildPreferences]);

  const warnings = getCompatibilityWarnings();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Custom PC Builder</h1>
          <p className="text-gray-600">Build your dream PC with our interactive configurator</p>
        </div>

        {/* Build Preferences */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <Settings className="h-5 w-5 mr-2" />
            Build Preferences
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Purpose</label>
              <select
                value={buildPreferences.purpose}
                onChange={(e) => handlePreferenceChange('purpose', e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              >
                <option value="gaming">Gaming</option>
                <option value="office">Office Work</option>
                <option value="workstation">Workstation</option>
                <option value="content-creation">Content Creation</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Budget Range</label>
              <select
                value={buildPreferences.budget}
                onChange={(e) => handlePreferenceChange('budget', e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              >
                <option value="low">Budget (₹30K-50K)</option>
                <option value="medium">Mid-range (₹50K-1L)</option>
                <option value="high">High-end (₹1L-2L)</option>
                <option value="unlimited">Unlimited (₹2L+)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Priority</label>
              <select
                value={buildPreferences.performance}
                onChange={(e) => handlePreferenceChange('performance', e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              >
                <option value="performance">Max Performance</option>
                <option value="balanced">Balanced</option>
                <option value="quiet">Silent Operation</option>
                <option value="rgb">RGB/Aesthetics</option>
              </select>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="compatibility"
                checked={buildPreferences.compatibility}
                onChange={(e) => handlePreferenceChange('compatibility', e.target.checked)}
                className="mr-2"
              />
              <label htmlFor="compatibility" className="text-sm font-medium text-gray-700">
                Enable compatibility checks
              </label>
            </div>
          </div>
        </div>

        {/* Compatibility Warnings */}
        {warnings.length > 0 && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8">
            <div className="flex items-center">
              <Shield className="h-5 w-5 text-red-500 mr-2" />
              <h4 className="font-medium text-red-900">Compatibility Issues</h4>
            </div>
            <ul className="mt-2 text-sm text-red-800">
              {warnings.map((warning, index) => (
                <li key={index}>• {warning}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Component Selection Panel */}
          <div className="lg:col-span-1">
            <BuilderUI 
              partOptions={partOptions}
              selectedParts={selectedParts}
              onPartSelect={handlePartSelect}
            />
          </div>

          {/* 3D Scene */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4">
                <h3 className="text-lg font-semibold">Interactive 3D PC Assembly</h3>
                <p className="text-sm opacity-90">Rotate, zoom, and pan to explore your build</p>
              </div>
              <div className="h-96 lg:h-[600px]">
                <PCBuilderScene selectedParts={selectedParts} />
              </div>
            </div>
            
            {/* Controls Info */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
              <h4 className="font-medium text-blue-900 mb-3 flex items-center">
                <Zap className="h-4 w-4 mr-2" />
                3D Controls:
              </h4>
              <div className="text-sm text-blue-800 grid grid-cols-1 md:grid-cols-2 gap-2">
                <span>🖱️ Left Click + Drag: Rotate view</span>
                <span>🔍 Mouse Wheel: Zoom in/out</span>
                <span>🤏 Right Click + Drag: Pan camera</span>
                <span>✨ Real-time part placement</span>
              </div>
            </div>

            {/* Performance Indicator */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-4">
              <h4 className="font-medium text-green-900 mb-2 flex items-center">
                <Thermometer className="h-4 w-4 mr-2" />
                Estimated Performance:
              </h4>
              <div className="text-sm text-green-800">
                <p>Gaming: {selectedParts.gpu ? 'High' : 'Select GPU'} | Productivity: {selectedParts.cpu ? 'Good' : 'Select CPU'}</p>
              </div>
            </div>
          </div>

          {/* Build Summary */}
          <div className="lg:col-span-1">
            <BuildSummary 
              selectedParts={selectedParts}
              onAddToCart={handleAddToCart}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildPC;
