import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-courier.png";
import { telLink, SITE } from "@/config/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background image - full bleed on desktop */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt="Curier pe scuter livrand in Bucuresti"
          className="h-full w-full object-cover object-right"
          loading="eager"
        />
        {/* Left-fade overlay so text stays readable, rider on right stays clear */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-transparent md:via-background/70 lg:via-background/55 lg:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent md:hidden" />
      </div>

      <div className="container-page py-16 md:py-24 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-xl lg:max-w-[52%]"
        >
          <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Mobilitate urbana{" "}
            <span className="gradient-text">pentru curieri, ridesharing si naveta.</span>
          </h1>
          <p className="mt-5 max-w-lg text-base text-foreground/80 sm:text-lg">
            DriveRent ofera solutii moderne de inchiriere pentru cei care au nevoie de mobilitate rapida si eficienta in oras. Scutere, biciclete electrice si masini pregatite pentru utilizare imediata.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="shadow-elevate">
              <Link to="/inchiriere">
                Vezi categoriile <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-background/70 backdrop-blur">
              <Link to="/contact">Solicita oferta</Link>
            </Button>
          </div>
          <div className="mt-8 flex items-center gap-6 text-sm text-foreground/70">
            <a href={telLink()} className="flex items-center gap-2 font-semibold text-foreground hover:text-primary">
              <Phone className="h-4 w-4" /> {SITE.phoneDisplay}
            </a>
            <span className="hidden sm:inline">·</span>
            <span>Raspundem in maxim 1 ora</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
