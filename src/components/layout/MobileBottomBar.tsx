import { MessageCircle, Phone } from "lucide-react";
import { SITE, telLink, whatsappLink } from "@/config/site";

export function MobileBottomBar() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-30 lg:hidden border-t border-border bg-background/95 backdrop-blur-md shadow-card">
      <div className="grid grid-cols-2">
        <a
          href={telLink()}
          className="flex items-center justify-center gap-2 py-3.5 text-sm font-semibold border-r border-border"
        >
          <Phone className="h-4 w-4 text-primary" />
          Suna acum
        </a>
        <a
          href={whatsappLink(`Buna! As dori informatii despre inchiriere ${SITE.name}.`)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3.5 text-sm font-semibold gradient-primary text-primary-foreground"
        >
          <MessageCircle className="h-4 w-4" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
