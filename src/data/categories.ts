import { Bike, Car, Gauge, KeyRound, Zap } from "lucide-react";
import { fleet, Vehicle } from "@/data/fleet";
import pcx from "@/assets/fleet/pcx-1.jpg";
import breezy from "@/assets/fleet/breezy-1.jpg";
import kisbee from "@/assets/fleet/kisbee-1.jpg";
import corolla from "@/assets/fleet/corolla-1.jpg";
import duotts from "@/assets/fleet/duotts-f20-1.jpg";

export type RentalCategorySlug = "scutere-125" | "scutere-50" | "fara-permis" | "masini" | "biciclete-electrice";

export interface RentalCategory {
  slug: RentalCategorySlug;
  title: string;
  shortTitle: string;
  Icon: typeof Car;
  image: string;
  intro: string;
  desc: string;
  audience: string;
  filter: (v: Vehicle) => boolean;
}

export const rentalCategories: RentalCategory[] = [
  {
    slug: "scutere-125",
    title: "Scutere 125cc",
    shortTitle: "125cc",
    Icon: Gauge,
    image: pcx,
    intro: "Modele puternice 125cc pentru utilizare intensa, ture lungi si trafic mixt urban si periurban. Permis A1 sau B obligatoriu.",
    desc: "Honda PCX, SYM Symphony, Daytona Trevis si Jet X Pro. Putere si autonomie pentru ture lungi.",
    audience: "Recomandat pentru: curieri Glovo, Wolt, Bolt Food cu volum constant si soferi care au nevoie de viteza si autonomie.",
    filter: (v) => v.category === "scuter" && v.scooterClass === "125cc",
  },
  {
    slug: "scutere-50",
    title: "Scutere 50cc",
    shortTitle: "50cc",
    Icon: Bike,
    image: breezy,
    intro: "Compacte, agile si economice. Ideale pentru livrari rapide in trafic aglomerat si pentru cei aflati la inceput. Necesita permis AM.",
    desc: "Motron Breezy, Kymco Agility, SYM Symphony si X Pro. Compacte, economice, agile in trafic.",
    audience: "Recomandat pentru: livrari urbane scurte si curieri incepatori care vor sa intre rapid in activitate.",
    filter: (v) => v.category === "scuter" && v.scooterClass === "50cc",
  },
  {
    slug: "fara-permis",
    title: "Scutere fara permis",
    shortTitle: "Fara permis",
    Icon: KeyRound,
    image: kisbee,
    intro: "Mopede 50cc limitate la 25 km/h, accesibile cu categoria AM si de la 16 ani. Solutia ideala pentru cei care nu au inca permis A1.",
    desc: "Peugeot Kisbee si Tweet, SYM Fiddle, Kymco Like si Agility, modele retro. Limitate 25 km/h.",
    audience: "Recomandat pentru: tineri navetisti si livratori la inceput de drum, fara permis moto complet.",
    filter: (v) => v.category === "scuter" && v.scooterClass === "fara-permis",
  },
  {
    slug: "masini",
    title: "Masini hibride si electrice",
    shortTitle: "Masini",
    Icon: Car,
    image: corolla,
    intro: "Masini cu consum redus si confort pe termen lung. Perfecte pentru servicii de ride-sharing, plimbări urbane sau navetă.",
    desc: "Masini cu consum redus si confort pe termen lung. Perfecte pentru servicii de ride-sharing, plimbări urbane sau navetă.",
    audience: "Recomandat pentru: soferi de ridesharing Uber si Bolt si pentru utilizare zilnica intensa.",
    filter: (v) => v.category === "masina",
  },
  {
    slug: "biciclete-electrice",
    title: "Biciclete electrice",
    shortTitle: "Biciclete",
    Icon: Zap,
    image: duotts,
    intro: "Biciclete electrice puternice cu autonomie mare, ideale pentru livrari urbane fara permis si fara costuri de combustibil.",
    desc: "DUOTTS F20 cu motor 1000W, baterie 52V 27Ah si autonomie pana la 140 km. Suspensie completa pentru confort maxim.",
    audience: "Recomandat pentru: curieri Glovo, Wolt, Bolt Food fara permis si livratori care vor costuri zero de combustibil.",
    filter: (v) => v.category === "bicicleta",
  },
];

export function getCategoryBySlug(slug: string | undefined): RentalCategory | undefined {
  return rentalCategories.find((c) => c.slug === slug);
}

export function getVehiclesInCategory(slug: RentalCategorySlug): Vehicle[] {
  const cat = getCategoryBySlug(slug);
  if (!cat) return [];
  return fleet.filter(cat.filter);
}

export function getCategoryForVehicle(vehicle: Vehicle): RentalCategory | undefined {
  return rentalCategories.find((c) => c.filter(vehicle));
}
