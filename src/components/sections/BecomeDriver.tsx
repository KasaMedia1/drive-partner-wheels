import { ArrowRight, Zap, Wallet, Headphones } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import livratorImg from "@/assets/livrator-drivepartner.jpg";

export function BecomeDriver() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container-page">
        <div className="overflow-hidden rounded-3xl border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-card shadow-card">
          <div className="grid lg:grid-cols-2">
            <div className="relative min-h-[280px] lg:min-h-full">
              <img
                src={livratorImg}
                alt="Livrator pe scuter in oras la apus"
                loading="lazy"
                width={1280}
                height={960}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-card/40" />
            </div>
            <div className="p-6 sm:p-10 lg:p-12">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">Activare ca livrator</p>
              <h2 className="mt-2 font-display text-3xl font-extrabold sm:text-4xl lg:text-5xl">Vrei sa devii livrator?</h2>
              <p className="mt-4 text-muted-foreground">
                Noi iti dam vehiculul, iar restul il rezolvam tot noi prin <strong className="text-foreground">DrivePartner</strong> - brandul nostru dedicat exclusiv livratorilor pe Bolt Food, Glovo si Wolt.
              </p>
              <p className="mt-3 text-muted-foreground">
                Iti deschidem contul de livrator, iti activam aplicatiile, te ghidam cu actele si iti procesam platile saptamanale direct in cont. In cateva zile esti gata de prima tura, fara sa te plimbi prin birouri.
              </p>

              <div className="mt-6 space-y-3">
                <div className="flex items-start gap-3">
                  <div className="rounded-lg bg-primary/10 p-2"><Zap className="h-4 w-4 text-primary" /></div>
                  <div><p className="font-semibold text-sm">Activare in 24-48h</p><p className="text-xs text-muted-foreground">Cont, aplicatii si acte gata, fara batai de cap.</p></div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-lg bg-primary/10 p-2"><Wallet className="h-4 w-4 text-primary" /></div>
                  <div><p className="font-semibold text-sm">Plati saptamanale</p><p className="text-xs text-muted-foreground">Banii ajung direct in contul tau, transparent.</p></div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-lg bg-primary/10 p-2"><Headphones className="h-4 w-4 text-primary" /></div>
                  <div><p className="font-semibold text-sm">Suport 7 zile/sapt</p><p className="text-xs text-muted-foreground">Echipa noastra te ajuta cand apare orice problema.</p></div>
                </div>
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <a href="https://drivepartner.ro" target="_blank" rel="noopener noreferrer">
                    Mergi pe drivepartner.ro <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg"><Link to="/inchiriere">Vezi vehiculele disponibile</Link></Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
