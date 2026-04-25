import { Link, useParams } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Seo } from "@/components/Seo";
import { VehicleCard } from "@/components/VehicleCard";
import { getCategoryBySlug, getVehiclesInCategory } from "@/data/categories";
import NotFound from "./NotFound";

const InchiriereCategorie = () => {
  const { categorie } = useParams<{ categorie: string }>();
  const category = getCategoryBySlug(categorie);

  if (!category) return <NotFound />;

  const vehicles = getVehiclesInCategory(category.slug);

  return (
    <SiteLayout>
      <Seo
        title={`${category.title} | Inchiriere DriveRent`}
        description={`${category.intro} ${vehicles.length} modele disponibile in Bucuresti.`}
        path={`/inchiriere/${category.slug}`}
      />

      <section className="border-b border-border bg-background-soft">
        <div className="container-page py-10 sm:py-14">
          <nav className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Link to="/inchiriere" className="hover:text-primary">Inchiriere</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="font-semibold text-foreground">{category.title}</span>
          </nav>

          <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-xl gradient-primary text-primary-foreground shadow-elevate">
                  <category.Icon className="h-5 w-5" />
                </div>
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Categorie</p>
              </div>
              <h1 className="mt-4 font-display text-3xl font-extrabold sm:text-5xl">{category.title}</h1>
              <p className="mt-3 text-muted-foreground">{category.intro}</p>
              <p className="mt-2 text-sm font-semibold text-foreground/80">{category.audience}</p>
            </div>
            <span className="text-sm text-muted-foreground tabular shrink-0">
              {vehicles.length} {vehicles.length === 1 ? "model disponibil" : "modele disponibile"}
            </span>
          </div>
        </div>
      </section>

      <section className="container-page py-12 sm:py-16">
        {vehicles.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-border bg-card p-12 text-center">
            <p className="font-display text-xl font-bold">Niciun model disponibil momentan in aceasta categorie.</p>
            <Link to="/inchiriere" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
              <ChevronLeft className="h-4 w-4" /> Inapoi la categorii
            </Link>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {vehicles.map((v, i) => (
              <VehicleCard key={v.id} vehicle={v} index={i} categorySlug={category.slug} />
            ))}
          </div>
        )}
      </section>
    </SiteLayout>
  );
};

export default InchiriereCategorie;
