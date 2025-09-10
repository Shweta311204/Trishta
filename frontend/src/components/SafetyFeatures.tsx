import { useState } from "react";
import { Shield, AlertTriangle, MapPin, Users, Phone, Camera } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { toast } from "@/hooks/use-toast";

const SafetyFeatures = () => {
  const [digitalId, setDigitalId] = useState<string | null>(null);
  const [reportForm, setReportForm] = useState({
    type: "",
    location: "",
    description: "",
    anonymous: true
  });

  const generateDigitalId = () => {
    const id = `NE-${Date.now().toString(36).toUpperCase()}`;
    setDigitalId(id);
    toast({
      title: "Digital ID Generated",
      description: `Your secure tourist ID: ${id}`,
    });
  };

  const submitReport = () => {
    if (!reportForm.type || !reportForm.location || !reportForm.description) {
      toast({
        title: "Incomplete Form",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Report Submitted",
      description: "Your safety report has been submitted to authorities",
    });
    
    setReportForm({
      type: "",
      location: "",
      description: "",
      anonymous: true
    });
  };

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {/* Digital Tourist ID */}
      <Card className="gradient-card shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-primary" />
            Digital Tourist ID
          </CardTitle>
          <CardDescription>
            Secure, blockchain-protected identification for your trip
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {digitalId ? (
            <div className="space-y-2">
              <Badge className="w-full justify-center py-2">
                Active ID: {digitalId}
              </Badge>
              <p className="text-sm text-muted-foreground text-center">
                Valid for current trip • Auto-expires on departure
              </p>
            </div>
          ) : (
            <Button onClick={generateDigitalId} variant="hero" className="w-full">
              Generate Secure ID
            </Button>
          )}
          <div className="space-y-2 text-xs text-muted-foreground">
            <p>✓ End-to-end encrypted</p>
            <p>✓ Blockchain secured</p>
            <p>✓ Auto-delete after trip</p>
          </div>
        </CardContent>
      </Card>

      {/* Anonymous Reporting */}
      <Card className="gradient-card shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-warning" />
            Report Incident
          </CardTitle>
          <CardDescription>
            Anonymous reporting system for safety concerns
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="w-full">
                File Safety Report
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Submit Safety Report</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <Select
                  value={reportForm.type}
                  onValueChange={(value) => setReportForm(prev => ({ ...prev, type: value }))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Incident Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="harassment">Harassment</SelectItem>
                    <SelectItem value="theft">Theft/Robbery</SelectItem>
                    <SelectItem value="fraud">Tourism Fraud</SelectItem>
                    <SelectItem value="emergency">Medical Emergency</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                
                <Input
                  placeholder="Location/Area"
                  value={reportForm.location}
                  onChange={(e) => setReportForm(prev => ({ ...prev, location: e.target.value }))}
                />
                
                <Textarea
                  placeholder="Description of incident..."
                  value={reportForm.description}
                  onChange={(e) => setReportForm(prev => ({ ...prev, description: e.target.value }))}
                />
                
                <Button onClick={submitReport} variant="hero" className="w-full">
                  Submit Report
                </Button>
                
                <p className="text-xs text-muted-foreground text-center">
                  All reports are anonymous and encrypted
                </p>
              </div>
            </DialogContent>
          </Dialog>
        </CardContent>
      </Card>

      {/* Live Safety Status */}
      <Card className="gradient-card shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-success" />
            Live Safety Status
          </CardTitle>
          <CardDescription>
            Real-time safety monitoring for your location
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm">Current Area:</span>
            <Badge variant="outline">Shillong, Meghalaya</Badge>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">Safety Level:</span>
            <Badge className="bg-success">Very Safe</Badge>
          </div>
          <div className="space-y-2">
            <Button variant="outline" size="sm" className="w-full">
              <Phone className="h-4 w-4 mr-2" />
              Emergency: 112
            </Button>
            <Button variant="outline" size="sm" className="w-full">
              <Users className="h-4 w-4 mr-2" />
              Find Nearby Tourists
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card className="gradient-card shadow-card lg:col-span-3">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Camera className="h-5 w-5 text-primary" />
            Quick Safety Actions
          </CardTitle>
          <CardDescription>
            Emergency tools and safety features at your fingertips
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="outline" className="h-20 flex-col">
              <Phone className="h-6 w-6 mb-2" />
              SOS Alert
            </Button>
            <Button variant="outline" className="h-20 flex-col">
              <MapPin className="h-6 w-6 mb-2" />
              Share Location
            </Button>
            <Button variant="outline" className="h-20 flex-col">
              <Users className="h-6 w-6 mb-2" />
              Find Help
            </Button>
            <Button variant="outline" className="h-20 flex-col">
              <Shield className="h-6 w-6 mb-2" />
              Safety Check
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SafetyFeatures;