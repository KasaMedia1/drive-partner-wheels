import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Ce acte imi trebuie pentru a inchiria?", a: "Buletin si permis de conducere valabil. Pentru masini, minim 21 ani si permis de cel putin 2 ani. Trimiti pozele prin WhatsApp si in 2 ore primesti raspuns." },
  { q: "Care este garantia?", a: "Garantia variaza intre 500 si 2500 lei in functie de vehicul. Se returneaza integral la finalul contractului daca nu sunt daune." },
  { q: "Ce se intampla daca am un accident?", a: "Suni la asistenta 24/7. Trimitem un coleg la fata locului, primesti masina de inlocuire in 2 ore si noi ne ocupam de toate formalitatile cu asigurarea." },
  { q: "Pot schimba vehiculul in timpul contractului?", a: "Da, fara costuri. Daca vrei sa treci de la un scuter la o masina sau invers, refacem doar contractul." },
  { q: "Ce este inclus in pret?", a: "Asigurare RCA + CASCO, service complet, revizii, asistenta 24/7 si vehicul de inlocuire la nevoie. Tu pui doar combustibilul." },
  { q: "Pot prelungi inchirierea?", a: "Sigur. Anunti cu 48h inainte si prelungim contractul. Daca treci la o perioada mai lunga, beneficiezi automat de tariful redus." },
  { q: "Cum se face plata?", a: "Plata se face saptamanal sau lunar, in avans, prin transfer bancar, card sau cash la sediu." },
  { q: "Pot sa folosesc vehiculul si in afara Bucurestiului?", a: "Da, pe tot teritoriul Romaniei. Pentru iesirile in afara tarii este nevoie de aprobare scrisa." },
];

export function Faq() {
  return (
    <section className="py-16 sm:py-20 bg-background-soft">
      <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Intrebari frecvente</p>
          <h2 className="mt-2 font-display text-3xl font-extrabold sm:text-4xl">Tot ce vrei sa stii inainte sa rezervi.</h2>
          <p className="mt-3 text-muted-foreground">Daca nu gasesti raspunsul aici, scrie-ne pe WhatsApp si revenim in maxim 1 ora.</p>
        </div>
        <Accordion type="single" collapsible className="rounded-2xl border border-border bg-card px-2 sm:px-4 shadow-card">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-border">
              <AccordionTrigger className="text-left font-display text-base font-semibold hover:no-underline">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
