import { useContext, useState } from "react";
import { ContextBgValue } from "../types";
import { AppContext } from "../App";
import lampImg from "../assets/lamp.png";
import deskImg from "../assets/desk.png";
import cvImg from "../assets/CV.jpg";
import pdfCvFile from "../assets/Krystian Kamer CV.pdf";
import { PhoneContent, SectionTitle } from "./index";

const ForRecruiter = () => {
  const { sectionFourRef } = useContext<ContextBgValue>(AppContext);
  const [isLightOn, setIsLightOn] = useState(false);
  const [isDownloadCvModalOpen, setIsDownloadCvModalOpen] = useState(false);

  return (
    <div className="mx-8 flex flex-col md:mt-14 lg:mt-20">
      <div className="prose z-50" ref={sectionFourRef}>
        <SectionTitle title="Dla rekrutera" />
      </div>
      <div className="relative flex flex-col md:h-[596px] md:flex-row md:justify-center tb:mt-20 lg:mt-6">
        <div className="flex flex-col md:mr-10 md:w-1/2">
          <p className="-mt-4 mb-3 rounded-lg text-lg tracking-wider text-neutral selection:bg-neutral selection:text-secondary md:hidden">
            Serdecznie zapraszam do zapoznania się z moim CV, które znajduje się
            na biurku. Najpierw jednak trzeba zapalić światło.
          </p>
          <PhoneContent />
        </div>

        <div className="relative flex h-[60vh] w-full md:h-full md:w-full md:py-1 lg:w-2/5">
          <div className="relative flex flex-col justify-end overflow-hidden rounded-lg bg-secondary drop-shadow-[20px_20px_10px_rgba(0,0,0,0.6)] ph:mt-4 md:mt-0 lg:rounded-3xl">
            <div
              className={`absolute top-[82px] h-[120%] w-full ${isLightOn ? "bg-orange-400 bg-gradient-to-b from-accent via-transparent" : "bg-secondary"} md:top-40`}
              style={{
                clipPath: "polygon(40% 0, 60% 0, 150% 100%, -50% 100%)",
              }}
            ></div>
            <img
              src={lampImg}
              alt="lamp image"
              className={`cursor-custom-pointer absolute left-1/2 top-0 h-24 -translate-x-1/2 ${isLightOn ? "brightness-100" : "brightness-[20%]"} md:h-44`}
              onClick={() => {
                setIsLightOn(!isLightOn);
                setIsDownloadCvModalOpen(false);
              }}
            />
            {isDownloadCvModalOpen && isLightOn && (
              <div className="glass absolute left-1/2 top-[40%] w-5/6 -translate-x-1/2 -translate-y-1/2 rounded-2xl px-4 py-2 text-center font-protest text-sm text-primary selection:bg-accent selection:text-secondary ph:w-4/6 ph:text-base md:top-1/2 lg:top-[40%] lg:w-1/2 lg:text-lg">
                <p className="tracking-wider">czy chcesz teraz ściągnać CV ?</p>
                <div className="mt-2 flex justify-around">
                  <a
                    href={pdfCvFile}
                    download="krystian-kamer-cv.pdf"
                    className="cursor-custom-pointer glass rounded-full px-4 py-1 tracking-widest duration-700 hover:bg-green-300"
                  >
                    tak
                  </a>
                  <button
                    className="cursor-custom-pointer glass rounded-full px-4 py-1 tracking-widest duration-700 hover:bg-red-300"
                    onClick={() => {
                      setIsDownloadCvModalOpen(false);
                    }}
                  >
                    nie
                  </button>
                </div>
              </div>
            )}

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
                    onClick={() => setIsDownloadCvModalOpen(true)}
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
