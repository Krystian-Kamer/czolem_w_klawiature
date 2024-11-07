import { useContext } from "react";
import { ContextBgValue } from "../types";
import { AppContext } from "../App";
import SectionTitle from "./SectionTitle";

const ForRecruiter = () => {
  const { sectionFourRef } = useContext<ContextBgValue>(AppContext);

  return (
    <div className="flex flex-col mt-20 bg-red-500">
      <div className="prose" ref={sectionFourRef}>
        <SectionTitle title="Skille" />
      </div>
      <div>
        <p className="w-2/3">
          Lorem ipsum dolor sit amet consn suscipit aliquam quisquam fugiat aspernatur! Sint
          assumenda, repellendus porro eveniet quisquam voluptatibus quis ea
          aliquid velit, quia dicta a. Ipsam voluptatem reiciendis quidem
          repellat facilis aspernatur nesciunt maxime rerum voluptatum id
          consectetur, iure aliquid hic adipisci odio fugit veritatis dolore
          tempora? Ad omnis fuga quidem iusto quisquam consequuntur nam.
        </p>
      </div>
    </div>
  );
};
export default ForRecruiter;
