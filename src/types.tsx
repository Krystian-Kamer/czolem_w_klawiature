export type NavLinkType = {
  id: string;
  to: string;
};

export type ContextBgValue = {
  heroRef: (node?: Element | null) => void;
  sectionTwoRef: (node?: Element | null) => void;
  sectionFourRef: (node?: Element | null) => void;
  isHeroInView: boolean;
  isSectionTwoInView: boolean;
  isSectionFourInView: boolean;
  isBgDark: boolean;
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
  text: string
};
