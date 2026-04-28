// DriveRent site-wide constants. Phone is a placeholder, mark before launch.
export const SITE = {
  name: "DriveRent",
  city: "Bucuresti",
  phoneDisplay: "+40 728 126 988",
  phoneE164: "+40728126988",
  whatsappNumber: "40728126988",
  email: "drive.partner@yahoo.com",
  address: "Calea Vitan Nr. 152, Sector 3",
  program: "Luni-Vineri 09:00-19:00 · Sambata 10:00-15:00",
  social: {
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
    tiktok: "https://tiktok.com/",
  },
};

export function whatsappLink(message: string): string {
  const safe = message.slice(0, 1500);
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(safe)}`;
}

export function telLink(): string {
  return `tel:${SITE.phoneE164}`;
}
