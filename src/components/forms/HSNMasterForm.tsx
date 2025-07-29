import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { X, Save, Trash2, Plus, Search } from "lucide-react";

interface HSNMasterFormProps {
  onClose: () => void;
}

const sampleData = [
  { slNo: 1, hsnCode: "69072100", commodity: "GLAZE VITRIFIED TILES", enteredBy: "Admin", modifiedBy: "admin" },
  { slNo: 2, hsnCode: "69072200", commodity: "CERAMIC TILES", enteredBy: "Admin", modifiedBy: "admin" },
  { slNo: 3, hsnCode: "69072300", commodity: "CERAMIC GLAZED WALL TILES", enteredBy: "Admin", modifiedBy: "admin" },
];

export const HSNMasterForm = ({ onClose }: HSNMasterFormProps) => {
  const [formData, setFormData] = useState({
    hsnCode: "",
    commodity: "",
  });

  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    console.log("Saving HSN Master data:", formData);
    // Add save logic here
  };

  const handleClear = () => {
    setFormData({ hsnCode: "", commodity: "" });
  };

  const handleDelete = () => {
    console.log("Deleting HSN Master data");
    // Add delete logic here
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-6xl max-h-[90vh] overflow-hidden bg-card border-2 border-primary/20 shadow-2xl">
        <div className="bg-gradient-primary p-4 text-white flex items-center justify-between">
          <h2 className="text-xl font-bold">HSN/SAC Master</h2>
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
              <Label htmlFor="hsnCode" className="text-sm font-medium">
                HSN/SAC Code *
              </Label>
              <Input
                id="hsnCode"
                value={formData.hsnCode}
                onChange={(e) => handleInputChange("hsnCode", e.target.value)}
                placeholder="Enter HSN/SAC Code"
                className="h-10"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="commodity" className="text-sm font-medium">
                Name of Commodity *
              </Label>
              <Input
                id="commodity"
                value={formData.commodity}
                onChange={(e) => handleInputChange("commodity", e.target.value)}
                placeholder="Enter Commodity Name"
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
          <div className="space-y-4">
            <div className="flex gap-4 items-end">
              <div className="flex-1">
                <Label htmlFor="search" className="text-sm font-medium">
                  Search by
                </Label>
                <div className="flex gap-2 mt-1">
                  <Input
                    id="search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search HSN/SAC Code or Commodity"
                    className="h-10"
                  />
                  <Button variant="outline" size="sm">
                    <Search className="h-4 w-4 mr-2" />
                    Search
                  </Button>
                  <Button variant="outline" size="sm">
                    Clear
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Data Table */}
          <div className="border rounded-lg overflow-hidden">
            <div className="bg-primary text-primary-foreground">
              <div className="grid grid-cols-6 gap-4 p-3 font-medium text-sm">
                <div>Sl No</div>
                <div>HSN_SAC_Code</div>
                <div className="col-span-2">Commodity</div>
                <div>EnteredBy</div>
                <div>ModifiedBy</div>
              </div>
            </div>
            <div className="max-h-80 overflow-y-auto">
              {sampleData.map((item) => (
                <div key={item.slNo} className="grid grid-cols-6 gap-4 p-3 border-b hover:bg-muted/50 transition-colors text-sm">
                  <div>{item.slNo}</div>
                  <div className="font-mono">{item.hsnCode}</div>
                  <div className="col-span-2">{item.commodity}</div>
                  <div>{item.enteredBy}</div>
                  <div>{item.modifiedBy}</div>
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