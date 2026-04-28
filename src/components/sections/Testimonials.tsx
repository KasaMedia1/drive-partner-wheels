import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Star } from "lucide-react";

const items = [
  { name: "Andrei M.", role: "Sofer Uber din 2023", quote: "Am luat Toyota Corolla Hybrid si consumul a scazut considerabil. Masina e impecabila si suportul e rapid cand am nevoie.", initials: "AM" },
  { name: "Madalin P.", role: "Curier Glovo", quote: "Merg cu Sym Symphony 125 zilnic prin Bucuresti. Pornire instant, ture lungi fara probleme si service inclus.", initials: "MP" },
  { name: "Cristian D.", role: "Sofer Bolt", quote: "Toyota Camry Hybrid e o investitie buna pentru oras. Confort de business, consum mic si clientii imi dau rating maxim.", initials: "CD" },
  { name: "Ioana T.", role: "Curier Wolt", quote: "Cu Peugeot Kisbee fara permis am inceput sa livrez in 2 zile. 250 lei/saptamana si gata, sunt pe drum.", initials: "IT" },
  { name: "Razvan S.", role: "Sofer Bolt", quote: "Am ales Toyota Aygo X pentru economie. La 400 lei/saptamana e cel mai bun raport calitate-pret pentru oras.", initials: "RS" },
  { name: "Alex G.", role: "Curier Glovo", quote: "Honda PCX 125 e o bestie. Stabil, rapid si arata premium. Clientii ma observa de departe.", initials: "AG" },
];

export function Testimonials() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Ce spun partenerii</p>
          <h2 className="mt-2 font-display text-3xl font-extrabold sm:text-4xl">Soferi si curieri care castiga zilnic.</h2>
        </div>

        <Carousel className="mt-10" opts={{ align: "start", loop: true }}>
          <CarouselContent>
            {items.map((t) => (
              <CarouselItem key={t.name} className="md:basis-1/2 lg:basis-1/3">
                <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-card">
                  <div className="flex gap-0.5 text-primary">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="mt-4 text-base leading-relaxed">"{t.quote}"</p>
                  <div className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                    <div className="grid h-10 w-10 place-items-center rounded-full gradient-primary font-display text-sm font-bold text-primary-foreground">
                      {t.initials}
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-6 flex justify-end gap-2">
            <CarouselPrevious className="static translate-y-0" />
            <CarouselNext className="static translate-y-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
