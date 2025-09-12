import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import * as L from "leaflet";
import { MapPin, Star, Shield, Camera } from "lucide-react";
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

// State data with coordinates
const statesData = {
  arunachal: {
    name: "Arunachal Pradesh",
    description: "The Land of Dawn-Lit Mountains offers breathtaking Himalayan landscapes, ancient monasteries, and rich tribal culture. Home to the famous Tawang Monastery and pristine natural beauty.",
    safetyScore: 85,
    attractions: ["Tawang Monastery", "Bumla Pass", "Sela Pass", "Namdapha National Park"],
    image: arunachalImage,
    coordinates: [27.1004, 93.6167]
  },
  assam: {
    name: "Assam",
    description: "Famous for its tea gardens, wildlife sanctuaries, and the mighty Brahmaputra River. Kaziranga National Park is home to the one-horned rhinoceros, a UNESCO World Heritage Site.",
    safetyScore: 80,
    attractions: ["Kaziranga National Park", "Majuli Island", "Kamakhya Temple", "Tea Gardens"],
    image: assamImage,
    coordinates: [26.2006, 92.9376]
  },
  manipur: {
    name: "Manipur",
    description: "The Jewel of India features the beautiful Loktak Lake with floating islands, vibrant festivals, and rich martial arts traditions. Known for its scenic beauty and cultural heritage.",
    safetyScore: 78,
    attractions: ["Loktak Lake", "Keibul Lamjao National Park", "Imphal War Cemetery", "Sangai Festival"],
    image: manipurImage,
    coordinates: [24.6637, 93.9063]
  },
  meghalaya: {
    name: "Meghalaya",
    description: "The Abode of Clouds is famous for its living root bridges, stunning waterfalls, and the wettest places on Earth. Cherrapunji and Mawsynram offer unique monsoon experiences.",
    safetyScore: 90,
    attractions: ["Living Root Bridges", "Cherrapunji", "Mawlynnong Village", "Dawki River"],
    image: meghalayaImage,
    coordinates: [25.4670, 91.3662]
  },
  mizoram: {
    name: "Mizoram",
    description: "The Land of Hill People offers rolling hills, bamboo forests, and vibrant tribal culture. Known for its peaceful environment, unique festivals, and traditional handicrafts.",
    safetyScore: 88,
    attractions: ["Blue Mountain", "Champhai Hills", "Reiek Tourist Resort", "Aizawl City"],
    image: mizoramImage,
    coordinates: [23.1645, 92.9376]
  },
  nagaland: {
    name: "Nagaland",
    description: "The Land of Festivals showcases rich tribal heritage through the famous Hornbill Festival. Experience authentic Naga culture, traditional villages, and stunning mountain landscapes.",
    safetyScore: 82,
    attractions: ["Hornbill Festival", "Kohima War Cemetery", "Dzukou Valley", "Mon District"],
    image: nagalandImage,
    coordinates: [26.1584, 94.5624]
  },
  tripura: {
    name: "Tripura",
    description: "Rich in royal heritage with beautiful palaces, ancient temples, and diverse tribal culture. The Ujjayanta Palace and Neermahal showcase the state's regal past.",
    safetyScore: 75,
    attractions: ["Ujjayanta Palace", "Neermahal", "Unakoti", "Sepahijala Wildlife Sanctuary"],
    image: tripuraImage,
    coordinates: [23.9408, 91.9882]
  }
};

const center = [25.5, 93.5];

const SevenSistersMap = () => {
  const [selectedState, setSelectedState] = useState<string | null>(null);
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

  // Fix for default marker icon in leaflet + webpack
  delete (L.Icon.Default.prototype as any)._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png"
  });

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <div className="text-center mb-12 animate-fade-in-up">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 text-foreground">Seven Sisters of India</h2>
        <p className="text-muted-foreground text-lg leading-relaxed">Interactive safety and tourism map of Northeast India</p>
      </div>

      <div className="relative">
        <div className="relative z-0 w-full rounded-2xl border-2 border-border overflow-hidden shadow-elegant" style={{height: 500}}>
          <MapContainer center={center} zoom={6} style={{ height: "100%", width: "100%" }}>
            <TileLayer
              attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {Object.entries(statesData).map(([key, state]) => (
              <Marker
                key={key}
                position={state.coordinates as [number, number]}
                eventHandlers={{
                  click: () => setSelectedState(key),
                }}
              >
                <Popup closeButton={false}>
                  <div className="font-bold">{state.name}</div>
                  <div className="text-xs text-muted-foreground">{getSafetyLabel(state.safetyScore)}</div>
                  <div className="mt-1 text-xs">{state.attractions[0]}</div>
                  {/* No More Info button here to avoid double dialog */}
                </Popup>
              </Marker>
            ))}
          </MapContainer>
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
        <DialogContent className="max-w-2xl" style={{ zIndex: 9999 }}>
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