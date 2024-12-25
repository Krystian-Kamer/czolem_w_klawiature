export type NavLinkType = {
  id: string;
  to: string;
};

export type ContextValue = {
  heroRef: (node?: Element | null) => void;
  sectionTwoRef: (node?: Element | null) => void;
  sectionFourRef: (node?: Element | null) => void;
  isHeroInView: boolean;
  isSectionTwoInView: boolean;
  isSectionFourInView: boolean;
  isBgDark: boolean;
  windowHeight: number;
  windowWidth: number;
};

export type SectionType = {
  id: string;
  children: JSX.Element;
  bgColor: string;
  height: string;
  isLastChild?: boolean;
};

export type Skill = {
  name: string;
  id: string;
  icon: JSX.Element;
  checked: boolean;
  text: string;
};

export type Recruitment = {
  id: number;
  question: string;
  answer: string;
  isAsked: boolean;
  order: null | number;
};

export type PostType = {
  id: string;
  title: string;
  imageSmall: string;
  imageBig: string;
  text: string;
  date: string;
  post: JSX.Element;
  category: string;
};

export type ProjectType = {
  id: number;
  name: string;
  img: string;
  description: string;
  technology: string;
  github: string;
  live: string;
  mobileVideo: string;
  desktopVideo: string;
  thoughts: string;
};

export type FileType = {
  id: number;
  name: string;
  icon: JSX.Element;
  focus: string;
  href?: string;
  to?: string;
};
