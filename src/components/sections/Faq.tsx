import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "Ce acte îmi trebuie pentru a închiria?",
    a: "Pentru scuterele fără permis (50cc, limitate la 25 km/h) este nevoie doar de buletin – nu îți trebuie permis sau atestat. Pentru scutere 125cc ai nevoie de buletin și permis categoria A1, A2 sau B (obținut înainte de 2018). Pentru mașini: buletin, permis categoria B valabil de minim 1 an și vârsta minimă 21 ani. Trimiți pozele actelor pe WhatsApp și primești răspuns în maxim 1 oră.",
  },
  {
    q: "Care este garanția?",
    a: "Garanția se reține la predarea vehiculului și se returnează integral la finalul contractului dacă nu sunt daune. Valori orientative: 200-500 lei pentru biciclete electrice și scutere, 500-800 lei pentru scutere 125cc, 1500-3000 lei pentru mașini. Suma exactă o vezi pe pagina fiecărui vehicul, înainte de rezervare.",
  },
  {
    q: "Ce condiții cere Uber/Bolt pentru șoferi?",
    a: "Conform OUG 49/2019, ai nevoie de: atestat profesional pentru transport persoane, aviz medical și psihologic valabile, cazier judiciar și cazier auto curat, permis categoria B obținut de minim 2 ani și vârsta minimă 21 ani. Trebuie să lucrezi sub o formă juridică (PFA sau SRL) sau ca angajat al unei flote partenere. Te ghidăm noi prin tot procesul.",
  },
  {
    q: "Ce se întâmplă dacă am un accident?",
    a: "Suni la asistența 24/7 și un coleg vine la fața locului. Toate vehiculele au RCA + CASCO complet, iar mașinile au în plus și asigurare obligatorie pentru pasageri și bagaje. Îți punem la dispoziție un vehicul de înlocuire în maxim 2 ore (în București) și ne ocupăm de toate formalitățile cu asigurarea.",
  },
  {
    q: "Pot schimba vehiculul în timpul contractului?",
    a: "Da, fără costuri suplimentare. Dacă vrei să treci de la un scuter la o mașină, de la 50cc la 125cc sau invers, refacem doar contractul și actualizăm garanția. Util mai ales dacă schimbi platforma (de ex. de la Glovo la Uber).",
  },
  {
    q: "Ce este inclus în preț?",
    a: "RCA, CASCO, ITP la 6 luni (obligatoriu pentru transport alternativ), service complet și revizii periodice, asistență rutieră 24/7 și vehicul de înlocuire la nevoie. Pentru mașini este inclusă și asigurarea pasageri/bagaje. Nu sunt incluse: combustibilul/încărcarea, amenzile, rovinieta pentru ieșiri în țară și daunele din vina ta.",
  },
  {
    q: "Pot prelungi închirierea?",
    a: "Da. Anunți cu minim 48h înainte și prelungim contractul fără să muți vehiculul. Dacă treci pe o perioadă mai lungă (lună sau 3 luni), beneficiezi automat de tariful redus, fără să ceri.",
  },
  {
    q: "Cum se face plata și când primesc banii din curse?",
    a: "Chiria către noi se plătește săptămânal sau lunar, în avans, prin transfer bancar, card sau cash la sediu. Banii din curse îi primești direct de la platformă (Uber, Bolt, Glovo, Wolt) în contul tău, săptămânal – nu trec prin noi, deci sunt complet transparenți.",
  },
  {
    q: "Există kilometri limitați sau comision din încasări?",
    a: "Nu. Lucrezi câte ore vrei, faci câți kilometri vrei și păstrezi 100% din încasările tale. Singura obligație este chiria săptămânală și combustibilul/încărcarea.",
  },
  {
    q: "Pot folosi vehiculul și în afara Bucureștiului?",
    a: "Da, pe tot teritoriul României. Pentru ieșirile în afara țării este nevoie de aprobare scrisă în prealabil și de carte verde (asigurare internațională), pe care ți-o emitem noi.",
  },
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
