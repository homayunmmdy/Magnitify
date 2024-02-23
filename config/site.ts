export interface NavType {
    id: number;
    name : string;
    href : string;
  }
export interface SiteConfigType {
  siteName: string;
  nav : NavType[];
}

const SiteConfig: SiteConfigType = {
  siteName: "مگ نتی فای",
  nav : [
    {
        id : 1,
        name : "صحفه نخست",
        href:"/"
    }
  ]
};

export default SiteConfig;
