import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { X, Save, Trash2, Search } from "lucide-react";

interface CurrencyFormProps {
  onClose: () => void;
}

const sampleCurrencies = [
  { slNo: 1, name: "Dirham", symbol: "Dh.", decimalPlaces: 2 },
  { slNo: 2, name: "Rufiyaa", symbol: "Rf", decimalPlaces: 2 },
  { slNo: 3, name: "Ringgit", symbol: "RM", decimalPlaces: 2 },
  { slNo: 4, name: "Rupee", symbol: "NRs", decimalPlaces: 2 },
  { slNo: 5, name: "Dollar", symbol: "NZ$", decimalPlaces: 2 },
  { slNo: 6, name: "Rial", symbol: "RO", decimalPlaces: 2 },
  { slNo: 7, name: "Rupee", symbol: "PRs", decimalPlaces: 2 },
  { slNo: 8, name: "Rial", symbol: "QR", decimalPlaces: 2 },
  { slNo: 9, name: "Ruble", symbol: "R", decimalPlaces: 2 },
  { slNo: 10, name: "Riyal", symbol: "SR", decimalPlaces: 2 },
  { slNo: 11, name: "Dollar", symbol: "S$", decimalPlaces: 2 },
  { slNo: 12, name: "Taka", symbol: "Tk", decimalPlaces: 2 },
];

export const CurrencyForm = ({ onClose }: CurrencyFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    symbol: "",
    decimalPlaces: "",
    narration: "",
  });

  const [searchData, setSearchData] = useState({
    name: "",
    symbol: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSearchChange = (field: string, value: string) => {
    setSearchData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    console.log("Saving Currency data:", formData);
    // Add save logic here
  };

  const handleClear = () => {
    setFormData({ name: "", symbol: "", decimalPlaces: "", narration: "" });
  };

  const handleDelete = () => {
    console.log("Deleting Currency data");
    // Add delete logic here
  };

  const handleSearchClear = () => {
    setSearchData({ name: "", symbol: "" });
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-6xl max-h-[90vh] overflow-hidden bg-card border-2 border-primary/20 shadow-2xl">
        <div className="bg-gradient-primary p-4 text-white flex items-center justify-between">
          <h2 className="text-xl font-bold">Currency</h2>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="text-white hover:bg-white/20"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="p-6 space-y-6 overflow-y-auto max-h-[calc(90vh-180px)]">
          {/* Form Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 bg-muted/30 rounded-lg">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium">
                Name *
              </Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                placeholder="Enter Currency Name"
                className="h-10"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="symbol" className="text-sm font-medium">
                Symbol *
              </Label>
              <Input
                id="symbol"
                value={formData.symbol}
                onChange={(e) => handleInputChange("symbol", e.target.value)}
                placeholder="Enter Currency Symbol"
                className="h-10"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="decimalPlaces" className="text-sm font-medium">
                No. of Decimal Places *
              </Label>
              <Input
                id="decimalPlaces"
                type="number"
                value={formData.decimalPlaces}
                onChange={(e) => handleInputChange("decimalPlaces", e.target.value)}
                placeholder="Enter Decimal Places"
                className="h-10"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="narration" className="text-sm font-medium">
                Narration
              </Label>
              <Input
                id="narration"
                value={formData.narration}
                onChange={(e) => handleInputChange("narration", e.target.value)}
                placeholder="Enter Narration"
                className="h-10"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 justify-center">
            <Button onClick={handleSave} className="bg-success hover:bg-success/90">
              <Save className="h-4 w-4 mr-2" />
              Save
            </Button>
            <Button variant="outline" onClick={handleClear}>
              Clear
            </Button>
            <Button variant="destructive" onClick={handleDelete}>
              <Trash2 className="h-4 w-4 mr-2" />
              Delete
            </Button>
            <Button variant="outline" onClick={onClose}>
              Close
            </Button>
          </div>

          {/* Search Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-muted/20 rounded-lg">
            <div className="space-y-2">
              <Label htmlFor="searchName" className="text-sm font-medium">
                Name
              </Label>
              <Input
                id="searchName"
                value={searchData.name}
                onChange={(e) => handleSearchChange("name", e.target.value)}
                placeholder="Search by name"
                className="h-9"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="searchSymbol" className="text-sm font-medium">
                Symbol
              </Label>
              <Input
                id="searchSymbol"
                value={searchData.symbol}
                onChange={(e) => handleSearchChange("symbol", e.target.value)}
                placeholder="Search by symbol"
                className="h-9"
              />
            </div>

            <div className="flex gap-2 items-end">
              <Button variant="outline" size="sm">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
              <Button variant="outline" size="sm" onClick={handleSearchClear}>
                Clear
              </Button>
            </div>
          </div>

          {/* Data Table */}
          <div className="border rounded-lg overflow-hidden">
            <div className="bg-primary text-primary-foreground">
              <div className="grid grid-cols-4 gap-4 p-3 font-medium text-sm">
                <div>Sl No</div>
                <div>Name</div>
                <div>Symbol</div>
                <div>No. of Decimal Places</div>
              </div>
            </div>
            <div className="max-h-80 overflow-y-auto">
              {sampleCurrencies.map((item) => (
                <div key={item.slNo} className="grid grid-cols-4 gap-4 p-3 border-b hover:bg-muted/50 transition-colors text-sm">
                  <div>{item.slNo}</div>
                  <div>{item.name}</div>
                  <div className="font-mono">{item.symbol}</div>
                  <div>{item.decimalPlaces}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t p-4 bg-muted/30 text-center text-sm text-muted-foreground">
          Arya Says : - Help
        </div>
      </Card>
    </div>
  );
};