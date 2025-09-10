import { Router } from "express";

const router = Router();

const states = [
  {
    id: "arunachal",
    name: "Arunachal Pradesh",
    tagline: "The Land of Dawn-Lit Mountains",
    description: "Experience breathtaking Himalayan landscapes, ancient monasteries, and rich tribal culture in India's easternmost state.",
    heroImage: "/assets/arunachal-pradesh.jpg",
    attractionsImage: "/assets/arunachal-attractions.jpg",
    safetyScore: 85,
    bestTime: "Oct - Apr",
    attractions: [
      {
        name: "Tawang Monastery",
        description: "Largest monastery in India and second largest in the world, home to 450 monks.",
        image: "/assets/arunachal-attractions.jpg",
        rating: 4.8,
        duration: "2-3 hours",
        category: "Religious"
      },
      {
        name: "Bumla Pass",
        description: "Historic mountain pass at 15,200 feet offering stunning views of the Himalayas.",
        image: "/assets/arunachal-attractions.jpg",
        rating: 4.6,
        duration: "Full day",
        category: "Adventure"
      },
      {
        name: "Sela Pass",
        description: "High altitude mountain pass with pristine lakes and snow-capped peaks.",
        image: "/assets/arunachal-attractions.jpg",
        rating: 4.7,
        duration: "Half day",
        category: "Nature"
      },
      {
        name: "Namdapha National Park",
        description: "Biodiversity hotspot with tigers, leopards, and over 1000 bird species.",
        image: "/assets/arunachal-attractions.jpg",
        rating: 4.5,
        duration: "2-3 days",
        category: "Wildlife"
      }
    ]
  },
  // ...Repeat for assam, manipur, meghalaya, mizoram, nagaland, tripura (copy from your frontend stateData)...
];

// GET /api/states
router.get("/", (_req, res) => {
  res.json(states.map(({ id, name, tagline, safetyScore }) => ({ id, name, tagline, safetyScore })));
});

// GET /api/states/:id
router.get("/:id", (req, res) => {
  const state = states.find(s => s.id === req.params.id);
  if (!state) return res.status(404).json({ error: "State not found" });
  res.json(state);
});

export default router;