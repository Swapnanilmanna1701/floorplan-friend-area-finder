
import CarpetAreaCalculator from '@/components/CarpetAreaCalculator';
import Header from '@/components/Header';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Carpet Area Calculator
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Calculate your carpet area accurately by inputting your built-up area and deduction for wall thickness and common areas.
          </p>
        </div>
        <CarpetAreaCalculator />
      </main>
    </div>
  );
};

export default Index;
