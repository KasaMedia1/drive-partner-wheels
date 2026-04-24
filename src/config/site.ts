// DrivePartner site-wide constants. Phone is a placeholder, mark before launch.
export const SITE = {
  name: "DrivePartner",
  city: "Bucuresti",
  phoneDisplay: "+40 7xx xxx xxx",
  phoneE164: "+40700000000", // placeholder
  whatsappNumber: "40700000000", // placeholder, no plus
  email: "contact@drivepartner.ro",
  address: "Str. Exemplu 12, Bucuresti",
  program: "Luni-Vineri 09:00-19:00 · Sambata 10:00-15:00",
  social: {
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
    tiktok: "https://tiktok.com/",
  },
};

export function whatsappLink(message: string): string {
  // Cap message length to keep URL safe.
  const safe = message.slice(0, 1500);
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(safe)}`;
}

export function telLink(): string {
  return `tel:${SITE.phoneE164}`;
}
