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
