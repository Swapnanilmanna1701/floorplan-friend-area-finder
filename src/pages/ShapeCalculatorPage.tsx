
import ShapeSelector from '@/components/ShapeSelector';
import Navbar from '@/components/Navbar';
import { useState } from 'react';

const ShapeCalculatorPage = () => {
  const [calculatedArea, setCalculatedArea] = useState(0);

  const handleAreaChange = (area: number) => {
    setCalculatedArea(area);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-900 dark:to-black transition-colors duration-300">
      <Navbar />
      <main className="container mx-auto px-4 py-24">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Shape Area Calculator
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Calculate area for different shapes by selecting the shape and entering dimensions.
          </p>
        </div>
        <ShapeSelector onAreaChange={handleAreaChange} unit="sqft" />
        
        {calculatedArea > 0 && (
          <div className="max-w-md mx-auto mt-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                Calculated Area
              </h3>
              <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                {calculatedArea.toFixed(2)} sq. ft
              </p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default ShapeCalculatorPage;
