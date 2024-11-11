import { useContext, useState } from "react";
import { ContextBgValue } from "../types";
import { AppContext } from "../App";
import SectionTitle from "./SectionTitle";
import lampImg from "../assets/lamp.png";
import deskImg from "../assets/desk.png";
import cvImg from "../assets/CV.jpg";
import heroImg from "../assets/hero-img.png";

const ForRecruiter = () => {
  const { sectionFourRef } = useContext<ContextBgValue>(AppContext);
  const [isLightOn, setIsLightOn] = useState(false);

  return (
    <div className="mx-8 flex flex-col md:mt-14 lg:mt-20">
      <div className="prose z-50" ref={sectionFourRef}>
        <SectionTitle title="Dla rekrutera" />
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <p className="text-lg text-neutral selection:bg-neutral selection:text-secondary md:mt-10 md:text-2xl">
            Serdecznie zapraszam do zapoznania się z moim CV, które znajduje się
            na biurku. Najpierw jednak trzeba zapalić światło. Polecam też
            zajrzeć do portfolio.
          </p>
          <div className="divider divider-secondary mr-10 mt-10"></div>
          <div className="mr-10 mt-10 hidden md:block">
            <div className="chat chat-start">
              <div className="avatar chat-image">
                <div className="w-10 rounded-full">
                  <img
                    alt="owner image"
                    className="translate-x-1/2 translate-y-2 scale-[500%] bg-accent"
                    src={heroImg}
                  />
                </div>
              </div>
              <div className="chat-header text-neutral selection:bg-neutral selection:text-secondary">
                Krystian Kamer
              </div>
              <div className="chat-bubble text-lg selection:bg-secondary selection:text-neutral">
                To wspaniały moment, aby zadać mi jakieś pytanie.
              </div>
            </div>

            <p className="text-neutral">1. CO PANI JE</p>
            <p className="text-neutral">1. CO PANI JE</p>
            <p className="text-neutral">1. CO PANI JE</p>
            <div className="chat chat-end">
              <div className="avatar chat-image">
                <div className="w-10 rounded-full">
                  <img alt="owner image" className="scale-150" src={heroImg} />
                </div>
              </div>
              <div className="chat-header text-neutral">
                Gall Anonim
                <time className="ml-2 text-xs opacity-50">12:46</time>
              </div>
              <div className="chat-bubble">I hate you!</div>
              <div className="chat-footer opacity-50">Seen at 12:46</div>
            </div>
          </div>
        </div>

        <div className="relative flex h-[60vh] w-full justify-self-center md:h-[70vh] md:w-1/2">
          <div className="lg:border[10px] relative flex flex-col justify-end overflow-hidden border-4 border-accent bg-secondary ph:mt-4 md:rounded-sm md:border-8">
            <div
              className={`border-r- absolute top-[82px] h-[120%] w-full ${isLightOn ? "bg-orange-400 bg-gradient-to-b from-accent via-transparent duration-[3s]" : "bg-secondary"} md:top-40`}
              style={{
                clipPath: "polygon(40% 0, 60% 0, 150% 100%, -50% 100%)",
              }}
            ></div>
            <img
              src={lampImg}
              alt="lamp image"
              className={`cursor-custom-pointer absolute left-1/2 top-0 h-24 -translate-x-1/2 ${isLightOn ? "brightness-100" : "brightness-[20%]"} md:h-44`}
              onClick={() => setIsLightOn(!isLightOn)}
            />
            <div className="relative">
              <div className="absolute left-10 top-[70px] z-20 skew-x-[60deg] skew-y-[349deg] text-center ph:left-12 ph:top-[86px] tb:top-24 lg:top-28 xl:left-24 xl:top-36">
                <div
                  className={`z-20 h-6 w-16 border-l-2 border-primary bg-base-100 ${isLightOn ? "brightness-70 hover:scale-105 hover:duration-700" : "brightness-[20%]"} lg:w-24} tb:h-8 tb:w-20 lg:h-12`}
                >
                  <img
                    src={cvImg}
                    alt="my cv image"
                    className={`${
                      isLightOn ? "cursor-custom-pointer" : "custom-cursor"
                    } z-20 h-6 w-16 tb:h-8 tb:w-20 lg:h-12 lg:w-24`}
                  />
                </div>
              </div>
              <img
                src={deskImg}
                alt="desk image"
                className={`${isLightOn ? "brightness-[115%]" : "brightness-[20%]"}`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ForRecruiter;
