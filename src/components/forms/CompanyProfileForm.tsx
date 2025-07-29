import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Upload, X, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface CompanyProfileFormProps {
  onClose: () => void;
}

export const CompanyProfileForm = ({ onClose }: CompanyProfileFormProps) => {
  const [activeTab, setActiveTab] = useState("details");

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Company Profile
          </DialogTitle>
        </DialogHeader>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="details">Company Details</TabsTrigger>
            <TabsTrigger value="terms">Default Terms / Notes</TabsTrigger>
            <TabsTrigger value="logos">Company Logos</TabsTrigger>
          </TabsList>

          <TabsContent value="details" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Basic Information</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="companyName">Company Name</Label>
                  <Input 
                    id="companyName" 
                    defaultValue="EMB"
                    className="font-medium"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="gstNo">GST No</Label>
                  <Input 
                    id="gstNo" 
                    defaultValue="24AAIIFE6634M24"
                    className="font-mono"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="legalName">Legal Name</Label>
                  <Input 
                    id="legalName" 
                    defaultValue="EMERIO GRANITO LLP"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="iecNo">IEC No</Label>
                  <Input 
                    id="iecNo" 
                    defaultValue="AAIIFE6634"
                  />
                </div>
                <div className="space-y-2 col-span-2">
                  <Label htmlFor="address">Address</Label>
                  <Textarea 
                    id="address" 
                    defaultValue="SURVEY NO 8901, 8902, B.A NATIONAL HIGHWAY, SARDAMINA ROAD, Sartatmagar, Morbi, Gujarat, 363641"
                    rows={3}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="aeoNo">AEO No.</Label>
                  <Input id="aeoNo" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lutNo">LUT No</Label>
                  <Input 
                    id="lutNo" 
                    defaultValue="(AP)IN ADD20341459123"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">E-Mail</Label>
                  <Input 
                    id="email" 
                    type="email"
                    defaultValue="exports@gmail.com"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="panNo">PAN No</Label>
                  <Input 
                    id="panNo" 
                    defaultValue="AAIIFE6634"
                    className="font-mono"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phoneNo">Phone No</Label>
                  <Input id="phoneNo" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="llpNo">LLP No</Label>
                  <Input id="llpNo" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="mobile">Mobile</Label>
                  <Input 
                    id="mobile" 
                    defaultValue="8758152000"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="rexNo">REX No</Label>
                  <Input id="rexNo" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="stateCode">State Code / State</Label>
                  <div className="flex gap-2">
                    <Input 
                      defaultValue="24"
                      className="w-20"
                    />
                    <Input 
                      defaultValue="GUJARAT"
                      className="flex-1"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="authorizedPerson">Authorised Person</Label>
                  <Input 
                    id="authorizedPerson" 
                    defaultValue="RAJNIKANT ZALARIA"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="country">Country</Label>
                  <Input 
                    id="country" 
                    defaultValue="INDIA"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="terms" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Default Terms & Notes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="defaultTerms">Default Terms</Label>
                  <Textarea 
                    id="defaultTerms"
                    rows={6}
                    placeholder="Enter default terms and conditions..."
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="defaultNotes">Default Notes</Label>
                  <Textarea 
                    id="defaultNotes"
                    rows={4}
                    placeholder="Enter default notes..."
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="logos" className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center justify-between">
                    Logo 1
                    <Badge variant="outline">Size: 238 X 115</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center">
                    <Upload className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                    <p className="text-sm text-muted-foreground mb-4">
                      Drop your logo here or click to browse
                    </p>
                    <Button variant="outline" size="sm">
                      Browse
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center justify-between">
                    Sign
                    <Badge variant="outline">Size: 100 X 60</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center">
                    <Upload className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                    <p className="text-sm text-muted-foreground mb-4">
                      Drop your signature here or click to browse
                    </p>
                    <Button variant="outline" size="sm">
                      Browse
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center justify-between">
                    Logo 2
                    <Badge variant="outline">Size: 238 X 115</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center">
                    <Upload className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                    <p className="text-sm text-muted-foreground mb-4">
                      Drop your logo here or click to browse
                    </p>
                    <Button variant="outline" size="sm">
                      Browse
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center justify-between">
                    Footer
                    <Badge variant="outline">Size: 300 X 100</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center">
                    <Upload className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                    <p className="text-sm text-muted-foreground mb-4">
                      Drop your footer image here or click to browse
                    </p>
                    <Button variant="outline" size="sm">
                      Browse
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        <div className="flex justify-end gap-4 pt-6 border-t">
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
          <Button variant="outline">
            Reset
          </Button>
          <Button variant="destructive">
            Delete
          </Button>
          <Button>
            Update
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};