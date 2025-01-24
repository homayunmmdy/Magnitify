const API_URL = process.env.API_URL || "https://nexca.vercel.app/";
const SiteConfig = {
  name: "کافی بلاگ",
  title:
    "کافی بلاگ یک وب‌سایت اطلاعات عمومی است که در آن داستان‌های جالب و آموزنده درباره کسب‌وکارها، تاریخ، اخبار، و موضوعات متنوع دیگر به اشتراک گذاشته می‌شود. این وب‌سایت مکانی است برای افزایش آگاهی و یادگیری چیزهای جدید از دنیای اطراف ما. اگر به دنبال مطالب جذاب و مفید هستید، کافی بلاگ را دنبال کنید!",
  description:
    "کافی بلاگ یک وب‌سایت اطلاعات عمومی است که در آن داستان‌های جالب و آموزنده درباره کسب‌وکارها، تاریخ، اخبار، و موضوعات متنوع دیگر به اشتراک گذاشته می‌شود. این وب‌سایت مکانی است برای افزایش آگاهی و یادگیری چیزهای جدید از دنیای اطراف ما. اگر به دنبال مطالب جذاب و مفید هستید، کافی بلاگ را دنبال کنید!",
  keywords: "Admin panel , Dashboard , Custom panel, Data Ma Data management",
  authors: [{ name: "تیم کافی بلاگ", url: API_URL }],
  siteURL: API_URL,
  lang: "fa",
  dir: "rtl",
  slogan:
    "کافی بلاگ مرجع داستان‌های جالب و آموزنده درباره کسب‌وکارها، تاریخ، اخبار، و موضوعات متنوع دیگر. با ما همراه شوید و از مطالب مفید و جذاب لذت ببرید!",
  // media
  email: "homayoun763@gmail.com",
  github: "https://github.com/homayunmmdy/Nexca",
  phoneNumber: "0922 4003 487",
  linkedin: "https://www.linkedin.com/in/homayunmmdy/",
  robots: "index , follow",
  author: "CoffeBlog Team",
  authorID: "CoffeBlog_Team",
  // Navbar
  nav: [
    {
      id: 1,
      name: "خانه",
      link: "/",
    },
    {
      id: 2,
      name: "هوش مصنوعی",
      link: "/services/1",
    },
    {
      id: 3,
      name: "کسب و کار",
      link: "/services/3",
    },
    {
      id: 4,
      name: "تاریخ و بیوگرافی",
      link: "/services/5",
    },
    {
      id: 5,
      name: "تجربه من",
      link: "/services/6",
    },
    {
      id: 6,
      name: "پست های بیشتر",
      link: "/services/4",
    },
  ],
};

export default SiteConfig;
