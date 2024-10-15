import { useContext } from "react";
import { ContextBgValue } from "../types";
import { AppContext } from "../App";

const ForRecruiter = () => {
  const { sectionFourRef } = useContext<ContextBgValue>(AppContext);

  return <div ref={sectionFourRef}>For Recruiter</div>;
};
export default ForRecruiter;
