import corolla1 from "@/assets/fleet/corolla-1.jpg";
import corolla2 from "@/assets/fleet/corolla-2.jpg";
import corolla3 from "@/assets/fleet/corolla-3.jpg";
import camry1 from "@/assets/fleet/camry-1.jpg";
import camry2 from "@/assets/fleet/camry-2.jpg";
import camry3 from "@/assets/fleet/camry-3.jpg";
import camry4 from "@/assets/fleet/camry-4.jpg";
import aygo1 from "@/assets/fleet/aygo-1.jpg";
import aygo2 from "@/assets/fleet/aygo-2.jpg";
import aygo3 from "@/assets/fleet/aygo-3.jpg";
import c31 from "@/assets/fleet/c3-1.jpg";
import c32 from "@/assets/fleet/c3-2.jpg";
import ec31 from "@/assets/fleet/ec3-1.jpg";
import kisbee1 from "@/assets/fleet/kisbee-1.jpg";
import kisbee2 from "@/assets/fleet/kisbee-2.jpg";
import kisbee3 from "@/assets/fleet/kisbee-3.jpg";
import tweet1 from "@/assets/fleet/tweet-1.jpg";
import tweet2 from "@/assets/fleet/tweet-2.jpg";
import fiddle1 from "@/assets/fleet/fiddle-1.jpg";
import fiddle2 from "@/assets/fleet/fiddle-2.jpg";
import fiddle3 from "@/assets/fleet/fiddle-3.jpg";
import agilityFp1 from "@/assets/fleet/agility-fp-1.jpg";
import agilityFp2 from "@/assets/fleet/agility-fp-2.jpg";
import like1 from "@/assets/fleet/like-1.jpg";
import like2 from "@/assets/fleet/like-2.jpg";
import retro1 from "@/assets/fleet/retro-1.jpg";
import retro2 from "@/assets/fleet/retro-2.jpg";
import retro3 from "@/assets/fleet/retro-3.jpg";
import breezy1 from "@/assets/fleet/breezy-1.jpg";
import breezy2 from "@/assets/fleet/breezy-2.jpg";
import agility50_1 from "@/assets/fleet/agility50-1.jpg";
import agility50_2 from "@/assets/fleet/agility50-2.jpg";
import symphony50_1 from "@/assets/fleet/symphony50-1.jpg";
import symphony50_2 from "@/assets/fleet/symphony50-2.jpg";
import xpro1 from "@/assets/fleet/xpro-1.jpg";
import xpro2 from "@/assets/fleet/xpro-2.jpg";
import symphony125_1 from "@/assets/fleet/symphony125-1.jpg";
import symphony125_2 from "@/assets/fleet/symphony125-2.jpg";
import symphonyRs1 from "@/assets/fleet/symphonyrs-1.jpg";
import symphonyRs2 from "@/assets/fleet/symphonyrs-2.jpg";
import trevis1 from "@/assets/fleet/trevis-1.jpg";
import trevis2 from "@/assets/fleet/trevis-2.jpg";
import trevis3 from "@/assets/fleet/trevis-3.jpg";
import jetx1 from "@/assets/fleet/jetx-1.jpg";
import jetx2 from "@/assets/fleet/jetx-2.jpg";
import pcx1 from "@/assets/fleet/pcx-1.jpg";
import pcx2 from "@/assets/fleet/pcx-2.jpg";

export type VehicleCategory = "masina" | "scuter" | "bicicleta";
export type ScooterClass = "50cc" | "125cc" | "fara-permis" | "electric";
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
  scooterClass?: ScooterClass;
  audience: Audience[];
  transmission?: Transmission;
  fuel: FuelType;
  autonomyKm?: number;
  consumptionLper100?: number;
  seats?: number;
  cargoLiters?: number;
  topSpeedKmh?: number;
  pricePerDay: number;
  pricePerWeek: number;
  pricePerMonth: number;
  availability: Availability;
  shortDescription: string;
  highlights: string[];
  included: string[];
  rules: string[];
  images: string[];
}

const COMMON_INCLUDED_CAR = ["Asigurare RCA + CASCO", "Service complet", "Asistenta rutiera 24/7", "Inlocuire in 2h"];
const COMMON_RULES_CAR = ["Minim 21 ani", "Permis de minim 2 ani", "Garantie returnabila"];
const COMMON_INCLUDED_SCOOTER = ["Casca", "Asigurare", "Service inclus"];
const COMMON_INCLUDED_FP = ["Casca", "Asigurare", "Service inclus"];

export const fleet: Vehicle[] = [
  // ============ MASINI ============
  {
    id: "toyota-corolla-hybrid",
    slug: "toyota-corolla-hybrid",
    name: "Toyota Corolla Hybrid",
    year: 2024,
    category: "masina",
    audience: ["uber-bolt"],
    transmission: "automat",
    fuel: "hybrid",
    autonomyKm: 1000,
    consumptionLper100: 4.5,
    seats: 5,
    pricePerDay: 220,
    pricePerWeek: 1400,
    pricePerMonth: 5200,
    availability: "disponibil",
    shortDescription: "Sedan hibrid 1.8L cu 138 CP sistem total. Consum 4.0–5.3 L/100 km, ideal Uber/Bolt Comfort.",
    highlights: ["Hybrid 138 CP", "Cutie e-CVT", "Consum sub 5L"],
    included: COMMON_INCLUDED_CAR,
    rules: ["Minim 23 ani", "Permis de minim 3 ani", "Garantie 2000 lei"],
    images: [corolla1, corolla2, corolla3],
  },
  {
    id: "toyota-camry-hybrid",
    slug: "toyota-camry-hybrid",
    name: "Toyota Camry Hybrid",
    year: 2024,
    category: "masina",
    audience: ["uber-bolt"],
    transmission: "automat",
    fuel: "hybrid",
    autonomyKm: 1100,
    consumptionLper100: 5.1,
    seats: 5,
    pricePerDay: 280,
    pricePerWeek: 1750,
    pricePerMonth: 6500,
    availability: "disponibil",
    shortDescription: "Sedan premium 2.5L hibrid, 208 CP putere totala. Confort superior pentru categorii XL.",
    highlights: ["Hybrid 208 CP", "Categorie XL/Comfort", "Cutie e-CVT"],
    included: COMMON_INCLUDED_CAR,
    rules: ["Minim 25 ani", "Permis de minim 5 ani", "Garantie 3000 lei"],
    images: [camry1, camry2, camry3, camry4],
  },
  {
    id: "toyota-aygo-x",
    slug: "toyota-aygo-x",
    name: "Toyota Aygo X",
    year: 2024,
    category: "masina",
    audience: ["uber-bolt"],
    transmission: "manual",
    fuel: "benzina",
    autonomyKm: 700,
    consumptionLper100: 5.0,
    seats: 4,
    pricePerDay: 150,
    pricePerWeek: 900,
    pricePerMonth: 3300,
    availability: "disponibil",
    shortDescription: "Crossover urban 1.0L (72 CP), agil si economic. Perfect pentru oras si curse scurte.",
    highlights: ["1.0L benzina", "Manevrabilitate maxima", "Consum redus"],
    included: COMMON_INCLUDED_CAR,
    rules: COMMON_RULES_CAR,
    images: [aygo1, aygo2, aygo3],
  },
  {
    id: "citroen-c3",
    slug: "citroen-c3",
    name: "Citroën C3",
    year: 2024,
    category: "masina",
    audience: ["uber-bolt"],
    transmission: "manual",
    fuel: "benzina",
    autonomyKm: 750,
    consumptionLper100: 6.0,
    seats: 5,
    pricePerDay: 160,
    pricePerWeek: 950,
    pricePerMonth: 3500,
    availability: "disponibil",
    shortDescription: "Hatchback urban 1.2L Turbo (100 CP), confort tipic Citroën pentru ture lungi.",
    highlights: ["1.2L Turbo 100 CP", "Suspensie confort", "5 locuri"],
    included: COMMON_INCLUDED_CAR,
    rules: COMMON_RULES_CAR,
    images: [c31, c32],
  },
  {
    id: "citroen-e-c3",
    slug: "citroen-e-c3",
    name: "Citroën ë-C3 Electric",
    year: 2024,
    category: "masina",
    audience: ["uber-bolt"],
    transmission: "automat",
    fuel: "electric",
    autonomyKm: 320,
    seats: 5,
    pricePerDay: 200,
    pricePerWeek: 1250,
    pricePerMonth: 4600,
    availability: "disponibil",
    shortDescription: "Crossover 100% electric, 113 CP, autonomie ~320 km. Costuri operare minime.",
    highlights: ["100% electric", "Autonomie 320 km", "Zero combustibil"],
    included: COMMON_INCLUDED_CAR,
    rules: COMMON_RULES_CAR,
    images: [ec31],
  },

  // ============ SCUTERE FARA PERMIS (50cc, limitat 25 km/h) ============
  {
    id: "peugeot-kisbee-50",
    slug: "peugeot-kisbee-50",
    name: "Peugeot Kisbee 50",
    year: 2023,
    category: "scuter",
    scooterClass: "fara-permis",
    audience: ["curieri"],
    fuel: "benzina",
    autonomyKm: 200,
    consumptionLper100: 2.2,
    cargoLiters: 25,
    topSpeedKmh: 25,
    pricePerDay: 42,
    pricePerWeek: 210,
    pricePerMonth: 750,
    availability: "disponibil",
    shortDescription: "Moped 50cc 4T cu injectie EFI, limitat 25 km/h. Accesibil cu categoria AM.",
    highlights: ["49.9cc, 4T EFI", "Frana disc 170mm fata", "Pornire electrica + kick"],
    included: COMMON_INCLUDED_FP,
    rules: ["Minim 16 ani", "Categoria AM acceptata", "Garantie 500 lei"],
    images: [kisbee1, kisbee2, kisbee3],
  },
  {
    id: "peugeot-tweet-50",
    slug: "peugeot-tweet-50",
    name: "Peugeot Tweet 50",
    year: 2023,
    category: "scuter",
    scooterClass: "fara-permis",
    audience: ["curieri"],
    fuel: "benzina",
    autonomyKm: 220,
    consumptionLper100: 2.3,
    cargoLiters: 28,
    topSpeedKmh: 25,
    pricePerDay: 44,
    pricePerWeek: 220,
    pricePerMonth: 780,
    availability: "disponibil",
    shortDescription: "Scuter 50cc 4T cu roti mari de 16\", stabilitate crescuta in trafic.",
    highlights: ["Roti 16\"", "4T monocilindru", "Transmisie CVT"],
    included: COMMON_INCLUDED_FP,
    rules: ["Minim 16 ani", "Categoria AM acceptata", "Garantie 500 lei"],
    images: [tweet1, tweet2],
  },
  {
    id: "sym-fiddle-ii-50",
    slug: "sym-fiddle-ii-50",
    name: "SYM Fiddle II 50",
    year: 2023,
    category: "scuter",
    scooterClass: "fara-permis",
    audience: ["curieri"],
    fuel: "benzina",
    autonomyKm: 200,
    consumptionLper100: 2.2,
    cargoLiters: 25,
    topSpeedKmh: 25,
    pricePerDay: 43,
    pricePerWeek: 215,
    pricePerMonth: 760,
    availability: "disponibil",
    shortDescription: "Scuter 49.5cc cu design retro, racire aer si consum redus. Pornire electrica + kick.",
    highlights: ["Design retro", "~3 CP, CVT", "Consum redus"],
    included: COMMON_INCLUDED_FP,
    rules: ["Minim 16 ani", "Categoria AM acceptata", "Garantie 500 lei"],
    images: [fiddle1, fiddle2, fiddle3],
  },
  {
    id: "kymco-agility-50",
    slug: "kymco-agility-50",
    name: "Kymco Agility 50",
    year: 2023,
    category: "scuter",
    scooterClass: "fara-permis",
    audience: ["curieri"],
    fuel: "benzina",
    autonomyKm: 200,
    consumptionLper100: 2.3,
    cargoLiters: 28,
    topSpeedKmh: 25,
    pricePerDay: 42,
    pricePerWeek: 210,
    pricePerMonth: 750,
    availability: "disponibil",
    shortDescription: "Scuter 49cc 4T, brand global recunoscut pentru fiabilitate. Consum mic.",
    highlights: ["Foarte fiabil", "~3 CP, CVT", "Pret accesibil"],
    included: COMMON_INCLUDED_FP,
    rules: ["Minim 16 ani", "Categoria AM acceptata", "Garantie 500 lei"],
    images: [agilityFp1, agilityFp2],
  },
  {
    id: "kymco-like-50",
    slug: "kymco-like-50",
    name: "Kymco Like 50",
    year: 2023,
    category: "scuter",
    scooterClass: "fara-permis",
    audience: ["curieri"],
    fuel: "benzina",
    autonomyKm: 210,
    consumptionLper100: 2.2,
    cargoLiters: 28,
    topSpeedKmh: 25,
    pricePerDay: 46,
    pricePerWeek: 230,
    pricePerMonth: 800,
    availability: "disponibil",
    shortDescription: "Scuter 50cc cu design retro premium, finisaje cromate si confort sporit.",
    highlights: ["Design retro premium", "Cromaje", "4T racire aer"],
    included: COMMON_INCLUDED_FP,
    rules: ["Minim 16 ani", "Categoria AM acceptata", "Garantie 600 lei"],
    images: [like1, like2],
  },
  {
    id: "znen-retro-50",
    slug: "znen-retro-50",
    name: "Znen / AGM Riva Retro",
    year: 2023,
    category: "scuter",
    scooterClass: "fara-permis",
    audience: ["curieri"],
    fuel: "benzina",
    autonomyKm: 190,
    consumptionLper100: 2.4,
    cargoLiters: 22,
    topSpeedKmh: 25,
    pricePerDay: 45,
    pricePerWeek: 225,
    pricePerMonth: 790,
    availability: "disponibil",
    shortDescription: "Scuter 50cc stil Vespa, look clasic cu finisaje cromate. 2–3 CP, CVT.",
    highlights: ["Stil Vespa", "Finisaje cromate", "Aer racit"],
    included: COMMON_INCLUDED_FP,
    rules: ["Minim 16 ani", "Categoria AM acceptata", "Garantie 500 lei"],
    images: [retro1, retro2, retro3],
  },

  // ============ SCUTERE 50CC ============
  {
    id: "motron-breezy-50",
    slug: "motron-breezy-50",
    name: "Motron Breezy 50",
    year: 2024,
    category: "scuter",
    scooterClass: "50cc",
    audience: ["curieri"],
    fuel: "benzina",
    autonomyKm: 220,
    consumptionLper100: 2.4,
    cargoLiters: 30,
    topSpeedKmh: 45,
    pricePerDay: 48,
    pricePerWeek: 240,
    pricePerMonth: 820,
    availability: "disponibil",
    shortDescription: "Scuter 50cc modern, perfect pentru livrari urbane si trafic aglomerat.",
    highlights: ["Design modern", "Costuri reduse", "Manevrabilitate excelenta"],
    included: COMMON_INCLUDED_SCOOTER,
    rules: ["Permis AM/A1", "Garantie 600 lei"],
    images: [breezy1, breezy2],
  },
  {
    id: "kymco-agility-50-2024",
    slug: "kymco-agility-50-2024",
    name: "Kymco Agility 50 (2024)",
    year: 2024,
    category: "scuter",
    scooterClass: "50cc",
    audience: ["curieri"],
    fuel: "benzina",
    autonomyKm: 210,
    consumptionLper100: 2.3,
    cargoLiters: 32,
    topSpeedKmh: 45,
    pricePerDay: 48,
    pricePerWeek: 240,
    pricePerMonth: 820,
    availability: "disponibil",
    shortDescription: "Versiunea 2024 a celebrului Agility 50, cu platforma cargo si stabilitate buna.",
    highlights: ["Platforma cargo", "Brand global", "Roti mai mari"],
    included: COMMON_INCLUDED_SCOOTER,
    rules: ["Permis AM/A1", "Garantie 600 lei"],
    images: [agility50_1, agility50_2],
  },
  {
    id: "sym-symphony-50",
    slug: "sym-symphony-50",
    name: "SYM Symphony 50",
    year: 2024,
    category: "scuter",
    scooterClass: "50cc",
    audience: ["curieri"],
    fuel: "benzina",
    autonomyKm: 230,
    consumptionLper100: 2.2,
    cargoLiters: 32,
    topSpeedKmh: 45,
    pricePerDay: 50,
    pricePerWeek: 250,
    pricePerMonth: 850,
    availability: "disponibil",
    shortDescription: "Scuter 50cc cu roti mari pentru stabilitate crescuta. Confort ridicat zilnic.",
    highlights: ["Roti mari", "Confort ridicat", "Utilizare intensa"],
    included: COMMON_INCLUDED_SCOOTER,
    rules: ["Permis AM/A1", "Garantie 700 lei"],
    images: [symphony50_1, symphony50_2],
  },
  {
    id: "sym-x-pro-50",
    slug: "sym-x-pro-50",
    name: "SYM X Pro 50",
    year: 2024,
    category: "scuter",
    scooterClass: "50cc",
    audience: ["curieri"],
    fuel: "benzina",
    autonomyKm: 220,
    consumptionLper100: 2.6,
    cargoLiters: 40,
    topSpeedKmh: 45,
    pricePerDay: 52,
    pricePerWeek: 260,
    pricePerMonth: 880,
    availability: "disponibil",
    shortDescription: "49cc 4T construit pentru delivery intens. Suporti cargo fata + spate.",
    highlights: ["Suport delivery dual", "Robust", "Spatii depozitare"],
    included: COMMON_INCLUDED_SCOOTER,
    rules: ["Permis AM/A1", "Garantie 700 lei"],
    images: [xpro1, xpro2],
  },

  // ============ SCUTERE 125CC ============
  {
    id: "sym-symphony-125",
    slug: "sym-symphony-125",
    name: "SYM Symphony 125",
    year: 2024,
    category: "scuter",
    scooterClass: "125cc",
    audience: ["curieri"],
    fuel: "benzina",
    autonomyKm: 280,
    consumptionLper100: 2.4,
    cargoLiters: 35,
    topSpeedKmh: 95,
    pricePerDay: 60,
    pricePerWeek: 310,
    pricePerMonth: 1050,
    availability: "disponibil",
    shortDescription: "125cc CVT cu roti mari, excelent pentru oras si periferie. Confort pentru distante lungi.",
    highlights: ["Roti mari", "Confort sporit", "Consum redus"],
    included: COMMON_INCLUDED_SCOOTER,
    rules: ["Permis A1/B", "Garantie 1000 lei"],
    images: [symphony125_1, symphony125_2],
  },
  {
    id: "sym-symphony-rs-125",
    slug: "sym-symphony-rs-125",
    name: "SYM Symphony RS 125",
    year: 2024,
    category: "scuter",
    scooterClass: "125cc",
    audience: ["curieri"],
    fuel: "benzina",
    autonomyKm: 280,
    consumptionLper100: 2.4,
    cargoLiters: 40,
    topSpeedKmh: 100,
    pricePerDay: 62,
    pricePerWeek: 320,
    pricePerMonth: 1080,
    availability: "disponibil",
    shortDescription: "Versiunea sport a Symphony 125. Design agil, manevrabilitate excelenta in trafic urban.",
    highlights: ["Design sportiv", "Manevrabil", "125cc CVT"],
    included: COMMON_INCLUDED_SCOOTER,
    rules: ["Permis A1/B", "Garantie 1000 lei"],
    images: [symphonyRs1, symphonyRs2],
  },
  {
    id: "daytona-trevis-125",
    slug: "daytona-trevis-125",
    name: "Daytona Trevis 125",
    year: 2024,
    category: "scuter",
    scooterClass: "125cc",
    audience: ["curieri"],
    fuel: "benzina",
    autonomyKm: 320,
    consumptionLper100: 2.2,
    cargoLiters: 38,
    topSpeedKmh: 115,
    pricePerDay: 60,
    pricePerWeek: 305,
    pricePerMonth: 1020,
    availability: "disponibil",
    shortDescription: "125cc CVT cu viteza maxima 110–120 km/h. Ideal pentru livrari rapide pe distante lungi.",
    highlights: ["Pana la 120 km/h", "Consum 2.2L", "Stabil la viteza"],
    included: COMMON_INCLUDED_SCOOTER,
    rules: ["Permis A1/B", "Garantie 1000 lei"],
    images: [trevis1, trevis2, trevis3],
  },
  {
    id: "sym-jet-x-pro-125",
    slug: "sym-jet-x-pro-125",
    name: "SYM Jet X Pro 125",
    year: 2024,
    category: "scuter",
    scooterClass: "125cc",
    audience: ["curieri"],
    fuel: "benzina",
    autonomyKm: 300,
    consumptionLper100: 2.3,
    cargoLiters: 35,
    topSpeedKmh: 100,
    pricePerDay: 62,
    pricePerWeek: 320,
    pricePerMonth: 1080,
    availability: "disponibil",
    shortDescription: "125cc cu injectie, design modern si dashboard digital. Tehnologie avansata pentru segment.",
    highlights: ["Dashboard digital", "Design sport", "Injectie EFI"],
    included: COMMON_INCLUDED_SCOOTER,
    rules: ["Permis A1/B", "Garantie 1000 lei"],
    images: [jetx1, jetx2],
  },
  {
    id: "honda-pcx-125",
    slug: "honda-pcx-125",
    name: "Honda PCX 125",
    year: 2024,
    category: "scuter",
    scooterClass: "125cc",
    audience: ["curieri"],
    fuel: "benzina",
    autonomyKm: 380,
    consumptionLper100: 2.1,
    cargoLiters: 45,
    topSpeedKmh: 100,
    pricePerDay: 70,
    pricePerWeek: 360,
    pricePerMonth: 1200,
    availability: "disponibil",
    shortDescription: "125cc eSP+ cu Start-Stop, consum 2.1L/100km. Cel mai eficient si confortabil din clasa.",
    highlights: ["Sistem Start-Stop", "Consum 2.1L", "Confort premium"],
    included: COMMON_INCLUDED_SCOOTER,
    rules: ["Permis A1/B", "Garantie 1500 lei"],
    images: [pcx1, pcx2],
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

export const scooterClassLabels: Record<ScooterClass, string> = {
  "50cc": "Scutere 50cc",
  "125cc": "Scutere 125cc",
  "fara-permis": "Scutere fara permis",
  electric: "Scutere electrice",
};
