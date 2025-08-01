import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { X, Search, RotateCcw } from 'lucide-react';
import { toast } from 'sonner';

interface CountryFormProps {
  onClose: () => void;
}

interface CountryData {
  name: string;
  narration: string;
}

export const CountryForm = ({ onClose }: CountryFormProps) => {
  const [formData, setFormData] = useState<CountryData>({
    name: '',
    narration: '',
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    if (!formData.name.trim()) {
      toast.error('Please enter country name');
      return;
    }
    toast.success('Country saved successfully');
    console.log('Saving country:', formData);
  };

  const handleClear = () => {
    setFormData({
      name: '',
      narration: '',
    });
    toast.info('Form cleared');
  };

  const handleDelete = () => {
    toast.error('Delete functionality not implemented');
  };

  const sampleCountries = [
    { slNo: 1, country: 'India' },
    { slNo: 2, country: 'Foreign Country' },
    { slNo: 3, country: 'UAE' },
    { slNo: 4, country: 'OMANE' },
    { slNo: 5, country: 'USA' },
    { slNo: 6, country: 'Romania' },
    { slNo: 7, country: 'Australia' },
    { slNo: 8, country: 'UK' },
    { slNo: 9, country: 'GREECE' },
    { slNo: 10, country: 'DUBAI - U.A.E' },
  ];

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-4xl max-h-[90vh] overflow-auto bg-gradient-to-br from-background to-muted/20 border-2 border-primary/20 shadow-2xl">
        <CardHeader className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-t-lg">
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl font-semibold">Country Master</CardTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="text-primary-foreground hover:bg-white/20 transition-colors"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
        </CardHeader>
        
        <CardContent className="p-6 space-y-6">
          {/* Form Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium text-foreground">
                Name <span className="text-destructive">*</span>
              </Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder="Enter Country Name"
                className="border-2 border-border/50 focus:border-primary transition-colors"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="narration" className="text-sm font-medium text-foreground">
                Narration
              </Label>
              <Textarea
                id="narration"
                value={formData.narration}
                onChange={(e) => handleInputChange('narration', e.target.value)}
                placeholder="Enter Narration"
                className="border-2 border-border/50 focus:border-primary transition-colors resize-none"
                rows={3}
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 pt-4 border-t border-border/50">
            <Button 
              onClick={handleSave}
              className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-md transition-all duration-200"
            >
              Save
            </Button>
            <Button 
              onClick={handleClear}
              variant="outline"
              className="border-2 border-blue-500 text-blue-600 hover:bg-blue-50 transition-colors"
            >
              <RotateCcw className="h-4 w-4 mr-2" />
              Clear
            </Button>
            <Button 
              onClick={handleDelete}
              variant="outline"
              className="border-2 border-red-500 text-red-600 hover:bg-red-50 transition-colors"
            >
              Delete
            </Button>
            <Button 
              onClick={onClose}
              variant="outline"
              className="border-2 border-gray-500 text-gray-600 hover:bg-gray-50 transition-colors"
            >
              Close
            </Button>
          </div>

          {/* Data Table */}
          <div className="bg-gradient-to-br from-muted/30 to-muted/10 rounded-lg p-4 border border-border/50">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
                    <th className="border border-border/30 px-4 py-3 text-left font-semibold">Sl No</th>
                    <th className="border border-border/30 px-4 py-3 text-left font-semibold">Country</th>
                  </tr>
                </thead>
                <tbody>
                  {sampleCountries.map((country, index) => (
                    <tr 
                      key={country.slNo} 
                      className={`${index % 2 === 0 ? 'bg-background' : 'bg-muted/30'} hover:bg-primary/5 transition-colors cursor-pointer`}
                    >
                      <td className="border border-border/30 px-4 py-2 text-center">{country.slNo}</td>
                      <td className="border border-border/30 px-4 py-2">{country.country}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};