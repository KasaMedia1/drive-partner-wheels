export type VehicleCategory = "masina" | "scuter" | "bicicleta";
export type Audience = "uber-bolt" | "curieri";
export type Transmission = "manual" | "automat";
export type FuelType = "benzina" | "diesel" | "hybrid" | "electric";
export type Availability = "disponibil" | "lista";

export interface Vehicle {
  id: string;
  slug: string;
  name: string;
  year: number;
  category: VehicleCategory;
  audience: Audience[];
  transmission?: Transmission;
  fuel: FuelType;
  autonomyKm?: number; // electric range or fuel km
  consumptionLper100?: number;
  seats?: number;
  cargoLiters?: number;
  pricePerDay: number;
  pricePerWeek: number;
  pricePerMonth: number;
  availability: Availability;
  shortDescription: string;
  highlights: string[];
  included: string[];
  rules: string[];
  images: string[]; // [primary, alt-angle, ...]
}

const u = (id: string) => `https://images.unsplash.com/${id}?q=80&w=1600&auto=format&fit=crop`;

export const fleet: Vehicle[] = [
  {
    id: "dacia-logan-2022",
    slug: "dacia-logan-2022",
    name: "Dacia Logan",
    year: 2022,
    category: "masina",
    audience: ["uber-bolt"],
    transmission: "automat",
    fuel: "benzina",
    autonomyKm: 700,
    consumptionLper100: 6.2,
    seats: 5,
    pricePerDay: 140,
    pricePerWeek: 850,
    pricePerMonth: 3200,
    availability: "disponibil",
    shortDescription: "Sedan economic, ideal pentru curse zilnice Uber si Bolt in Bucuresti.",
    highlights: ["Cutie automata", "Consum mic", "Spatiu generos"],
    included: ["Asigurare RCA + CASCO", "Service complet", "Asistenta rutiera 24/7", "Inlocuire in 2h"],
    rules: ["Minim 21 ani", "Permis de minim 2 ani", "Garantie returnabila 1500 lei"],
    images: [
      u("photo-1549924231-f129b911e442"),
      u("photo-1502877338535-766e1452684a"),
      u("photo-1503376780353-7e6692767b70"),
    ],
  },
  {
    id: "toyota-corolla-hybrid-2023",
    slug: "toyota-corolla-hybrid-2023",
    name: "Toyota Corolla Hybrid",
    year: 2023,
    category: "masina",
    audience: ["uber-bolt"],
    transmission: "automat",
    fuel: "hybrid",
    autonomyKm: 1000,
    consumptionLper100: 4.1,
    seats: 5,
    pricePerDay: 220,
    pricePerWeek: 1400,
    pricePerMonth: 5200,
    availability: "disponibil",
    shortDescription: "Hibrid premium, consum minim si confort superior pentru curse lungi.",
    highlights: ["Consum 4.1L", "Categorie Comfort/XL", "Cutie automata"],
    included: ["Asigurare full", "Revizii incluse", "Asistenta 24/7", "Inlocuire in 2h"],
    rules: ["Minim 23 ani", "Permis de minim 3 ani", "Garantie 2000 lei"],
    images: [
      u("photo-1623006772851-a8bf2c47d3a7"),
      u("photo-1606664515524-ed2f786a0bd6"),
      u("photo-1617469767053-d3b523a0b982"),
    ],
  },
  {
    id: "hyundai-i20-2022",
    slug: "hyundai-i20-2022",
    name: "Hyundai i20",
    year: 2022,
    category: "masina",
    audience: ["uber-bolt", "curieri"],
    transmission: "manual",
    fuel: "benzina",
    autonomyKm: 650,
    consumptionLper100: 5.5,
    seats: 5,
    pricePerDay: 150,
    pricePerWeek: 900,
    pricePerMonth: 3400,
    availability: "disponibil",
    shortDescription: "Hatchback agil pentru oras, perfect pentru livrari si curse scurte.",
    highlights: ["Manevrabil", "Consum redus", "Aer conditionat"],
    included: ["Asigurare completa", "Service inclus", "Asistenta 24/7"],
    rules: ["Minim 21 ani", "Permis de minim 2 ani", "Garantie 1500 lei"],
    images: [
      u("photo-1592805144716-feeccccef5ac"),
      u("photo-1494976388531-d1058494cdd8"),
      u("photo-1511919884226-fd3cad34687c"),
    ],
  },
  {
    id: "skoda-octavia-2023",
    slug: "skoda-octavia-2023",
    name: "Skoda Octavia",
    year: 2023,
    category: "masina",
    audience: ["uber-bolt"],
    transmission: "automat",
    fuel: "diesel",
    autonomyKm: 1200,
    consumptionLper100: 4.8,
    seats: 5,
    pricePerDay: 190,
    pricePerWeek: 1200,
    pricePerMonth: 4500,
    availability: "lista",
    shortDescription: "Sedan spatios pentru categorii premium pe Uber si Bolt.",
    highlights: ["Categorie XL", "Portbagaj urias", "Confort lung"],
    included: ["Asigurare full", "Revizii incluse", "Asistenta 24/7"],
    rules: ["Minim 23 ani", "Permis de minim 3 ani", "Garantie 2500 lei"],
    images: [
      u("photo-1606220588913-b3aacb4d2f46"),
      u("photo-1552519507-da3b142c6e3d"),
      u("photo-1503376780353-7e6692767b70"),
    ],
  },
  {
    id: "sym-symphony-125",
    slug: "sym-symphony-125",
    name: "SYM Symphony 125",
    year: 2023,
    category: "scuter",
    audience: ["curieri"],
    fuel: "benzina",
    autonomyKm: 250,
    consumptionLper100: 2.5,
    cargoLiters: 35,
    pricePerDay: 55,
    pricePerWeek: 280,
    pricePerMonth: 950,
    availability: "disponibil",
    shortDescription: "Scuter fiabil pentru curieri Glovo si Wolt, consum minim.",
    highlights: ["Top case 35L", "Pornire usoara", "Consum 2.5L"],
    included: ["Casca", "Asigurare", "Service inclus", "Inlocuire in 2h"],
    rules: ["Permis AM/A1", "Garantie 800 lei"],
    images: [
      u("photo-1568772585407-9361f9bf3a87"),
      u("photo-1571068316344-75bc76f77890"),
      u("photo-1558981403-c5f9899a28bc"),
    ],
  },
  {
    id: "piaggio-liberty-125",
    slug: "piaggio-liberty-125",
    name: "Piaggio Liberty 125",
    year: 2023,
    category: "scuter",
    audience: ["curieri"],
    fuel: "benzina",
    autonomyKm: 270,
    consumptionLper100: 2.4,
    cargoLiters: 40,
    pricePerDay: 60,
    pricePerWeek: 320,
    pricePerMonth: 1100,
    availability: "disponibil",
    shortDescription: "Scuter italian agil cu top case, pentru livrari rapide.",
    highlights: ["Roti mari", "Stabilitate", "Top case 40L"],
    included: ["Casca", "Asigurare", "Service inclus"],
    rules: ["Permis AM/A1", "Garantie 1000 lei"],
    images: [
      u("photo-1558981852-426c6c22a060"),
      u("photo-1571068316344-75bc76f77890"),
      u("photo-1525160354320-d8e92641c563"),
    ],
  },
  {
    id: "niu-n1s-electric",
    slug: "niu-n1s-electric",
    name: "NIU N1S Electric",
    year: 2024,
    category: "scuter",
    audience: ["curieri"],
    fuel: "electric",
    autonomyKm: 80,
    cargoLiters: 35,
    pricePerDay: 50,
    pricePerWeek: 250,
    pricePerMonth: 850,
    availability: "disponibil",
    shortDescription: "Scuter electric silentios, fara costuri de combustibil.",
    highlights: ["Zero emisii", "Cost minim/km", "Baterie detasabila"],
    included: ["Casca", "2 baterii", "Asigurare", "Inlocuire in 2h"],
    rules: ["Permis AM/A1", "Garantie 1200 lei"],
    images: [
      u("photo-1609630875171-b1321377ee65"),
      u("photo-1591637333472-a4f4b0a4a3a7"),
      u("photo-1558981806-ec527fa84c39"),
    ],
  },
  {
    id: "tenways-cargo",
    slug: "tenways-cargo",
    name: "Tenways Cargo e-bike",
    year: 2024,
    category: "bicicleta",
    audience: ["curieri"],
    fuel: "electric",
    autonomyKm: 70,
    cargoLiters: 60,
    pricePerDay: 40,
    pricePerWeek: 180,
    pricePerMonth: 600,
    availability: "disponibil",
    shortDescription: "Bicicleta electrica cargo, ideala pentru livrari mari Glovo si Wolt.",
    highlights: ["Cargo 60L", "Asistare puternica", "Fara permis"],
    included: ["Casca", "Lacat", "Geanta termica", "Service inclus"],
    rules: ["Minim 18 ani", "Garantie 600 lei"],
    images: [
      u("photo-1571068316344-75bc76f77890"),
      u("photo-1485965120184-e220f721d03e"),
      u("photo-1532298229144-0ec0c57515c7"),
    ],
  },
  {
    id: "himiway-cruiser",
    slug: "himiway-cruiser",
    name: "Himiway Cruiser",
    year: 2024,
    category: "bicicleta",
    audience: ["curieri"],
    fuel: "electric",
    autonomyKm: 90,
    cargoLiters: 35,
    pricePerDay: 45,
    pricePerWeek: 200,
    pricePerMonth: 700,
    availability: "disponibil",
    shortDescription: "Fat-bike electric robust, autonomie mare pentru ture lungi.",
    highlights: ["Autonomie 90km", "Suspensie", "Anvelope groase"],
    included: ["Casca", "Lacat", "Geanta termica"],
    rules: ["Minim 18 ani", "Garantie 700 lei"],
    images: [
      u("photo-1485965120184-e220f721d03e"),
      u("photo-1532298229144-0ec0c57515c7"),
      u("photo-1502744688674-c619d1586c9e"),
    ],
  },
  {
    id: "fiido-m1-pro",
    slug: "fiido-m1-pro",
    name: "Fiido M1 Pro",
    year: 2023,
    category: "bicicleta",
    audience: ["curieri"],
    fuel: "electric",
    autonomyKm: 60,
    cargoLiters: 25,
    pricePerDay: 35,
    pricePerWeek: 160,
    pricePerMonth: 550,
    availability: "lista",
    shortDescription: "Bicicleta electrica pliabila, usor de depozitat si manevrat.",
    highlights: ["Pliabila", "Usoara", "Consum minim"],
    included: ["Casca", "Lacat", "Service inclus"],
    rules: ["Minim 18 ani", "Garantie 500 lei"],
    images: [
      u("photo-1532298229144-0ec0c57515c7"),
      u("photo-1502744688674-c619d1586c9e"),
      u("photo-1485965120184-e220f721d03e"),
    ],
  },
];

export function getVehicleById(id: string): Vehicle | undefined {
  return fleet.find((v) => v.id === id || v.slug === id);
}

export const categoryLabels: Record<VehicleCategory, string> = {
  masina: "Masina",
  scuter: "Scuter",
  bicicleta: "Bicicleta electrica",
};

export const audienceLabels: Record<Audience, string> = {
  "uber-bolt": "Uber / Bolt",
  curieri: "Curierat",
};
