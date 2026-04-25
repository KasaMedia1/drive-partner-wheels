import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { SiteLayout } from "@/components/layout/SiteLayout";
import { Seo } from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "@/hooks/use-toast";
import { SITE, telLink, whatsappLink } from "@/config/site";

const schema = z.object({
  nume: z.string().trim().min(2, "Nume prea scurt").max(80),
  telefon: z.string().trim().min(9, "Numar invalid").max(20).regex(/^[0-9+\s().-]+$/, "Doar cifre si simboluri"),
  mesaj: z.string().trim().min(10, "Spune-ne mai multe").max(500),
});

const Contact = () => {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: { nume: "", telefon: "", mesaj: "" },
  });

  const onSubmit = (v: z.infer<typeof schema>) => {
    const text = `Mesaj de pe site DriveRent\nNume: ${v.nume}\nTelefon: ${v.telefon}\n\n${v.mesaj}`;
    window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
    toast({ title: "Mesaj trimis pe WhatsApp", description: "Te sunam in maxim 1 ora." });
    form.reset();
  };

  return (
    <SiteLayout>
      <Seo title="Contact DriveRent | Bucuresti" description="Contacteaza echipa DriveRent. Telefon, WhatsApp, email si adresa biroului din Bucuresti." path="/contact" />

      <section className="container-page py-14 lg:py-20 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Contact</p>
          <h1 className="mt-3 font-display text-4xl font-extrabold sm:text-5xl">Vorbim pe limba ta.</h1>
          <p className="mt-4 text-muted-foreground max-w-md">Suna, scrie pe WhatsApp sau trimite formularul. Iti raspundem in maxim 1 ora.</p>

          <ul className="mt-8 space-y-5">
            <ContactRow Icon={Phone} label="Telefon" value={SITE.phoneDisplay} href={telLink()} />
            <ContactRow Icon={MessageCircle} label="WhatsApp" value="Scrie-ne acum" href={whatsappLink(`Buna! As dori informatii despre ${SITE.name}.`)} />
            <ContactRow Icon={Mail} label="Email" value={SITE.email} href={`mailto:${SITE.email}`} />
            <ContactRow Icon={MapPin} label="Adresa" value={`${SITE.address}, ${SITE.city}`} />
          </ul>

          <div className="mt-8 rounded-2xl border border-border bg-card p-5">
            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Program</p>
            <p className="mt-2 text-sm">{SITE.program}</p>
          </div>
        </div>

        <div className="rounded-3xl border border-border bg-card p-6 shadow-elevate sm:p-8">
          <h2 className="font-display text-2xl font-bold">Trimite-ne un mesaj</h2>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="mt-6 space-y-4">
              <FormField name="nume" control={form.control} render={({ field }) => (
                <FormItem><FormLabel>Nume</FormLabel><FormControl><Input placeholder="Ion Popescu" {...field} /></FormControl><FormMessage /></FormItem>
              )} />
              <FormField name="telefon" control={form.control} render={({ field }) => (
                <FormItem><FormLabel>Telefon</FormLabel><FormControl><Input type="tel" placeholder="07xx xxx xxx" {...field} /></FormControl><FormMessage /></FormItem>
              )} />
              <FormField name="mesaj" control={form.control} render={({ field }) => (
                <FormItem><FormLabel>Mesaj</FormLabel><FormControl><Textarea rows={5} placeholder="Despre ce vrei sa vorbim?" {...field} /></FormControl><FormMessage /></FormItem>
              )} />
              <Button type="submit" size="lg" className="w-full"><MessageCircle className="h-4 w-4" /> Trimite pe WhatsApp</Button>
            </form>
          </Form>
        </div>
      </section>
    </SiteLayout>
  );
};

function ContactRow({ Icon, label, value, href }: { Icon: any; label: string; value: string; href?: string }) {
  const inner = (
    <div className="flex items-start gap-4">
      <div className="grid h-11 w-11 place-items-center rounded-xl gradient-soft text-primary"><Icon className="h-5 w-5" /></div>
      <div>
        <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{label}</p>
        <p className="mt-0.5 font-semibold tabular">{value}</p>
      </div>
    </div>
  );
  return <li>{href ? <a href={href} className="block hover:opacity-80 transition-opacity">{inner}</a> : inner}</li>;
}

export default Contact;
