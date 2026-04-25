import { Bike, Car, Gauge, KeyRound } from "lucide-react";
import { fleet, Vehicle } from "@/data/fleet";
import pcx from "@/assets/fleet/pcx-1.jpg";
import breezy from "@/assets/fleet/breezy-1.jpg";
import kisbee from "@/assets/fleet/kisbee-1.jpg";
import corolla from "@/assets/fleet/corolla-1.jpg";

export type RentalCategorySlug = "scutere-125" | "scutere-50" | "fara-permis" | "masini";

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
    intro: "Toyota Corolla si Camry Hybrid, Toyota Aygo X, Citroën C3 si ë-C3 electric. Masini cu consum redus si confort pe termen lung.",
    desc: "Toyota Corolla si Camry Hybrid, Aygo X, Citroën C3 si ë-C3 electric. Consum mic, confort lung.",
    audience: "Recomandat pentru: soferi de ridesharing Uber si Bolt si pentru utilizare zilnica intensa.",
    filter: (v) => v.category === "masina",
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
