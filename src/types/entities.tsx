export type FullHoverAnimationType = {
  text: string;
  link?: string;
};

export type TitrType = {
  title: string;
  borderColor?: string;
  item: "text-center" | "text-left" | "text-right" | string;
  style?: string;
  resetStyle?: boolean;
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

export type FormData = {
  name: string;
  email: string;
  message: string;
};

export type SinglePagepParamsType = {
  id: string;
};
export type MenuTypes = {
  pathname: string;
  nav: {
    id: number;
    name: string;
    link: string;
  }[];
};

export type FooterLinkType = {
  id: number;
  title: string;
  href: string;
  icon: JSX.Element;
};

export type PriceItemType = {
  id: number;
  titr: string;
  special: boolean;
  description: string;
  features: { id: number; name: string; mark: boolean }[];
};

export type SharePostType = {
  POSTURL: string;
  title: string;
  description: string;
};
export type SocialMediaType = {
  id: number;
  name: string;
  icon: JSX.Element;
  link: string;
};

export type FallbackProps = {
  error: Error;
  resetErrorBoundary: () => void;
  retryCount: number;
  setRetryCount: React.Dispatch<React.SetStateAction<number>>;
};

export type ShareFormType = {
  buttonText: string;
  initalData: any;
  API: string;
};
