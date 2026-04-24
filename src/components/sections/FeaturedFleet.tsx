import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fleet } from "@/data/fleet";
import { VehicleCard } from "@/components/VehicleCard";

export function FeaturedFleet() {
  const featured = fleet.slice(0, 6);
  return (
    <section className="py-16 sm:py-20">
      <div className="container-page">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Flota selectata</p>
            <h2 className="mt-2 font-display text-3xl font-extrabold sm:text-4xl">Vehicule populare in aceasta saptamana</h2>
          </div>
          <Button asChild variant="outline">
            <Link to="/flota">Vezi toata flota <ArrowRight className="h-4 w-4" /></Link>
          </Button>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((v, i) => (
            <VehicleCard key={v.id} vehicle={v} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
