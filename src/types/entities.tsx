export type FullHoverAnimationType = {
  text: string;
  link?: string;
};

export type TitrType = {
  title: string;
  item: "text-center" | "text-left" | "text-right" | string;
  style?: string;
};

export type FeaturesType = {
  id: number;
  title: string;
  icon: JSX.Element;
  description: string;
};

export type CollapseType = {
  id: number;
  label: string;
  body: string;
};

export type MenuTypes = {
  pathname: string;
  nav: {
    id: number;
    name: string;
    link: string;
  }[];
}
