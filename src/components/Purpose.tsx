import { useContext } from "react";
import { ContextBgValue } from "../types";
import { AppContext } from "../App";

const Purpose = () => {
  const { sectionTwoRef } = useContext<ContextBgValue>(AppContext);

  return <div ref={sectionTwoRef}>Purpose</div>;
};
export default Purpose;
