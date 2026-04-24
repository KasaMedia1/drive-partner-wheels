import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { format } from "date-fns";
import { ro } from "date-fns/locale";
import { CalendarIcon, CheckCircle2, ChevronLeft, MessageCircle, ShieldCheck } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { SiteLayout } from "@/components/layout/SiteLayout";
import { Seo } from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { getVehicleById, categoryLabels } from "@/data/fleet";
import { whatsappLink, SITE } from "@/config/site";
import NotFound from "./NotFound";

const schema = z.object({
  nume: z.string().trim().min(2, "Nume prea scurt").max(80),
  telefon: z.string().trim().min(9, "Numar invalid").max(20).regex(/^[0-9+\s().-]+$/, "Doar cifre si simboluri"),
  email: z.string().trim().email("Email invalid").max(120),
  activitate: z.enum(["Uber", "Bolt", "Glovo", "Wolt", "Bolt Food"]),
  mesaj: z.string().trim().max(500).optional(),
});

const periods = [
  { id: "week", label: "1 saptamana", weeks: 1 },
  { id: "2weeks", label: "2 saptamani", weeks: 2 },
  { id: "month", label: "1 luna", weeks: 4 },
  { id: "3months", label: "3 luni", weeks: 12 },
];

const Rezerva = () => {
  const { id } = useParams<{ id: string }>();
  const vehicle = id ? getVehicleById(id) : undefined;
  const [activeImg, setActiveImg] = useState(0);
  const [startDate, setStartDate] = useState<Date | undefined>();
  const [periodId, setPeriodId] = useState("week");

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: { nume: "", telefon: "", email: "", activitate: "Uber", mesaj: "" },
  });

  const total = useMemo(() => {
    if (!vehicle) return 0;
    const p = periods.find((x) => x.id === periodId)!;
    if (p.weeks === 4) return vehicle.pricePerMonth;
    if (p.weeks === 12) return vehicle.pricePerMonth * 3;
    return vehicle.pricePerWeek * p.weeks;
  }, [vehicle, periodId]);

  if (!vehicle) return <NotFound />;

  const onSubmit = (values: z.infer<typeof schema>) => {
    const periodLabel = periods.find((p) => p.id === periodId)?.label;
    const dateStr = startDate ? format(startDate, "dd MMMM yyyy", { locale: ro }) : "data flexibila";
    const lines = [
      `Cerere rezervare DrivePartner`,
      `Vehicul: ${vehicle.name} (${vehicle.year})`,
      `Perioada: ${periodLabel}`,
      `Data start: ${dateStr}`,
      `Total estimat: ${total} lei`,
      ``,
      `Nume: ${values.nume}`,
      `Telefon: ${values.telefon}`,
      `Email: ${values.email}`,
      `Platforma: ${values.activitate}`,
      values.mesaj ? `Mesaj: ${values.mesaj}` : ``,
    ].filter(Boolean);
    window.open(whatsappLink(lines.join("\n")), "_blank", "noopener,noreferrer");
    toast({ title: "Cerere trimisa pe WhatsApp", description: "Te sunam in maxim 1 ora." });
  };

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${vehicle.name} ${vehicle.year}`,
    image: vehicle.images,
    description: vehicle.shortDescription,
    offers: { "@type": "Offer", priceCurrency: "RON", price: vehicle.pricePerWeek, availability: vehicle.availability === "disponibil" ? "InStock" : "PreOrder" },
  };

  return (
    <SiteLayout>
      <Seo title={`Rezerva ${vehicle.name} | DrivePartner`} description={vehicle.shortDescription} path={`/rezerva/${vehicle.slug}`} image={vehicle.images[0]} jsonLd={productJsonLd} />

      <div className="container-page pt-8">
        <Link to="/flota" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary">
          <ChevronLeft className="h-4 w-4" /> Inapoi la flota
        </Link>
      </div>

      <section className="container-page py-8 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
            {categoryLabels[vehicle.category]}
          </span>
          <h1 className="mt-3 font-display text-3xl font-extrabold sm:text-4xl">{vehicle.name} <span className="text-muted-foreground tabular">{vehicle.year}</span></h1>
          <p className="mt-3 text-muted-foreground max-w-2xl">{vehicle.shortDescription}</p>

          <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-card shadow-card">
            <div className="aspect-[16/10] bg-muted">
              <img src={vehicle.images[activeImg]} alt={vehicle.name} className="h-full w-full object-cover" />
            </div>
            <div className="grid grid-cols-3 gap-1.5 p-1.5">
              {vehicle.images.slice(0, 3).map((src, i) => (
                <button
                  key={src}
                  onClick={() => setActiveImg(i)}
                  className={cn("aspect-[4/3] overflow-hidden rounded-lg border-2 transition-all", activeImg === i ? "border-primary" : "border-transparent opacity-70 hover:opacity-100")}
                >
                  <img src={src} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h2 className="font-display text-lg font-bold">Specificatii</h2>
              <dl className="mt-4 space-y-2 text-sm">
                {vehicle.transmission && <Row label="Transmisie" value={vehicle.transmission === "automat" ? "Automat" : "Manual"} />}
                <Row label="Tip" value={vehicle.fuel === "electric" ? "Electric" : vehicle.fuel} />
                {vehicle.autonomyKm && <Row label="Autonomie" value={`${vehicle.autonomyKm} km`} />}
                {vehicle.consumptionLper100 && <Row label="Consum" value={`${vehicle.consumptionLper100} L/100km`} />}
                {vehicle.seats && <Row label="Locuri" value={`${vehicle.seats}`} />}
                {vehicle.cargoLiters && <Row label="Cargo" value={`${vehicle.cargoLiters} L`} />}
              </dl>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <h2 className="font-display text-lg font-bold">Inclus in pret</h2>
              <ul className="mt-4 space-y-2 text-sm">
                {vehicle.included.map((x) => (
                  <li key={x} className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-primary" />{x}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-border bg-card p-6">
            <h2 className="font-display text-lg font-bold flex items-center gap-2"><ShieldCheck className="h-5 w-5 text-primary" /> Conditii</h2>
            <ul className="mt-4 grid gap-2 text-sm sm:grid-cols-2">
              {vehicle.rules.map((r) => <li key={r} className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />{r}</li>)}
            </ul>
          </div>
        </div>

        {/* Sticky booking */}
        <div>
          <div className="lg:sticky lg:top-28 rounded-2xl border border-border bg-card p-6 shadow-elevate">
            <div className="flex items-baseline justify-between">
              <p className="font-display text-3xl font-extrabold tabular gradient-text">{total} <span className="text-base font-semibold text-muted-foreground">lei</span></p>
              <p className="text-xs text-muted-foreground">total estimat</p>
            </div>
            <p className="mt-1 text-xs text-muted-foreground tabular">{vehicle.pricePerWeek} lei/sapt · {vehicle.pricePerDay} lei/zi</p>

            <div className="mt-5 space-y-4">
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Data inceput</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className={cn("mt-1.5 w-full justify-start text-left font-normal", !startDate && "text-muted-foreground")}>
                      <CalendarIcon className="h-4 w-4" />
                      {startDate ? format(startDate, "dd MMMM yyyy", { locale: ro }) : "Alege data"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent align="start" className="w-auto p-0">
                    <Calendar mode="single" selected={startDate} onSelect={setStartDate} disabled={(d) => d < new Date(new Date().setHours(0,0,0,0))} initialFocus className={cn("p-3 pointer-events-auto")} />
                  </PopoverContent>
                </Popover>
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Perioada</label>
                <Select value={periodId} onValueChange={setPeriodId}>
                  <SelectTrigger className="mt-1.5"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {periods.map((p) => <SelectItem key={p.id} value={p.id}>{p.label}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="mt-5 space-y-3 border-t border-border pt-5">
                <FormField name="nume" control={form.control} render={({ field }) => (
                  <FormItem><FormLabel>Nume complet</FormLabel><FormControl><Input placeholder="Ion Popescu" {...field} /></FormControl><FormMessage /></FormItem>
                )} />
                <FormField name="telefon" control={form.control} render={({ field }) => (
                  <FormItem><FormLabel>Telefon</FormLabel><FormControl><Input type="tel" placeholder="07xx xxx xxx" {...field} /></FormControl><FormMessage /></FormItem>
                )} />
                <FormField name="email" control={form.control} render={({ field }) => (
                  <FormItem><FormLabel>Email</FormLabel><FormControl><Input type="email" placeholder="email@exemplu.ro" {...field} /></FormControl><FormMessage /></FormItem>
                )} />
                <FormField name="activitate" control={form.control} render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tip activitate</FormLabel>
                    <Select value={field.value} onValueChange={field.onChange}>
                      <FormControl><SelectTrigger><SelectValue /></SelectTrigger></FormControl>
                      <SelectContent>
                        {(["Uber","Bolt","Glovo","Wolt","Bolt Food"] as const).map((p) => <SelectItem key={p} value={p}>{p}</SelectItem>)}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )} />

                <Button type="submit" size="lg" className="w-full">
                  <MessageCircle className="h-4 w-4" /> Trimite cererea pe WhatsApp
                </Button>
                <p className="text-center text-[11px] text-muted-foreground">Te sunam in maxim 1h la {SITE.phoneDisplay}</p>
              </form>
            </Form>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between border-b border-border/60 pb-1.5 last:border-0">
      <dt className="text-muted-foreground">{label}</dt>
      <dd className="font-semibold capitalize">{value}</dd>
    </div>
  );
}

export default Rezerva;
