const API_URL = process.env.API_URL;
const SiteConfig = {
  name: "مگنتی فای",
  title: " مگنتی فای بر هوش مصنوعی، ثروت و خودسازی مسلط شوید تا قدرت های فوق العاده خود را باز کنید",
  description:
    "مگنتی فای مقالات پیشرفته ای در مورد هوش مصنوعی، خودسازی، کسب و کار و ثروت ارائه می دهد. خود را با دانش توانمند کنید و به یک نیروی مافوق بشری تبدیل شوید",
  keywords: "مگنتی فای , کسب و کار , هوش مصنوعی , خودسازی , ثروت , پول",
  authors: [{ name: " تیم مگنتی فای", url: API_URL }],
  siteURL: `${API_URL}`,
  lang: "fa",
  dir: "rtl",
  // media
  email: "homayoun763@gmail.com",
  github: "https://github.com/homayunmmdy",
  phoneNumber: "0922 4003 487",
  linkedin: "https://www.linkedin.com/in/homayunmmdy/",
  robots: "index , follow",
  author: " تیم مگنتی فای",
  authorID: "magnitify_Team",
  // Navbar
  nav: [
    {
      id: 1,
      name: "خانه",
      link: "/",
    },
    {
      id: 2,
      name: " آرشیو",
      link: "/archive",
    },
    {
      id: 3,
      name: " ورود",
      link: "/sign-in",
    },
    {
      id: 4,
      name: " ثبت نام",
      link: "/sign-up",
    },
    {
      id: 5,
      name: "تماس باما",
      link: "/contacts",
    },
  ],
};

export default SiteConfig;
