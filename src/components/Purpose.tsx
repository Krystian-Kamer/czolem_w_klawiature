import { useContext } from "react";
import { ContextBgValue } from "../types";
import { AppContext } from "../App";
import SectionTitle from "./SectionTitle";

const Purpose = () => {
  const { sectionTwoRef } = useContext<ContextBgValue>(AppContext);

  return (
    <div ref={sectionTwoRef}>
      <SectionTitle title="hello" />
    </div>
  );
};
export default Purpose;
