import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { X, RotateCcw } from 'lucide-react';
import { toast } from 'sonner';

interface EPCGLicenseFormProps {
  onClose: () => void;
}

interface LicenseData {
  licenseNo: string;
  issueDate: string;
  companyName: string;
  narration: string;
  isActive: boolean;
}

export const EPCGLicenseForm = ({ onClose }: EPCGLicenseFormProps) => {
  const [formData, setFormData] = useState<LicenseData>({
    licenseNo: '',
    issueDate: '01-Aug-2025',
    companyName: '',
    narration: '',
    isActive: true,
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    if (!formData.licenseNo.trim() || !formData.companyName.trim()) {
      toast.error('Please fill all required fields');
      return;
    }
    toast.success('EPCG License saved successfully');
    console.log('Saving EPCG License:', formData);
  };

  const handleClear = () => {
    setFormData({
      licenseNo: '',
      issueDate: '01-Aug-2025',
      companyName: '',
      narration: '',
      isActive: true,
    });
    toast.info('Form cleared');
  };

  const handleDelete = () => {
    toast.error('Delete functionality not implemented');
  };

  const sampleLicenses = [
    { 
      slNo: 1, 
      companyName: 'N/A', 
      licenseNo: 'N/A', 
      issueDate: '01-Apr-2025', 
      narration: 'testing', 
      isActive: true, 
      enteredBy: '', 
      modifiedBy: '' 
    },
  ];

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-5xl max-h-[90vh] overflow-auto bg-gradient-to-br from-background to-muted/20 border-2 border-primary/20 shadow-2xl">
        <CardHeader className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-t-lg">
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl font-semibold">EPCG License Entry</CardTitle>
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
              <Label htmlFor="licenseNo" className="text-sm font-medium text-foreground">
                EPCG License No <span className="text-destructive">*</span>
              </Label>
              <Input
                id="licenseNo"
                value={formData.licenseNo}
                onChange={(e) => handleInputChange('licenseNo', e.target.value)}
                placeholder="Enter License Number"
                className="border-2 border-border/50 focus:border-primary transition-colors"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="issueDate" className="text-sm font-medium text-foreground">
                EPCG License Issue Date <span className="text-destructive">*</span>
              </Label>
              <Input
                id="issueDate"
                value={formData.issueDate}
                onChange={(e) => handleInputChange('issueDate', e.target.value)}
                className="border-2 border-border/50 focus:border-primary transition-colors"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="companyName" className="text-sm font-medium text-foreground">
                Company Name <span className="text-destructive">*</span>
              </Label>
              <div className="flex gap-2">
                <Input
                  id="companyName"
                  value={formData.companyName}
                  onChange={(e) => handleInputChange('companyName', e.target.value)}
                  placeholder="Enter Company Name"
                  className="border-2 border-border/50 focus:border-primary transition-colors flex-1"
                />
                <Button 
                  size="sm" 
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-primary/10 px-6"
                >
                  ...
                </Button>
              </div>
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

          {/* Active Checkbox */}
          <div className="flex items-center space-x-2">
            <Checkbox
              id="isActive"
              checked={formData.isActive}
              onCheckedChange={(checked) => handleInputChange('isActive', checked as boolean)}
              className="border-2 border-primary data-[state=checked]:bg-primary"
            />
            <Label htmlFor="isActive" className="text-sm font-medium text-foreground cursor-pointer">
              Is Active
            </Label>
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
                    <th className="border border-border/30 px-4 py-3 text-left font-semibold">Company Name</th>
                    <th className="border border-border/30 px-4 py-3 text-left font-semibold">EPCG License No</th>
                    <th className="border border-border/30 px-4 py-3 text-left font-semibold">EPCG Lic Issue Date</th>
                    <th className="border border-border/30 px-4 py-3 text-left font-semibold">Narration</th>
                    <th className="border border-border/30 px-4 py-3 text-left font-semibold">IsActive</th>
                    <th className="border border-border/30 px-4 py-3 text-left font-semibold">EnteredBy</th>
                    <th className="border border-border/30 px-4 py-3 text-left font-semibold">ModifiedBy</th>
                  </tr>
                </thead>
                <tbody>
                  {sampleLicenses.map((license, index) => (
                    <tr 
                      key={license.slNo} 
                      className={`${index % 2 === 0 ? 'bg-background' : 'bg-muted/30'} hover:bg-primary/5 transition-colors cursor-pointer`}
                    >
                      <td className="border border-border/30 px-4 py-2 text-center">{license.slNo}</td>
                      <td className="border border-border/30 px-4 py-2">{license.companyName}</td>
                      <td className="border border-border/30 px-4 py-2">{license.licenseNo}</td>
                      <td className="border border-border/30 px-4 py-2">{license.issueDate}</td>
                      <td className="border border-border/30 px-4 py-2">{license.narration}</td>
                      <td className="border border-border/30 px-4 py-2 text-center">
                        <div className={`w-3 h-3 rounded-full mx-auto ${license.isActive ? 'bg-green-500' : 'bg-red-500'}`}></div>
                      </td>
                      <td className="border border-border/30 px-4 py-2">{license.enteredBy}</td>
                      <td className="border border-border/30 px-4 py-2">{license.modifiedBy}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Footer Info */}
          <div className="text-sm text-muted-foreground bg-muted/20 p-3 rounded-lg border border-border/30">
            <p>Click here for EPCG license search. Double click on row for edit or view EPCG license.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};