import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Filter, X } from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Seo } from "@/components/Seo";
import { VehicleCard } from "@/components/VehicleCard";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { fleet, audienceLabels, categoryLabels, VehicleCategory, Audience } from "@/data/fleet";
import { cn } from "@/lib/utils";

type Filters = {
  cat: VehicleCategory | "all";
  audience: Audience | "all";
  transmission: "all" | "manual" | "automat";
  availability: "all" | "disponibil" | "lista";
  priceMax: number;
};

const DEFAULTS: Filters = { cat: "all", audience: "all", transmission: "all", availability: "all", priceMax: 1500 };

function FiltersPanel({ filters, setFilters, onReset }: { filters: Filters; setFilters: (f: Filters) => void; onReset: () => void }) {
  return (
    <div className="space-y-7">
      <FilterGroup label="Categorie">
        {(["all", "masina", "scuter", "bicicleta"] as const).map((c) => (
          <Pill key={c} active={filters.cat === c} onClick={() => setFilters({ ...filters, cat: c })}>
            {c === "all" ? "Toate" : categoryLabels[c]}
          </Pill>
        ))}
      </FilterGroup>

      <FilterGroup label="Destinatie">
        {(["all", "uber-bolt", "curieri"] as const).map((a) => (
          <Pill key={a} active={filters.audience === a} onClick={() => setFilters({ ...filters, audience: a })}>
            {a === "all" ? "Toate" : audienceLabels[a]}
          </Pill>
        ))}
      </FilterGroup>

      {filters.cat === "masina" && (
        <FilterGroup label="Transmisie">
          {(["all", "manual", "automat"] as const).map((t) => (
            <Pill key={t} active={filters.transmission === t} onClick={() => setFilters({ ...filters, transmission: t })}>
              {t === "all" ? "Toate" : t === "manual" ? "Manual" : "Automat"}
            </Pill>
          ))}
        </FilterGroup>
      )}

      <FilterGroup label="Disponibilitate">
        {(["all", "disponibil", "lista"] as const).map((a) => (
          <Pill key={a} active={filters.availability === a} onClick={() => setFilters({ ...filters, availability: a })}>
            {a === "all" ? "Toate" : a === "disponibil" ? "Disponibil acum" : "Lista asteptare"}
          </Pill>
        ))}
      </FilterGroup>

      <div>
        <div className="mb-3 flex items-center justify-between">
          <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Pret max / saptamana</p>
          <span className="text-sm font-bold tabular text-primary">{filters.priceMax} lei</span>
        </div>
        <Slider value={[filters.priceMax]} min={150} max={1500} step={50} onValueChange={([v]) => setFilters({ ...filters, priceMax: v })} />
      </div>

      <Button variant="outline" className="w-full" onClick={onReset}>
        <X className="h-4 w-4" /> Reseteaza filtre
      </Button>
    </div>
  );
}

function FilterGroup({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="mb-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">{label}</p>
      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  );
}

function Pill({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "rounded-full border px-3.5 py-1.5 text-sm font-medium transition-all",
        active ? "border-primary bg-primary text-primary-foreground shadow-card" : "border-border hover:border-primary/40",
      )}
    >
      {children}
    </button>
  );
}

const Flota = () => {
  const [params, setParams] = useSearchParams();
  const [filters, setFilters] = useState<Filters>(() => ({
    ...DEFAULTS,
    cat: (params.get("cat") as VehicleCategory) || "all",
    audience: (params.get("aud") as Audience) || "all",
  }));

  useEffect(() => {
    const next = new URLSearchParams();
    if (filters.cat !== "all") next.set("cat", filters.cat);
    if (filters.audience !== "all") next.set("aud", filters.audience);
    setParams(next, { replace: true });
  }, [filters.cat, filters.audience, setParams]);

  const filtered = useMemo(() => {
    return fleet.filter((v) => {
      if (filters.cat !== "all" && v.category !== filters.cat) return false;
      if (filters.audience !== "all" && !v.audience.includes(filters.audience)) return false;
      if (filters.transmission !== "all" && v.transmission !== filters.transmission) return false;
      if (filters.availability !== "all" && v.availability !== filters.availability) return false;
      if (v.pricePerWeek > filters.priceMax) return false;
      return true;
    });
  }, [filters]);

  return (
    <SiteLayout>
      <Seo title="Flota completa | DriveRent" description="Filtreaza masini, scutere si biciclete electrice pentru Uber, Bolt si curieri. Disponibilitate live si preturi transparente." path="/flota" />

      <section className="border-b border-border bg-background-soft">
        <div className="container-page py-10 sm:py-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Flota</p>
          <h1 className="mt-2 font-display text-3xl font-extrabold sm:text-5xl">Toate vehiculele DriveRent</h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">Filtreaza dupa nevoie si rezerva in cateva click-uri. Pretul include asigurare, service si asistenta 24/7.</p>
        </div>
      </section>

      <section className="container-page py-10">
        <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
          <aside className="hidden lg:block">
            <div className="sticky top-28 rounded-2xl border border-border bg-card p-6 shadow-card">
              <h2 className="mb-5 font-display text-lg font-bold">Filtre</h2>
              <FiltersPanel filters={filters} setFilters={setFilters} onReset={() => setFilters(DEFAULTS)} />
            </div>
          </aside>

          <div>
            <div className="mb-5 flex items-center justify-between gap-3">
              <p className="text-sm text-muted-foreground"><span className="font-bold text-foreground tabular">{filtered.length}</span> vehicule gasite</p>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="sm" className="lg:hidden"><Filter className="h-4 w-4" /> Filtre</Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[88%] overflow-y-auto sm:max-w-md">
                  <SheetHeader><SheetTitle>Filtre</SheetTitle></SheetHeader>
                  <div className="mt-6">
                    <FiltersPanel filters={filters} setFilters={setFilters} onReset={() => setFilters(DEFAULTS)} />
                  </div>
                </SheetContent>
              </Sheet>
            </div>

            {filtered.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-border bg-card p-12 text-center">
                <p className="font-display text-xl font-bold">Niciun vehicul nu se potriveste filtrelor.</p>
                <Button variant="outline" className="mt-4" onClick={() => setFilters(DEFAULTS)}>Reseteaza filtre</Button>
              </div>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {filtered.map((v, i) => <VehicleCard key={v.id} vehicle={v} index={i} />)}
              </div>
            )}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default Flota;
