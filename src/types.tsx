export type NavLink = {
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
};

export type SectionType = {
  id: string;
  children: JSX.Element;
  cursorStyle: "cursor-dark" | 'cursor-light'
  bgColor: string;
  height: string;
}