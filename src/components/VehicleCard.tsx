import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Bike, Car, CheckCircle2, Fuel, Gauge, Settings2, Users } from "lucide-react";
import { Vehicle, categoryLabels } from "@/data/fleet";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const categoryIcon = {
  masina: Car,
  scuter: Bike,
  bicicleta: Bike,
};

interface Props {
  vehicle: Vehicle;
  index?: number;
  /** When provided, the "Detalii" button links to the dedicated product page. */
  categorySlug?: string;
}

export function VehicleCard({ vehicle, index = 0, categorySlug }: Props) {
  const Icon = categoryIcon[vehicle.category];
  const available = vehicle.availability === "disponibil";
  const detailsHref = categorySlug
    ? `/inchiriere/${categorySlug}/${vehicle.slug}`
    : `/rezerva/${vehicle.slug}`;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.05, 0.3) }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-card hover-lift"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={vehicle.images[0]}
          alt={`${vehicle.name} ${vehicle.year}`}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 group-hover:opacity-0"
        />
        {vehicle.images[1] && (
          <img
            src={vehicle.images[1]}
            alt=""
            aria-hidden
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />
        )}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="absolute left-3 top-3 flex gap-2">
          <span
            className={cn(
              "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-semibold",
              available ? "bg-success text-success-foreground" : "bg-muted text-muted-foreground",
            )}
          >
            <span className={cn("h-1.5 w-1.5 rounded-full", available ? "bg-success-foreground" : "bg-muted-foreground")} />
            {available ? "Disponibil" : "Lista asteptare"}
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-background/90 px-2.5 py-1 text-[11px] font-semibold text-foreground backdrop-blur">
            <Icon className="h-3 w-3" /> {categoryLabels[vehicle.category]}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="font-display text-lg font-bold leading-tight">{vehicle.name}</h3>
          <span className="text-xs text-muted-foreground tabular">{vehicle.year}</span>
        </div>
        <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{vehicle.shortDescription}</p>

        <ul className="mt-4 grid grid-cols-2 gap-2 text-xs text-muted-foreground">
          {vehicle.transmission && (
            <li className="flex items-center gap-1.5"><Settings2 className="h-3.5 w-3.5 text-primary" />{vehicle.transmission === "automat" ? "Automat" : "Manual"}</li>
          )}
          <li className="flex items-center gap-1.5"><Fuel className="h-3.5 w-3.5 text-primary" />{vehicle.fuel === "electric" ? "Electric" : vehicle.fuel}</li>
          {vehicle.autonomyKm && (
            <li className="flex items-center gap-1.5"><Gauge className="h-3.5 w-3.5 text-primary" />{vehicle.autonomyKm} km</li>
          )}
          {vehicle.seats && (
            <li className="flex items-center gap-1.5"><Users className="h-3.5 w-3.5 text-primary" />{vehicle.seats} locuri</li>
          )}
          {vehicle.cargoLiters && (
            <li className="flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-primary" />{vehicle.cargoLiters} L cargo</li>
          )}
        </ul>

        <div className="mt-5 flex items-end justify-between border-t border-border pt-4">
          <div>
            <p className="text-[11px] uppercase tracking-wider text-muted-foreground">de la</p>
            <p className="font-display text-2xl font-extrabold tabular text-foreground">
              {vehicle.pricePerWeek}<span className="text-sm font-medium text-muted-foreground"> lei/săptămână</span>
            </p>
            
          </div>
        </div>

        <div className="mt-4 flex gap-2">
          <Button asChild variant="outline" size="sm" className="flex-1">
            <Link to={detailsHref}>Detalii</Link>
          </Button>
          <Button asChild size="sm" className="flex-1">
            <Link to={`/rezerva/${vehicle.slug}`}>Rezerva</Link>
          </Button>
        </div>
      </div>
    </motion.article>
  );
}
