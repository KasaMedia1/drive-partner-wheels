import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Fuel,
  Gauge,
  MessageCircle,
  Settings2,
  ShieldCheck,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Seo } from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { VehicleCard } from "@/components/VehicleCard";
import { cn } from "@/lib/utils";
import { fleet, getVehicleById, categoryLabels } from "@/data/fleet";
import { getCategoryBySlug } from "@/data/categories";
import { whatsappLink, SITE } from "@/config/site";
import NotFound from "./NotFound";

const VehicleDetail = () => {
  const { categorie, slug } = useParams<{ categorie: string; slug: string }>();
  const category = getCategoryBySlug(categorie);
  const vehicle = slug ? getVehicleById(slug) : undefined;
  const [activeImg, setActiveImg] = useState(0);

  if (!category || !vehicle || !category.filter(vehicle)) return <NotFound />;

  const available = vehicle.availability === "disponibil";
  const similar = fleet.filter((v) => category.filter(v) && v.id !== vehicle.id).slice(0, 3);

  const waMessage = `Buna! Sunt interesat de ${vehicle.name} (${vehicle.year}) - ${vehicle.pricePerWeek} lei/saptamana. Pot primi mai multe detalii?`;

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${vehicle.name} ${vehicle.year}`,
    image: vehicle.images,
    description: vehicle.shortDescription,
    offers: {
      "@type": "Offer",
      priceCurrency: "RON",
      price: vehicle.pricePerWeek,
      availability: available ? "InStock" : "PreOrder",
    },
  };

  return (
    <SiteLayout>
      <Seo
        title={`${vehicle.name} ${vehicle.year} | DriveRent`}
        description={vehicle.shortDescription}
        path={`/inchiriere/${category.slug}/${vehicle.slug}`}
        image={vehicle.images[0]}
        jsonLd={productJsonLd}
      />

      <div className="container-page pt-8">
        <nav className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <Link to="/inchiriere" className="hover:text-primary">Inchiriere</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <Link to={`/inchiriere/${category.slug}`} className="hover:text-primary">{category.title}</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="font-semibold text-foreground truncate">{vehicle.name}</span>
        </nav>
      </div>

      <section className="container-page py-8 grid gap-10 lg:grid-cols-[1.3fr_1fr]">
        {/* Gallery */}
        <div>
          <motion.div
            key={activeImg}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden rounded-2xl border border-border bg-card shadow-card"
          >
            <div className="relative aspect-[16/11] bg-muted">
              <img
                src={vehicle.images[activeImg]}
                alt={`${vehicle.name} ${vehicle.year} - imagine ${activeImg + 1}`}
                className="h-full w-full object-cover"
              />
              <div className="absolute left-4 top-4 flex gap-2">
                <span
                  className={cn(
                    "inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold",
                    available ? "bg-success text-success-foreground" : "bg-muted text-muted-foreground",
                  )}
                >
                  <span
                    className={cn(
                      "h-1.5 w-1.5 rounded-full",
                      available ? "bg-success-foreground" : "bg-muted-foreground",
                    )}
                  />
                  {available ? "Disponibil" : "Lista asteptare"}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-background/90 px-3 py-1.5 text-xs font-semibold text-foreground backdrop-blur">
                  <category.Icon className="h-3.5 w-3.5" /> {categoryLabels[vehicle.category]}
                </span>
              </div>
            </div>
          </motion.div>

          {vehicle.images.length > 1 && (
            <div className="mt-3 grid grid-cols-4 gap-2 sm:grid-cols-5">
              {vehicle.images.map((src, i) => (
                <button
                  key={src}
                  onClick={() => setActiveImg(i)}
                  className={cn(
                    "relative aspect-[4/3] overflow-hidden rounded-lg border-2 bg-muted transition-all",
                    activeImg === i
                      ? "border-primary shadow-card"
                      : "border-transparent opacity-70 hover:opacity-100",
                  )}
                  aria-label={`Imagine ${i + 1} din ${vehicle.images.length}`}
                >
                  <img src={src} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          )}

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h2 className="flex items-center gap-2 font-display text-lg font-bold">
                <Sparkles className="h-5 w-5 text-primary" /> Caracteristici principale
              </h2>
              <ul className="mt-4 space-y-2 text-sm">
                {vehicle.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 text-primary shrink-0" /> {h}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <h2 className="flex items-center gap-2 font-display text-lg font-bold">
                <ShieldCheck className="h-5 w-5 text-primary" /> Inclus in pret
              </h2>
              <ul className="mt-4 space-y-2 text-sm">
                {vehicle.included.map((x) => (
                  <li key={x} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 text-primary shrink-0" /> {x}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Info & CTA */}
        <div>
          <div className="lg:sticky lg:top-28">
            <h1 className="font-display text-3xl font-extrabold sm:text-4xl leading-tight">
              {vehicle.name}
            </h1>
            <p className="mt-1 text-sm text-muted-foreground tabular">An: {vehicle.year}</p>
            <p className="mt-4 text-base text-muted-foreground">{vehicle.shortDescription}</p>

            <div className="mt-6 rounded-2xl border border-border bg-card p-6 shadow-elevate">
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Pret de inchiriere
              </p>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="font-display text-4xl font-extrabold tabular gradient-text">
                  {vehicle.pricePerWeek}
                </span>
                <span className="text-base font-semibold text-muted-foreground">lei / saptamana</span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground tabular">
                {vehicle.pricePerDay} lei/zi · {vehicle.pricePerMonth} lei/luna
              </p>

              <div className="mt-5 grid grid-cols-2 gap-2">
                <Button asChild size="lg" className="col-span-2">
                  <Link to={`/rezerva/${vehicle.slug}`}>
                    Rezerva acum <ChevronRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="col-span-2">
                  <a
                    href={whatsappLink(waMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-4 w-4" /> Intreaba pe WhatsApp
                  </a>
                </Button>
              </div>
              <p className="mt-3 text-center text-[11px] text-muted-foreground">
                Te sunam in maxim 1h la {SITE.phoneDisplay}
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-border bg-card p-6">
              <h3 className="font-display text-lg font-bold">Specificatii</h3>
              <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
                {vehicle.transmission && (
                  <Spec
                    Icon={Settings2}
                    label="Transmisie"
                    value={vehicle.transmission === "automat" ? "Automata" : "Manuala"}
                  />
                )}
                <Spec
                  Icon={vehicle.fuel === "electric" ? Zap : Fuel}
                  label="Tip"
                  value={vehicle.fuel === "electric" ? "Electric" : vehicle.fuel}
                />
                {vehicle.autonomyKm && (
                  <Spec Icon={Gauge} label="Autonomie" value={`${vehicle.autonomyKm} km`} />
                )}
                {vehicle.topSpeedKmh && (
                  <Spec Icon={Gauge} label="Viteza max." value={`${vehicle.topSpeedKmh} km/h`} />
                )}
                {vehicle.consumptionLper100 && (
                  <Spec
                    Icon={Fuel}
                    label="Consum"
                    value={`${vehicle.consumptionLper100} L/100km`}
                  />
                )}
                {vehicle.seats && (
                  <Spec Icon={Users} label="Locuri" value={`${vehicle.seats}`} />
                )}
                {vehicle.cargoLiters && (
                  <Spec Icon={CheckCircle2} label="Cargo" value={`${vehicle.cargoLiters} L`} />
                )}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {similar.length > 0 && (
        <section className="border-t border-border bg-background-soft py-16">
          <div className="container-page">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                  Modele similare
                </p>
                <h2 className="mt-2 font-display text-2xl font-extrabold sm:text-3xl">
                  Alte optiuni din {category.title}
                </h2>
              </div>
              <Link
                to={`/inchiriere/${category.slug}`}
                className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
              >
                Vezi toate <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {similar.map((v, i) => (
                <VehicleCard key={v.id} vehicle={v} index={i} categorySlug={category.slug} />
              ))}
            </div>
          </div>
        </section>
      )}

      <div className="container-page py-8">
        <Link
          to={`/inchiriere/${category.slug}`}
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary"
        >
          <ChevronLeft className="h-4 w-4" /> Inapoi la {category.title}
        </Link>
      </div>
    </SiteLayout>
  );
};

function Spec({
  Icon,
  label,
  value,
}: {
  Icon: typeof Gauge;
  label: string;
  value: string;
}) {
  return (
    <div>
      <dt className="flex items-center gap-1.5 text-xs uppercase tracking-wider text-muted-foreground">
        <Icon className="h-3.5 w-3.5 text-primary" /> {label}
      </dt>
      <dd className="mt-1 font-semibold capitalize">{value}</dd>
    </div>
  );
}

export default VehicleDetail;
