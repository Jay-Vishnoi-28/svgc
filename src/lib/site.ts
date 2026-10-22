// Central college details. Values marked PLACEHOLDER must be replaced with verified information.
export const SITE = {
  name: "Shri Vidhya Sagar College",
  short: "SVC",
  tagline: "Empowering Higher Education in Khategaon Since 1997",
  established: 1997,
  affiliation: "To be updated",
  board: "University-affiliated",
  principal: "Alok Jain",
  address: "Khategaon, Dewas, Madhya Pradesh, India",
  phone: "", // PLACEHOLDER: add verified phone, e.g. "+91XXXXXXXXXX"
  email: "", // PLACEHOLDER: add verified email
  whatsapp: "", // PLACEHOLDER: add verified WhatsApp number in international format without +
  website: "", // PLACEHOLDER: official website URL
  social: {
    facebook: "https://www.facebook.com/svpskhategaon/",
    youtube: "https://www.youtube.com/@svpsktg",
    instagram:
      "https://www.instagram.com/explore/locations/1613990498892380/vidhya-sagar-college-khategaon/",
  },
  mapQuery: "Shri Vidhya Sagar College Khategaon Dewas",
};

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/academics", label: "Academics" },
  { to: "/faculty", label: "Faculty" },
  { to: "/activities", label: "Activities" },
  { to: "/facilities", label: "Facilities" },
  { to: "/achievements", label: "Achievements" },
  { to: "/gallery", label: "Gallery" },
  { to: "/admissions", label: "Admissions" },
  { to: "/contact", label: "Contact" },
] as const;

export function pageHead(title: string, description: string) {
  const t = `${title} | ${SITE.name}, Khategaon`;
  return {
    meta: [
      { title: t },
      { name: "description", content: description },
      { property: "og:title", content: t },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  };
}
