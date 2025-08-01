import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { X, Plus, Search, RotateCcw } from 'lucide-react';
import { toast } from 'sonner';

interface ExchangeRateFormProps {
  onClose: () => void;
}

interface ExchangeRateData {
  currency: string;
  exchangeRate: string;
  date: string;
  transactionType: string;
  narration: string;
}

interface SearchData {
  currency: string;
  dateFrom: string;
}

export const ExchangeRateForm = ({ onClose }: ExchangeRateFormProps) => {
  const [formData, setFormData] = useState<ExchangeRateData>({
    currency: '',
    exchangeRate: '',
    date: '01-Aug-2025',
    transactionType: '',
    narration: '',
  });

  const [searchData, setSearchData] = useState<SearchData>({
    currency: 'All',
    dateFrom: '01-Aug-2025',
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSearchChange = (field: string, value: string) => {
    setSearchData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    if (!formData.currency || !formData.exchangeRate) {
      toast.error('Please fill all required fields');
      return;
    }
    toast.success('Exchange rate saved successfully');
    console.log('Saving exchange rate:', formData);
  };

  const handleClear = () => {
    setFormData({
      currency: '',
      exchangeRate: '',
      date: '01-Aug-2025',
      transactionType: '',
      narration: '',
    });
    toast.info('Form cleared');
  };

  const handleSearch = () => {
    toast.info('Search functionality executed');
    console.log('Searching with:', searchData);
  };

  const sampleRates = [
    { slNo: 1, currency: 'Dollar', date: '01 Apr 2025', type: 'Export', exchangeRate: '81.00000', isActive: true },
    { slNo: 2, currency: 'Dollar', date: '23 Oct 2025', type: 'Export', exchangeRate: '82.45000', isActive: true },
  ];

  const currencies = ['USD', 'EUR', 'GBP', 'JPY', 'CAD', 'AUD'];
  const transactionTypes = ['Export', 'Import', 'General'];

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-6xl max-h-[90vh] overflow-auto bg-gradient-to-br from-background to-muted/20 border-2 border-primary/20 shadow-2xl">
        <CardHeader className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-t-lg">
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl font-semibold">Exchange Rate</CardTitle>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-2">
              <Label htmlFor="currency" className="text-sm font-medium text-foreground">
                Currency <span className="text-destructive">*</span>
              </Label>
              <div className="flex gap-2">
                <Select value={formData.currency} onValueChange={(value) => handleInputChange('currency', value)}>
                  <SelectTrigger className="border-2 border-border/50 focus:border-primary">
                    <SelectValue placeholder="Select Currency" />
                  </SelectTrigger>
                  <SelectContent>
                    {currencies.map((currency) => (
                      <SelectItem key={currency} value={currency}>{currency}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Button size="icon" variant="outline" className="border-2 border-primary text-primary hover:bg-primary/10">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="date" className="text-sm font-medium text-foreground">
                Date <span className="text-destructive">*</span>
              </Label>
              <Input
                id="date"
                value={formData.date}
                onChange={(e) => handleInputChange('date', e.target.value)}
                className="border-2 border-border/50 focus:border-primary transition-colors"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="exchangeRate" className="text-sm font-medium text-foreground">
                Exchange Rate <span className="text-destructive">*</span>
              </Label>
              <Input
                id="exchangeRate"
                value={formData.exchangeRate}
                onChange={(e) => handleInputChange('exchangeRate', e.target.value)}
                placeholder="0"
                className="border-2 border-border/50 focus:border-primary transition-colors"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="transactionType" className="text-sm font-medium text-foreground">
                Transaction Type
              </Label>
              <Select value={formData.transactionType} onValueChange={(value) => handleInputChange('transactionType', value)}>
                <SelectTrigger className="border-2 border-border/50 focus:border-primary">
                  <SelectValue placeholder="Select Type" />
                </SelectTrigger>
                <SelectContent>
                  {transactionTypes.map((type) => (
                    <SelectItem key={type} value={type}>{type}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="narration" className="text-sm font-medium text-foreground">
                Narration
              </Label>
              <Textarea
                id="narration"
                value={formData.narration}
                onChange={(e) => handleInputChange('narration', e.target.value)}
                placeholder="Enter Narration"
                className="border-2 border-border/50 focus:border-primary transition-colors resize-none"
                rows={2}
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

          {/* Search Section */}
          <div className="bg-gradient-to-br from-muted/30 to-muted/10 rounded-lg p-4 border border-border/50">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="space-y-2">
                <Label className="text-sm font-medium">Currency</Label>
                <Select value={searchData.currency} onValueChange={(value) => handleSearchChange('currency', value)}>
                  <SelectTrigger className="border-2 border-border/50">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All">All</SelectItem>
                    {currencies.map((currency) => (
                      <SelectItem key={currency} value={currency}>{currency}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium">Date From</Label>
                <Input
                  value={searchData.dateFrom}
                  onChange={(e) => handleSearchChange('dateFrom', e.target.value)}
                  className="border-2 border-border/50"
                />
              </div>

              <div className="flex items-end gap-2">
                <Button 
                  onClick={handleSearch}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white"
                >
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </Button>
                <Button 
                  variant="outline"
                  className="border-2 border-orange-500 text-orange-600 hover:bg-orange-50"
                >
                  Clear
                </Button>
              </div>
            </div>
          </div>

          {/* Data Table */}
          <div className="bg-gradient-to-br from-muted/30 to-muted/10 rounded-lg p-4 border border-border/50">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
                    <th className="border border-border/30 px-4 py-3 text-left font-semibold">Sl No</th>
                    <th className="border border-border/30 px-4 py-3 text-left font-semibold">Currency</th>
                    <th className="border border-border/30 px-4 py-3 text-left font-semibold">Date</th>
                    <th className="border border-border/30 px-4 py-3 text-left font-semibold">Type</th>
                    <th className="border border-border/30 px-4 py-3 text-left font-semibold">Exchange Rate</th>
                    <th className="border border-border/30 px-4 py-3 text-left font-semibold">IsActive</th>
                  </tr>
                </thead>
                <tbody>
                  {sampleRates.map((rate, index) => (
                    <tr 
                      key={rate.slNo} 
                      className={`${index % 2 === 0 ? 'bg-background' : 'bg-muted/30'} hover:bg-primary/5 transition-colors cursor-pointer`}
                    >
                      <td className="border border-border/30 px-4 py-2 text-center">{rate.slNo}</td>
                      <td className="border border-border/30 px-4 py-2">{rate.currency}</td>
                      <td className="border border-border/30 px-4 py-2">{rate.date}</td>
                      <td className="border border-border/30 px-4 py-2">{rate.type}</td>
                      <td className="border border-border/30 px-4 py-2 text-right">{rate.exchangeRate}</td>
                      <td className="border border-border/30 px-4 py-2 text-center">
                        <div className={`w-3 h-3 rounded-full mx-auto ${rate.isActive ? 'bg-green-500' : 'bg-red-500'}`}></div>
                      </td>
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