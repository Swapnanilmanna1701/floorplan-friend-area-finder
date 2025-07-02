
import { useState } from 'react';
import { Calculator, Info } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import Results from './Results';
import ShapeSelector from './ShapeSelector';

const CarpetAreaCalculator = () => {
  const [builtUpArea, setBuiltUpArea] = useState('');
  const [deductionType, setDeductionType] = useState('percentage');
  const [deductionValue, setDeductionValue] = useState('');
  const [unit, setUnit] = useState('sqft');
  const [results, setResults] = useState(null);
  const [useShapeCalculator, setUseShapeCalculator] = useState(false);
  const [shapeArea, setShapeArea] = useState(0);

  const handleShapeAreaChange = (area: number) => {
    setShapeArea(area);
    if (area > 0) {
      setBuiltUpArea(area.toString());
    }
  };

  const calculateCarpetArea = () => {
    const builtUp = parseFloat(builtUpArea);
    const deduction = parseFloat(deductionValue);

    if (!builtUp || !deduction || builtUp <= 0 || deduction < 0) {
      alert('Please enter valid positive numbers for all fields');
      return;
    }

    let carpetArea;
    let deductedArea;

    if (deductionType === 'percentage') {
      if (deduction > 100) {
        alert('Percentage cannot be more than 100%');
        return;
      }
      deductedArea = (builtUp * deduction) / 100;
      carpetArea = builtUp - deductedArea;
    } else {
      if (deduction >= builtUp) {
        alert('Fixed deduction cannot be equal to or greater than built-up area');
        return;
      }
      deductedArea = deduction;
      carpetArea = builtUp - deduction;
    }

    setResults({
      builtUpArea: builtUp,
      deductedArea: deductedArea,
      carpetArea: carpetArea,
      unit: unit,
      deductionType: deductionType,
      deductionValue: deduction
    });
  };

  const resetCalculator = () => {
    setBuiltUpArea('');
    setDeductionValue('');
    setResults(null);
    setShapeArea(0);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Shape Calculator Toggle */}
      <Card className="shadow-lg">
        <CardContent className="p-4">
          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              id="useShapeCalculator"
              checked={useShapeCalculator}
              onChange={(e) => setUseShapeCalculator(e.target.checked)}
              className="rounded"
            />
            <Label htmlFor="useShapeCalculator" className="cursor-pointer">
              Use Shape Calculator for Built-up Area
            </Label>
          </div>
        </CardContent>
      </Card>

      {/* Shape Selector */}
      {useShapeCalculator && (
        <ShapeSelector onAreaChange={handleShapeAreaChange} unit={unit} />
      )}

      <Card className="shadow-lg">
        <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <CardTitle className="flex items-center space-x-2">
            <Calculator className="w-6 h-6" />
            <span>Carpet Area Calculator</span>
          </CardTitle>
          <CardDescription className="text-blue-100">
            Enter your built-up area and deduction details to calculate carpet area
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6 space-y-6">
          {/* Built-up Area Input */}
          <div className="space-y-2">
            <Label htmlFor="builtUpArea" className="text-sm font-medium text-gray-700">
              Built-up Area * {useShapeCalculator && shapeArea > 0 && '(Auto-calculated from shape)'}
            </Label>
            <div className="flex space-x-2">
              <Input
                id="builtUpArea"
                type="number"
                placeholder="Enter built-up area"
                value={builtUpArea}
                onChange={(e) => setBuiltUpArea(e.target.value)}
                className="flex-1"
                min="0"
                step="0.01"
                readOnly={useShapeCalculator && shapeArea > 0}
              />
              <Select value={unit} onValueChange={setUnit}>
                <SelectTrigger className="w-24">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="sqft">sq. ft</SelectItem>
                  <SelectItem value="sqm">sq. m</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Deduction Type */}
          <div className="space-y-3">
            <Label className="text-sm font-medium text-gray-700">
              Deduction Method *
            </Label>
            <RadioGroup
              value={deductionType}
              onValueChange={setDeductionType}
              className="flex flex-col space-y-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="percentage" id="percentage" />
                <Label htmlFor="percentage" className="text-sm">
                  Percentage deduction for wall thickness/common areas
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="fixed" id="fixed" />
                <Label htmlFor="fixed" className="text-sm">
                  Fixed deduction ({unit === 'sqft' ? 'sq. ft' : 'sq. m'})
                </Label>
              </div>
            </RadioGroup>
          </div>

          {/* Deduction Value */}
          <div className="space-y-2">
            <Label htmlFor="deductionValue" className="text-sm font-medium text-gray-700">
              {deductionType === 'percentage' ? 'Deduction Percentage (%)' : `Deduction Area (${unit === 'sqft' ? 'sq. ft' : 'sq. m'})`} *
            </Label>
            <Input
              id="deductionValue"
              type="number"
              placeholder={deductionType === 'percentage' ? 'Enter percentage (e.g., 20)' : 'Enter fixed area to deduct'}
              value={deductionValue}
              onChange={(e) => setDeductionValue(e.target.value)}
              min="0"
              max={deductionType === 'percentage' ? '100' : undefined}
              step="0.01"
            />
          </div>

          {/* Info Box */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-start space-x-2">
              <Info className="w-5 h-5 text-blue-600 mt-0.5" />
              <div className="text-sm text-blue-800">
                <p className="font-medium mb-1">What is Carpet Area?</p>
                <p>
                  Carpet area is the actual usable floor area of your property, excluding walls, 
                  balconies, and common areas. It's typically 70-80% of the built-up area.
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button 
              onClick={calculateCarpetArea}
              className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
              size="lg"
            >
              <Calculator className="w-4 h-4 mr-2" />
              Calculate Carpet Area
            </Button>
            <Button 
              onClick={resetCalculator}
              variant="outline"
              size="lg"
              className="sm:w-auto"
            >
              Reset
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Results */}
      {results && <Results results={results} />}
    </div>
  );
};

export default CarpetAreaCalculator;
