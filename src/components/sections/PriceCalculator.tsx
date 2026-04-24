import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Bike, Calculator, Car, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fleet, VehicleCategory } from "@/data/fleet";
import { cn } from "@/lib/utils";

const cats: { id: VehicleCategory; label: string; Icon: typeof Car }[] = [
  { id: "masina", label: "Masina", Icon: Car },
  { id: "scuter", label: "Scuter", Icon: Bike },
  { id: "bicicleta", label: "Bicicleta", Icon: Bike },
];

const periods = [
  { id: "week", label: "1 saptamana", weeks: 1 },
  { id: "month", label: "1 luna", weeks: 4 },
  { id: "3months", label: "3 luni", weeks: 12 },
];

export function PriceCalculator() {
  const [cat, setCat] = useState<VehicleCategory>("masina");
  const [periodId, setPeriodId] = useState("month");

  const result = useMemo(() => {
    const inCat = fleet.filter((v) => v.category === cat);
    const cheapest = inCat.reduce((a, b) => (a.pricePerWeek < b.pricePerWeek ? a : b), inCat[0]);
    const period = periods.find((p) => p.id === periodId)!;
    const weeklyTotal = cheapest.pricePerWeek * period.weeks;
    const actual = period.weeks === 4 ? cheapest.pricePerMonth : period.weeks === 12 ? cheapest.pricePerMonth * 3 : cheapest.pricePerWeek;
    const savings = Math.max(0, weeklyTotal - actual);
    return { cheapest, period, total: actual, savings };
  }, [cat, periodId]);

  return (
    <section className="py-16 sm:py-20 bg-background-soft">
      <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Calculator pret</p>
          <h2 className="mt-2 font-display text-3xl font-extrabold sm:text-4xl">Vezi exact cat te costa.</h2>
          <p className="mt-3 text-muted-foreground">Alege categoria si perioada. Cu cat inchiriezi mai mult, cu atat platesti mai putin pe zi.</p>

          <div className="mt-8 space-y-6">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Tip vehicul</p>
              <div className="grid grid-cols-3 gap-2">
                {cats.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setCat(c.id)}
                    className={cn(
                      "flex flex-col items-center gap-2 rounded-xl border p-4 text-sm font-semibold transition-all",
                      cat === c.id ? "border-primary bg-primary/5 text-primary shadow-card" : "border-border hover:border-primary/40",
                    )}
                  >
                    <c.Icon className="h-5 w-5" />
                    {c.label}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Perioada</p>
              <div className="grid grid-cols-3 gap-2">
                {periods.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setPeriodId(p.id)}
                    className={cn(
                      "rounded-xl border p-4 text-sm font-semibold transition-all",
                      periodId === p.id ? "border-primary bg-primary/5 text-primary shadow-card" : "border-border hover:border-primary/40",
                    )}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <motion.div
          key={`${cat}-${periodId}`}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="sticky top-24 rounded-3xl border border-border bg-card p-6 shadow-elevate sm:p-8"
        >
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calculator className="h-4 w-4 text-primary" /> Estimare pentru
          </div>
          <h3 className="mt-1 font-display text-2xl font-bold">{result.cheapest?.name}</h3>
          <p className="text-sm text-muted-foreground">{result.period.label}</p>

          <div className="mt-6 flex items-baseline gap-2">
            <span className="font-display text-5xl font-extrabold tabular gradient-text">{result.total}</span>
            <span className="text-lg font-semibold text-muted-foreground">lei</span>
          </div>

          {result.savings > 0 && (
            <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-success/15 px-3 py-1.5 text-xs font-bold text-success-foreground">
              <Sparkles className="h-3.5 w-3.5" />
              Economisesti {result.savings} lei fata de inchirierea saptamanala
            </div>
          )}

          <div className="mt-6 space-y-2 border-t border-border pt-5 text-sm text-muted-foreground">
            <p className="flex justify-between"><span>Asigurare RCA + CASCO</span><span className="font-semibold text-foreground">Inclus</span></p>
            <p className="flex justify-between"><span>Service si revizii</span><span className="font-semibold text-foreground">Inclus</span></p>
            <p className="flex justify-between"><span>Asistenta 24/7</span><span className="font-semibold text-foreground">Inclus</span></p>
          </div>

          <Button asChild size="lg" className="mt-6 w-full">
            <Link to={`/rezerva/${result.cheapest?.slug}`}>Rezerva acest vehicul</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
