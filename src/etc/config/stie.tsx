const API_URL = process.env.API_URL;
const SiteConfig = {
  name: "Magnitify",
  title: "Magnitify Master AI, Wealth, and Self-Improvement to Unlock Your Superpowers",
  description:
    "Magnitify offers cutting-edge articles on AI, self-improvement, business, and wealth. Empower yourself with knowledge and transform into a superhuman force",
  keywords: "magnitify , business , homayoun mohammadi , ai , blog , article",
  authors: [{ name: "Magnitify Team", url: API_URL }],
  siteURL: `${API_URL}`,
  lang: "en",
  dir: "ltr",
  // media
  email: "homayoun763@gmail.com",
  github: "https://github.com/homayunmmdy/Nexca",
  phoneNumber: "0922 4003 487",
  linkedin: "https://www.linkedin.com/in/homayunmmdy/",
  robots: "index , follow",
  author: "Magnitify Team",
  authorID: "magnitify_Team",
  // Navbar
  nav: [
    {
      id: 1,
      name: "Home",
      link: "/",
    },
    {
      id: 2,
      name: " Archive",
      link: "/archive",
    },
    {
      id: 3,
      name: " Login",
      link: "/sign-in",
    },
    {
      id: 4,
      name: " Sign Up",
      link: "/sign-up",
    },
    {
      id: 5,
      name: "Contacts",
      link: "/contacts",
    },
  ],
};

export default SiteConfig;
