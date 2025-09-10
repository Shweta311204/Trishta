import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, MapPin, Star, Clock, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";

import arunachalImage from "@/assets/arunachal-pradesh.jpg";
import assamImage from "@/assets/assam.jpg";
import manipurImage from "@/assets/manipur.jpg";
import meghalayaImage from "@/assets/meghalaya.jpg";
import mizoramImage from "@/assets/mizoram.jpg";
import nagalandImage from "@/assets/nagaland.jpg";
import tripuraImage from "@/assets/tripura.jpg";

import arunachalAttractions from "@/assets/arunachal-attractions.jpg";
import assamAttractions from "@/assets/assam-attractions.jpg";
import manipurAttractions from "@/assets/manipur-attractions.jpg";
import meghalayaAttractions from "@/assets/meghalaya-attractions.jpg";
import mizoramAttractions from "@/assets/mizoram-attractions.jpg";
import nagalandAttractions from "@/assets/nagaland-attractions.jpg";
import tripuraAttractions from "@/assets/tripura-attractions.jpg";

const stateData = {
  arunachal: {
    name: "Arunachal Pradesh",
    tagline: "The Land of Dawn-Lit Mountains",
    description: "Experience breathtaking Himalayan landscapes, ancient monasteries, and rich tribal culture in India's easternmost state.",
    heroImage: arunachalImage,
    attractionsImage: arunachalAttractions,
    safetyScore: 85,
    bestTime: "Oct - Apr",
    attractions: [
      {
        name: "Tawang Monastery",
        description: "Largest monastery in India and second largest in the world, home to 450 monks.",
        image: arunachalAttractions,
        rating: 4.8,
        duration: "2-3 hours",
        category: "Religious"
      },
      {
        name: "Bumla Pass",
        description: "Historic mountain pass at 15,200 feet offering stunning views of the Himalayas.",
        image: arunachalAttractions,
        rating: 4.6,
        duration: "Full day",
        category: "Adventure"
      },
      {
        name: "Sela Pass",
        description: "High altitude mountain pass with pristine lakes and snow-capped peaks.",
        image: arunachalAttractions,
        rating: 4.7,
        duration: "Half day",
        category: "Nature"
      },
      {
        name: "Namdapha National Park",
        description: "Biodiversity hotspot with tigers, leopards, and over 1000 bird species.",
        image: arunachalAttractions,
        rating: 4.5,
        duration: "2-3 days",
        category: "Wildlife"
      }
    ]
  },
  assam: {
    name: "Assam",
    tagline: "The Gateway to Northeast India",
    description: "Discover world-famous tea gardens, one-horned rhinoceros, and the mighty Brahmaputra River.",
    heroImage: assamImage,
    attractionsImage: assamAttractions,
    safetyScore: 80,
    bestTime: "Nov - Apr",
    attractions: [
      {
        name: "Kaziranga National Park",
        description: "UNESCO World Heritage Site, home to two-thirds of world's one-horned rhinoceros.",
        image: assamAttractions,
        rating: 4.9,
        duration: "2-3 days",
        category: "Wildlife"
      },
      {
        name: "Majuli Island",
        description: "World's largest river island with unique Vaishnavite monasteries.",
        image: assamAttractions,
        rating: 4.6,
        duration: "2 days",
        category: "Cultural"
      },
      {
        name: "Kamakhya Temple",
        description: "Ancient tantric temple dedicated to Goddess Kamakhya, one of 51 Shakti Peethas.",
        image: assamAttractions,
        rating: 4.7,
        duration: "2-3 hours",
        category: "Religious"
      },
      {
        name: "Tea Gardens",
        description: "Visit working tea estates and learn about Assam's world-famous tea production.",
        image: assamAttractions,
        rating: 4.4,
        duration: "Half day",
        category: "Nature"
      }
    ]
  },
  manipur: {
    name: "Manipur",
    tagline: "The Jewel of India",
    description: "Explore the beautiful Loktak Lake, vibrant festivals, and rich martial arts traditions.",
    heroImage: manipurImage,
    attractionsImage: manipurAttractions,
    safetyScore: 78,
    bestTime: "Oct - Mar",
    attractions: [
      {
        name: "Loktak Lake",
        description: "Largest freshwater lake in Northeast India with unique floating islands.",
        image: manipurAttractions,
        rating: 4.8,
        duration: "Full day",
        category: "Nature"
      },
      {
        name: "Keibul Lamjao National Park",
        description: "World's only floating national park, home to endangered Sangai deer.",
        image: manipurAttractions,
        rating: 4.6,
        duration: "Half day",
        category: "Wildlife"
      },
      {
        name: "Imphal War Cemetery",
        description: "Memorial to Commonwealth soldiers who died in the Battle of Imphal.",
        image: manipurAttractions,
        rating: 4.5,
        duration: "1-2 hours",
        category: "Historical"
      },
      {
        name: "Sangai Festival",
        description: "Annual cultural festival showcasing Manipur's rich traditions and arts.",
        image: manipurAttractions,
        rating: 4.7,
        duration: "Multiple days",
        category: "Cultural"
      }
    ]
  },
  meghalaya: {
    name: "Meghalaya",
    tagline: "The Abode of Clouds",
    description: "Marvel at living root bridges, stunning waterfalls, and the wettest places on Earth.",
    heroImage: meghalayaImage,
    attractionsImage: meghalayaAttractions,
    safetyScore: 90,
    bestTime: "Oct - May",
    attractions: [
      {
        name: "Living Root Bridges",
        description: "Incredible bio-engineering marvels grown from rubber tree roots by Khasi tribes.",
        image: meghalayaAttractions,
        rating: 4.9,
        duration: "Full day",
        category: "Nature"
      },
      {
        name: "Cherrapunji",
        description: "Former wettest place on Earth with spectacular waterfalls and limestone caves.",
        image: meghalayaAttractions,
        rating: 4.7,
        duration: "2 days",
        category: "Nature"
      },
      {
        name: "Mawlynnong Village",
        description: "Asia's cleanest village with community-based tourism and canopy walks.",
        image: meghalayaAttractions,
        rating: 4.8,
        duration: "Half day",
        category: "Cultural"
      },
      {
        name: "Dawki River",
        description: "Crystal clear river with boat rides offering stunning views of Bangladesh border.",
        image: meghalayaAttractions,
        rating: 4.6,
        duration: "Half day",
        category: "Nature"
      }
    ]
  },
  mizoram: {
    name: "Mizoram",
    tagline: "The Land of Hill People",
    description: "Experience rolling hills, bamboo forests, and vibrant tribal culture in peaceful harmony.",
    heroImage: mizoramImage,
    attractionsImage: mizoramAttractions,
    safetyScore: 88,
    bestTime: "Nov - Mar",
    attractions: [
      {
        name: "Blue Mountain",
        description: "Highest peak in Mizoram offering panoramic views of the surrounding hills.",
        image: mizoramAttractions,
        rating: 4.7,
        duration: "Full day",
        category: "Adventure"
      },
      {
        name: "Champhai Hills",
        description: "Scenic border town with views of Myanmar and traditional Mizo villages.",
        image: mizoramAttractions,
        rating: 4.5,
        duration: "2 days",
        category: "Nature"
      },
      {
        name: "Reiek Tourist Resort",
        description: "Hill station resort with adventure activities and cultural performances.",
        image: mizoramAttractions,
        rating: 4.4,
        duration: "2-3 days",
        category: "Adventure"
      },
      {
        name: "Aizawl City",
        description: "Capital city built on hillsides with markets, museums, and Mizo cultural centers.",
        image: mizoramAttractions,
        rating: 4.3,
        duration: "1-2 days",
        category: "Cultural"
      }
    ]
  },
  nagaland: {
    name: "Nagaland",
    tagline: "The Land of Festivals",
    description: "Immerse yourself in rich tribal heritage through festivals, traditional villages, and mountain landscapes.",
    heroImage: nagalandImage,
    attractionsImage: nagalandAttractions,
    safetyScore: 82,
    bestTime: "Oct - May",
    attractions: [
      {
        name: "Hornbill Festival",
        description: "Festival of festivals showcasing all Naga tribes' culture, music, and traditions.",
        image: nagalandAttractions,
        rating: 4.9,
        duration: "Multiple days",
        category: "Cultural"
      },
      {
        name: "Kohima War Cemetery",
        description: "Memorial to soldiers who died in the Battle of Kohima during World War II.",
        image: nagalandAttractions,
        rating: 4.6,
        duration: "1-2 hours",
        category: "Historical"
      },
      {
        name: "Dzukou Valley",
        description: "Valley of flowers with seasonal blooms and trekking opportunities.",
        image: nagalandAttractions,
        rating: 4.8,
        duration: "2-3 days",
        category: "Adventure"
      },
      {
        name: "Mon District",
        description: "Home to Konyak tribe known for traditional headhunting history and tattoos.",
        image: nagalandAttractions,
        rating: 4.5,
        duration: "2-3 days",
        category: "Cultural"
      }
    ]
  },
  tripura: {
    name: "Tripura",
    tagline: "The Land of Royal Heritage",
    description: "Discover beautiful palaces, ancient temples, and diverse tribal culture in this regal state.",
    heroImage: tripuraImage,
    attractionsImage: tripuraAttractions,
    safetyScore: 75,
    bestTime: "Oct - Mar",
    attractions: [
      {
        name: "Ujjayanta Palace",
        description: "Former royal palace turned museum showcasing Tripura's rich history and culture.",
        image: tripuraAttractions,
        rating: 4.7,
        duration: "2-3 hours",
        category: "Historical"
      },
      {
        name: "Neermahal",
        description: "Water palace built in the middle of Rudrasagar Lake, unique architectural marvel.",
        image: tripuraAttractions,
        rating: 4.8,
        duration: "Half day",
        category: "Historical"
      },
      {
        name: "Unakoti",
        description: "Ancient rock-cut sculptures and murals dating back to 7th-9th centuries.",
        image: tripuraAttractions,
        rating: 4.6,
        duration: "Full day",
        category: "Historical"
      },
      {
        name: "Sepahijala Wildlife Sanctuary",
        description: "Home to rare spectacled langurs, clouded leopards, and diverse bird species.",
        image: tripuraAttractions,
        rating: 4.4,
        duration: "Half day",
        category: "Wildlife"
      }
    ]
  }
};

const StateAttractions = () => {
  const { state } = useParams();
  const navigate = useNavigate();
  
  const stateInfo = state ? stateData[state as keyof typeof stateData] : null;

  if (!stateInfo) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">State not found</h1>
          <Button onClick={() => navigate('/')}>Go Home</Button>
        </div>
      </div>
    );
  }

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

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Nature": return "bg-emerald-500/20 text-emerald-700 border-emerald-500/30";
      case "Cultural": return "bg-purple-500/20 text-purple-700 border-purple-500/30";
      case "Religious": return "bg-orange-500/20 text-orange-700 border-orange-500/30";
      case "Adventure": return "bg-red-500/20 text-red-700 border-red-500/30";
      case "Wildlife": return "bg-green-600/20 text-green-800 border-green-600/30";
      case "Historical": return "bg-amber-500/20 text-amber-700 border-amber-500/30";
      default: return "bg-gray-500/20 text-gray-700 border-gray-500/30";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${stateInfo.heroImage})` 
          }}
        />
        <div className="relative z-10 h-full flex items-center justify-center text-center text-white">
          <div className="max-w-4xl mx-auto px-4">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/')}
              className="absolute top-8 left-8 text-white hover:bg-white/20 font-semibold"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Map
            </Button>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
              {stateInfo.name}
            </h1>
            <p className="text-xl md:text-2xl mb-6 font-medium opacity-90">
              {stateInfo.tagline}
            </p>
            <p className="text-lg max-w-2xl mx-auto mb-8 opacity-80 leading-relaxed">
              {stateInfo.description}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge 
                variant={getSafetyColor(stateInfo.safetyScore) as any}
                className="px-4 py-2 text-sm font-semibold"
              >
                Safety Score: {stateInfo.safetyScore}/100 - {getSafetyLabel(stateInfo.safetyScore)}
              </Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm font-semibold bg-white/20 text-white border-white/30">
                <Clock className="h-4 w-4 mr-2" />
                Best Time: {stateInfo.bestTime}
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Attractions Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Top Tourist Attractions</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Discover the most beautiful and culturally significant places in {stateInfo.name}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {stateInfo.attractions.map((attraction, index) => (
              <Card key={index} className="gradient-card shadow-card hover:shadow-glow transition-all duration-300 overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={attraction.image}
                    alt={attraction.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className={`${getCategoryColor(attraction.category)} border font-semibold`}>
                      {attraction.category}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <div className="flex items-center space-x-1 bg-black/50 rounded-full px-3 py-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-white font-semibold">{attraction.rating}</span>
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="text-xl">{attraction.name}</span>
                    <div className="flex items-center text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1" />
                      <span className="text-sm">{attraction.duration}</span>
                    </div>
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {attraction.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2">
                    <Button className="flex-1" variant="hero">
                      <MapPin className="h-4 w-4 mr-2" />
                      Get Directions
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Camera className="h-4 w-4 mr-2" />
                      View Gallery
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Tips Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Travel Tips for {stateInfo.name}</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="gradient-card shadow-card">
                <CardHeader>
                  <CardTitle>Best Time to Visit</CardTitle>
                  <CardDescription>
                    {stateInfo.bestTime} offers the most pleasant weather and accessibility to attractions.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="gradient-card shadow-card">
                <CardHeader>
                  <CardTitle>Safety Guidelines</CardTitle>
                  <CardDescription>
                    Always inform local authorities of your travel plans and carry emergency contacts.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="gradient-card shadow-card">
                <CardHeader>
                  <CardTitle>Local Culture</CardTitle>
                  <CardDescription>
                    Respect local customs and traditions. Learn basic greetings in the local language.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="gradient-card shadow-card">
                <CardHeader>
                  <CardTitle>Permits Required</CardTitle>
                  <CardDescription>
                    Some areas may require special permits. Check with local tourism offices before visiting.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StateAttractions;