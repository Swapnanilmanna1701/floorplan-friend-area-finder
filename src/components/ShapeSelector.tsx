
import { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ShapeSelectorProps {
  onAreaChange: (area: number) => void;
  unit: string;
}

type ShapeType = 'rectangle' | 'square' | 'circle' | 'ellipse' | 'hexagon' | 'pentagon';
type UnitType = 'meter' | 'foot' | 'decimeter' | 'centimeter' | 'yard' | 'inch' | 'millimeter';

const units: { value: UnitType; label: string; shortLabel: string }[] = [
  { value: 'meter', label: 'Meter', shortLabel: 'm' },
  { value: 'foot', label: 'Foot', shortLabel: 'ft' },
  { value: 'decimeter', label: 'Decimeter', shortLabel: 'dm' },
  { value: 'centimeter', label: 'Centimeter', shortLabel: 'cm' },
  { value: 'yard', label: 'Yard', shortLabel: 'yd' },
  { value: 'inch', label: 'Inch', shortLabel: 'in' },
  { value: 'millimeter', label: 'Millimeter', shortLabel: 'mm' },
];

const ShapeSelector = ({ onAreaChange, unit }: ShapeSelectorProps) => {
  const [selectedShape, setSelectedShape] = useState<ShapeType>('rectangle');
  const [selectedUnit, setSelectedUnit] = useState<UnitType>('foot');
  const [dimensions, setDimensions] = useState({
    length: '',
    width: '',
    radius: '',
    axisA: '',
    axisB: '',
    side: '',
    size: ''
  });

  const currentUnitLabel = units.find(u => u.value === selectedUnit)?.shortLabel || 'ft';

  const calculateArea = (shape: ShapeType, dims: typeof dimensions) => {
    switch (shape) {
      case 'rectangle':
        const length = parseFloat(dims.length);
        const width = parseFloat(dims.width);
        return length && width ? length * width : 0;
      
      case 'square':
        const side = parseFloat(dims.side);
        return side ? side * side : 0;
      
      case 'circle':
        const radius = parseFloat(dims.radius);
        return radius ? Math.PI * radius * radius : 0;
      
      case 'ellipse':
        const axisA = parseFloat(dims.axisA);
        const axisB = parseFloat(dims.axisB);
        return axisA && axisB ? Math.PI * axisA * axisB : 0;
      
      case 'hexagon':
        const hexSide = parseFloat(dims.size);
        return hexSide ? (3 * Math.sqrt(3) / 2) * hexSide * hexSide : 0;
      
      case 'pentagon':
        const pentSide = parseFloat(dims.size);
        return pentSide ? (1/4) * Math.sqrt(25 + 10*Math.sqrt(5)) * pentSide * pentSide : 0;
      
      default:
        return 0;
    }
  };

  const handleDimensionChange = (key: string, value: string) => {
    const newDimensions = { ...dimensions, [key]: value };
    setDimensions(newDimensions);
    const area = calculateArea(selectedShape, newDimensions);
    onAreaChange(area);
  };

  const handleShapeChange = (shape: ShapeType) => {
    setSelectedShape(shape);
    // Reset dimensions when shape changes
    const resetDimensions = {
      length: '',
      width: '',
      radius: '',
      axisA: '',
      axisB: '',
      side: '',
      size: ''
    };
    setDimensions(resetDimensions);
    onAreaChange(0);
  };

  const renderShapeVisual = () => {
    const baseStyle = "w-24 h-24 mx-auto mb-4";
    
    switch (selectedShape) {
      case 'rectangle':
        return (
          <div className={`${baseStyle} bg-blue-400 rounded-sm relative`}>
            <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-600 dark:text-gray-400">length</span>
            <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs text-white font-semibold">Rectangle</span>
            <span className="absolute -left-8 top-1/2 transform -translate-y-1/2 text-xs text-gray-600 dark:text-gray-400 -rotate-90">width</span>
          </div>
        );
      
      case 'square':
        return (
          <div className={`${baseStyle} bg-green-400 rounded-sm relative`}>
            <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-600 dark:text-gray-400">side</span>
            <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs text-white font-semibold">Square</span>
          </div>
        );
      
      case 'circle':
        return (
          <div className={`${baseStyle} bg-red-400 rounded-full relative`}>
            <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs text-white font-semibold">Circle</span>
            <div className="absolute inset-0">
              <div className="w-full h-0.5 bg-white absolute top-1/2 transform -translate-y-1/2"></div>
              <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-8 text-xs text-gray-600 dark:text-gray-400">radius</span>
            </div>
          </div>
        );
      
      case 'ellipse':
        return (
          <div className={`${baseStyle} bg-purple-400 rounded-full relative`} style={{ width: '120px', height: '80px' }}>
            <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs text-white font-semibold">Ellipse</span>
            <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-600 dark:text-gray-400">A</span>
            <span className="absolute -left-8 top-1/2 transform -translate-y-1/2 text-xs text-gray-600 dark:text-gray-400 -rotate-90">B</span>
          </div>
        );
      
      case 'hexagon':
        return (
          <div className={`${baseStyle} relative`}>
            <svg width="96" height="96" viewBox="0 0 96 96" className="mx-auto">
              <polygon 
                points="48,8 80,28 80,68 48,88 16,68 16,28" 
                fill="#f59e0b" 
                stroke="#d97706" 
                strokeWidth="2"
              />
              <text x="48" y="52" textAnchor="middle" className="fill-white text-xs font-semibold">Hexagon</text>
            </svg>
            <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-600 dark:text-gray-400">side</span>
          </div>
        );
      
      case 'pentagon':
        return (
          <div className={`${baseStyle} relative`}>
            <svg width="96" height="96" viewBox="0 0 96 96" className="mx-auto">
              <polygon 
                points="48,8 76,32 64,68 32,68 20,32" 
                fill="#06b6d4" 
                stroke="#0891b2" 
                strokeWidth="2"
              />
              <text x="48" y="52" textAnchor="middle" className="fill-white text-xs font-semibold">Pentagon</text>
            </svg>
            <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-600 dark:text-gray-400">side</span>
          </div>
        );
      
      default:
        return null;
    }
  };

  const renderDimensionInputs = () => {
    switch (selectedShape) {
      case 'rectangle':
        return (
          <>
            <div className="space-y-2">
              <Label htmlFor="length">Length</Label>
              <div className="flex space-x-2">
                <Input
                  id="length"
                  type="number"
                  placeholder="Enter length"
                  value={dimensions.length}
                  onChange={(e) => handleDimensionChange('length', e.target.value)}
                  min="0"
                  step="0.01"
                  className="flex-1"
                />
                <Select value={selectedUnit} onValueChange={(value: UnitType) => setSelectedUnit(value)}>
                  <SelectTrigger className="w-24">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-white dark:bg-gray-800 border dark:border-gray-700">
                    {units.map((unit) => (
                      <SelectItem key={unit.value} value={unit.value}>
                        {unit.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="width">Width</Label>
              <div className="flex space-x-2">
                <Input
                  id="width"
                  type="number"
                  placeholder="Enter width"
                  value={dimensions.width}
                  onChange={(e) => handleDimensionChange('width', e.target.value)}
                  min="0"
                  step="0.01"
                  className="flex-1"
                />
                <Select value={selectedUnit} onValueChange={(value: UnitType) => setSelectedUnit(value)}>
                  <SelectTrigger className="w-24">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-white dark:bg-gray-800 border dark:border-gray-700">
                    {units.map((unit) => (
                      <SelectItem key={unit.value} value={unit.value}>
                        {unit.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </>
        );
      
      case 'square':
        return (
          <div className="space-y-2">
            <Label htmlFor="side">Side</Label>
            <div className="flex space-x-2">
              <Input
                id="side"
                type="number"
                placeholder="Enter side length"
                value={dimensions.side}
                onChange={(e) => handleDimensionChange('side', e.target.value)}
                min="0"
                step="0.01"
                className="flex-1"
              />
              <Select value={selectedUnit} onValueChange={(value: UnitType) => setSelectedUnit(value)}>
                <SelectTrigger className="w-24">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-white dark:bg-gray-800 border dark:border-gray-700">
                  {units.map((unit) => (
                    <SelectItem key={unit.value} value={unit.value}>
                      {unit.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        );
      
      case 'circle':
        return (
          <div className="space-y-2">
            <Label htmlFor="radius">Radius</Label>
            <div className="flex space-x-2">
              <Input
                id="radius"
                type="number"
                placeholder="Enter radius"
                value={dimensions.radius}
                onChange={(e) => handleDimensionChange('radius', e.target.value)}
                min="0"
                step="0.01"
                className="flex-1"
              />
              <Select value={selectedUnit} onValueChange={(value: UnitType) => setSelectedUnit(value)}>
                <SelectTrigger className="w-24">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-white dark:bg-gray-800 border dark:border-gray-700">
                  {units.map((unit) => (
                    <SelectItem key={unit.value} value={unit.value}>
                      {unit.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        );
      
      case 'ellipse':
        return (
          <>
            <div className="space-y-2">
              <Label htmlFor="axisA">Axis A</Label>
              <div className="flex space-x-2">
                <Input
                  id="axisA"
                  type="number"
                  placeholder="Enter axis A"
                  value={dimensions.axisA}
                  onChange={(e) => handleDimensionChange('axisA', e.target.value)}
                  min="0"
                  step="0.01"
                  className="flex-1"
                />
                <Select value={selectedUnit} onValueChange={(value: UnitType) => setSelectedUnit(value)}>
                  <SelectTrigger className="w-24">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-white dark:bg-gray-800 border dark:border-gray-700">
                    {units.map((unit) => (
                      <SelectItem key={unit.value} value={unit.value}>
                        {unit.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="axisB">Axis B</Label>
              <div className="flex space-x-2">
                <Input
                  id="axisB"
                  type="number"
                  placeholder="Enter axis B"
                  value={dimensions.axisB}
                  onChange={(e) => handleDimensionChange('axisB', e.target.value)}
                  min="0"
                  step="0.01"
                  className="flex-1"
                />
                <Select value={selectedUnit} onValueChange={(value: UnitType) => setSelectedUnit(value)}>
                  <SelectTrigger className="w-24">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-white dark:bg-gray-800 border dark:border-gray-700">
                    {units.map((unit) => (
                      <SelectItem key={unit.value} value={unit.value}>
                        {unit.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </>
        );
      
      case 'hexagon':
      case 'pentagon':
        return (
          <div className="space-y-2">
            <Label htmlFor="size">Side Length</Label>
            <div className="flex space-x-2">
              <Input
                id="size"
                type="number"
                placeholder="Enter side length"
                value={dimensions.size}
                onChange={(e) => handleDimensionChange('size', e.target.value)}
                min="0"
                step="0.01"
                className="flex-1"
              />
              <Select value={selectedUnit} onValueChange={(value: UnitType) => setSelectedUnit(value)}>
                <SelectTrigger className="w-24">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-white dark:bg-gray-800 border dark:border-gray-700">
                  {units.map((unit) => (
                    <SelectItem key={unit.value} value={unit.value}>
                      {unit.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <Card className="shadow-lg dark:bg-gray-800 dark:border-gray-700">
      <CardHeader>
        <CardTitle className="dark:text-white">Area Shape Selection</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Shape Selection */}
        <div className="space-y-2">
          <Label className="dark:text-gray-300">Shape</Label>
          <Select value={selectedShape} onValueChange={handleShapeChange}>
            <SelectTrigger className="dark:bg-gray-700 dark:border-gray-600 dark:text-white">
              <SelectValue placeholder="Select a shape" />
            </SelectTrigger>
            <SelectContent className="bg-white dark:bg-gray-800 border dark:border-gray-700">
              <SelectItem value="rectangle">Rectangle</SelectItem>
              <SelectItem value="square">Square</SelectItem>
              <SelectItem value="circle">Circle</SelectItem>
              <SelectItem value="ellipse">Ellipse</SelectItem>
              <SelectItem value="hexagon">Hexagon</SelectItem>
              <SelectItem value="pentagon">Pentagon</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Shape Visual */}
        <div className="text-center">
          {renderShapeVisual()}
        </div>

        {/* Dimension Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {renderDimensionInputs()}
        </div>

        {/* Calculated Area Display */}
        {calculateArea(selectedShape, dimensions) > 0 && (
          <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700 rounded-lg p-4 text-center">
            <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Calculated Area</h4>
            <div className="text-lg font-bold text-blue-600 dark:text-blue-400">
              {calculateArea(selectedShape, dimensions).toFixed(2)} sq. {currentUnitLabel}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ShapeSelector;
