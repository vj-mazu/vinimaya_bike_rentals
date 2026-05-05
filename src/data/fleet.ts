export interface Bike {
  id: number;
  name: string;
  price: string;
  image: string;
  type: string;
  cc: string;
  hp: string;
  weight: string;
  seat: string;
  bestFor: string;
  deposit: string;
  description: string;
}

export const fleet: Bike[] = [
  {
    id: 1,
    name: "Royal Enfield Himalayan 450",
    price: "INR 1500",
    cc: "452 cc",
    hp: "40 hp",
    weight: "196 kg",
    seat: "825 mm",
    type: "Adventure Tourer",
    bestFor: "Nandi Hills, Coorg, Chikmagalur, long highway rides",
    deposit: "Model-based refundable deposit",
    image: "/images/WhatsApp Image 2026-05-05 at 10.41.22 AM (1).jpeg",
    description:
      "A long-distance adventure motorcycle with upright ergonomics, strong road presence, and stable handling for highway and broken-road routes. Powered by the Sherpa 450 engine with a 6-speed gearbox."
  },
  {
    id: 2,
    name: "KTM Duke 200",
    price: "INR 1200",
    cc: "199.5 cc",
    hp: "25 hp",
    weight: "159 kg",
    seat: "822 mm",
    type: "Street Naked",
    bestFor: "Quick city sprints, stylish urban commute, weekend breakfast runs",
    deposit: "Model-based refundable deposit",
    image: "/images/WhatsApp Image 2026-05-05 at 10.41.27 AM (1).jpeg",
    description:
      "Aggressive streetfighter styling meets punchy single-cylinder performance. Nimble and fun for maneuvering through Bengaluru traffic."
  },
  {
    id: 3,
    name: "Royal Enfield Classic 350",
    price: "INR 950",
    cc: "349 cc",
    hp: "20.2 hp",
    weight: "195 kg",
    seat: "805 mm",
    type: "Modern Classic",
    bestFor: "Bengaluru cruising, airport rides, heritage routes",
    deposit: "Model-based refundable deposit",
    image: "/images/WhatsApp Image 2026-05-05 at 10.41.26 AM.jpeg",
    description:
      "A calm, comfortable cruiser with the refined J-series 349 cc engine, upright posture, and the familiar Royal Enfield riding character."
  },
  {
    id: 4,
    name: "Honda Activa / Dio",
    price: "INR 500",
    cc: "109.5 cc",
    hp: "7.76 hp",
    weight: "105 kg",
    seat: "765 mm",
    type: "City Scooter",
    bestFor: "Daily errands, metro hops, college and office commute",
    deposit: "Model-based refundable deposit",
    image: "/images/WhatsApp Image 2026-05-05 at 10.41.27 AM.jpeg",
    description:
      "A practical, dependable scooter lineup built for simple city movement, low fuel consumption, and easy parking in busy Bengaluru streets."
  },
  {
    id: 6,
    name: "Hero Xpulse 200 4V",
    price: "INR 850",
    cc: "199.6 cc",
    hp: "19.1 hp",
    weight: "158 kg",
    seat: "825 mm",
    type: "Dual Sport",
    bestFor: "City shortcuts, light trails, weekend dirt routes",
    deposit: "Model-based refundable deposit",
    image: "/images/WhatsApp Image 2026-05-05 at 10.41.25 AM.jpeg",
    description:
      "A light, easy-to-handle dual-sport bike with spoke wheels and long-travel suspension for practical city use plus weekend exploration."
  }
];

export const rentalChecklist = [
  "Original driving license required at pickup",
  "Aadhaar or passport-size ID proof for verification",
  "PAN or secondary ID may be requested for premium bikes",
  "Helmet provided with every rental",
  "Fuel, traffic fines, and damage charges are customer responsibility",
  "Doorstep delivery available in selected Bengaluru areas"
];
