import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MapPin, Star, Shield, Camera } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import arunachalImage from "@/assets/arunachal-pradesh.jpg";
import assamImage from "@/assets/assam.jpg";
import manipurImage from "@/assets/manipur.jpg";
import meghalayaImage from "@/assets/meghalaya.jpg";
import mizoramImage from "@/assets/mizoram.jpg";
import nagalandImage from "@/assets/nagaland.jpg";
import tripuraImage from "@/assets/tripura.jpg";

const statesData = {
  arunachal: {
    name: "Arunachal Pradesh",
    description: "The Land of Dawn-Lit Mountains offers breathtaking Himalayan landscapes, ancient monasteries, and rich tribal culture. Home to the famous Tawang Monastery and pristine natural beauty.",
    safetyScore: 85,
    attractions: ["Tawang Monastery", "Bumla Pass", "Sela Pass", "Namdapha National Park"],
    image: arunachalImage,
    coordinates: { x: 85, y: 25 }
  },
  assam: {
    name: "Assam",
    description: "Famous for its tea gardens, wildlife sanctuaries, and the mighty Brahmaputra River. Kaziranga National Park is home to the one-horned rhinoceros, a UNESCO World Heritage Site.",
    safetyScore: 80,
    attractions: ["Kaziranga National Park", "Majuli Island", "Kamakhya Temple", "Tea Gardens"],
    image: assamImage,
    coordinates: { x: 75, y: 45 }
  },
  manipur: {
    name: "Manipur",
    description: "The Jewel of India features the beautiful Loktak Lake with floating islands, vibrant festivals, and rich martial arts traditions. Known for its scenic beauty and cultural heritage.",
    safetyScore: 78,
    attractions: ["Loktak Lake", "Keibul Lamjao National Park", "Imphal War Cemetery", "Sangai Festival"],
    image: manipurImage,
    coordinates: { x: 70, y: 60 }
  },
  meghalaya: {
    name: "Meghalaya",
    description: "The Abode of Clouds is famous for its living root bridges, stunning waterfalls, and the wettest places on Earth. Cherrapunji and Mawsynram offer unique monsoon experiences.",
    safetyScore: 90,
    attractions: ["Living Root Bridges", "Cherrapunji", "Mawlynnong Village", "Dawki River"],
    image: meghalayaImage,
    coordinates: { x: 65, y: 50 }
  },
  mizoram: {
    name: "Mizoram",
    description: "The Land of Hill People offers rolling hills, bamboo forests, and vibrant tribal culture. Known for its peaceful environment, unique festivals, and traditional handicrafts.",
    safetyScore: 88,
    attractions: ["Blue Mountain", "Champhai Hills", "Reiek Tourist Resort", "Aizawl City"],
    image: mizoramImage,
    coordinates: { x: 72, y: 75 }
  },
  nagaland: {
    name: "Nagaland",
    description: "The Land of Festivals showcases rich tribal heritage through the famous Hornbill Festival. Experience authentic Naga culture, traditional villages, and stunning mountain landscapes.",
    safetyScore: 82,
    attractions: ["Hornbill Festival", "Kohima War Cemetery", "Dzukou Valley", "Mon District"],
    image: nagalandImage,
    coordinates: { x: 78, y: 40 }
  },
  tripura: {
    name: "Tripura",
    description: "Rich in royal heritage with beautiful palaces, ancient temples, and diverse tribal culture. The Ujjayanta Palace and Neermahal showcase the state's regal past.",
    safetyScore: 75,
    attractions: ["Ujjayanta Palace", "Neermahal", "Unakoti", "Sepahijala Wildlife Sanctuary"],
    image: tripuraImage,
    coordinates: { x: 68, y: 65 }
  }
};

const SevenSistersMap = () => {
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [hoveredState, setHoveredState] = useState<string | null>(null);
  const navigate = useNavigate();

  const getSafetyColor = (score: number) => {
    if (score >= 85) return "success";
    if (score >= 75) return "warning";
    return "destructive";
  };

  const getSafetyLabel = (score: number) => {
    if (score >= 85) return "Very Safe";
    if (score >= 75) return "Safe";
    return "Caution Advised";
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <div className="text-center mb-12 animate-fade-in-up">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 text-foreground">Seven Sisters of India</h2>
        <p className="text-muted-foreground text-lg leading-relaxed">Interactive safety and tourism map of Northeast India</p>
      </div>

      <div className="relative">
        {/* Map Container */}
        <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl border-2 border-border overflow-hidden shadow-elegant">
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full"
            style={{ background: 'linear-gradient(135deg, #f0f9ff 0%, #ecfdf5 100%)' }}
          >
            {/* State boundaries - simplified representation */}
            {Object.entries(statesData).map(([key, state]) => (
              <g key={key}>
                {/* State area - simplified polygon representation */}
                <circle
                  cx={state.coordinates.x}
                  cy={state.coordinates.y}
                  r={hoveredState === key ? "8" : "6"}
                  fill={hoveredState === key ? "hsl(var(--primary))" : "hsl(var(--secondary))"}
                  className="cursor-pointer transition-all duration-300 hover:opacity-80"
                  onClick={() => setSelectedState(key)}
                  onMouseEnter={() => setHoveredState(key)}
                  onMouseLeave={() => setHoveredState(null)}
                />
                {/* State label */}
                <text
                  x={state.coordinates.x}
                  y={state.coordinates.y + 12}
                  textAnchor="middle"
                  className="text-xs font-medium fill-foreground cursor-pointer"
                  onClick={() => setSelectedState(key)}
                >
                  {state.name.split(' ')[0]}
                </text>
                {/* Safety indicator */}
                <circle
                  cx={state.coordinates.x + 6}
                  cy={state.coordinates.y - 6}
                  r="2"
                  fill={
                    state.safetyScore >= 85 ? "hsl(var(--success))" :
                    state.safetyScore >= 75 ? "hsl(var(--warning))" : "hsl(var(--destructive))"
                  }
                  className="animate-pulse"
                />
              </g>
            ))}
          </svg>
        </div>

        {/* Legend */}
        <div className="mt-4 flex flex-wrap justify-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-success"></div>
            <span className="text-sm">Very Safe (85+)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-warning"></div>
            <span className="text-sm">Safe (75-84)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-destructive"></div>
            <span className="text-sm">Caution Advised (&lt;75)</span>
          </div>
        </div>
      </div>

      {/* State Information Modal */}
      <Dialog open={!!selectedState} onOpenChange={() => setSelectedState(null)}>
        <DialogContent className="max-w-2xl">
          {selectedState && (
            <>
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  {statesData[selectedState as keyof typeof statesData].name}
                </DialogTitle>
              </DialogHeader>
              <div className="grid gap-4">
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <img
                    src={statesData[selectedState as keyof typeof statesData].image}
                    alt={statesData[selectedState as keyof typeof statesData].name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge 
                      variant={getSafetyColor(statesData[selectedState as keyof typeof statesData].safetyScore) as any}
                      className="flex items-center gap-1"
                    >
                      <Shield className="h-3 w-3" />
                      {getSafetyLabel(statesData[selectedState as keyof typeof statesData].safetyScore)}
                    </Badge>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  {statesData[selectedState as keyof typeof statesData].description}
                </p>
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Star className="h-4 w-4 text-accent" />
                    Popular Attractions
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {statesData[selectedState as keyof typeof statesData].attractions.map((attraction, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <Camera className="h-3 w-3 text-muted-foreground" />
                        {attraction}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2 pt-4">
                  <Button 
                    variant="hero" 
                    className="flex-1"
                    onClick={() => navigate(`/state/${selectedState}`)}
                  >
                    Explore Attractions
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Safety Report
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SevenSistersMap;