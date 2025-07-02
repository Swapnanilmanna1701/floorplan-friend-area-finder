
import CarpetAreaCalculator from '@/components/CarpetAreaCalculator';
import Navbar from '@/components/Navbar';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-900 dark:to-black transition-colors duration-300">
      <Navbar />
      <main className="container mx-auto px-4 py-24">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Carpet Area Calculator
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Calculate your carpet area accurately by inputting your built-up area and deduction for wall thickness and common areas.
          </p>
        </div>
        <CarpetAreaCalculator />
      </main>
    </div>
  );
};

export default Index;
