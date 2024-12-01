import { useContext, useState } from "react";
import heroImg from "../../assets/hero-img.png";
import ownerImg from "../../assets/owner-image.png";
import avatarImg from "../../assets/avatar.png";
import { FaRegHandshake, FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa";
import { recruitment } from "../../data";
import { ContextBgValue } from "../../types";
import { AppContext } from "../../App";
const PhoneContent = () => {
  const [isInvitationAccepted, setIsInvitationAccepted] = useState(false);
  const [recruitmentMessages, setRecruitmentMessages] = useState(recruitment);
  const [order, setOrder] = useState<number>(1);
  const { isSectionFourInView } = useContext<ContextBgValue>(AppContext);

  const acceptInvitation = (delay: number) => {
    setTimeout(() => setIsInvitationAccepted(true), delay);
  };

  const askQuestion = (questionId: number) => {
    const newRecruitmentMessages = recruitmentMessages.map((message) => {
      if (message.id === questionId) {
        return { ...message, isAsked: true, order: order };
      }
      return message;
    });
    setOrder(order + 1);
    setRecruitmentMessages(newRecruitmentMessages);
  };

  const sortedMessagesByOrder = [...recruitmentMessages].sort(
    (message1, message2) => {
      if (message1.order === null) return 1;
      if (message2.order === null) return -1;
      return message1.order - message2.order;
    },
  );

  const isEveryQuestionAsked = [...recruitmentMessages].every(
    (message) => message.isAsked === true,
  );

  return (
    <>
      <div
        className={`mockup-phone hidden self-center border-neutral/50 drop-shadow-[20px_20px_10px_rgba(0,0,0,0.6)] md:block ${isSectionFourInView && "animate-moveHeroFromLeft"}`}
      >
        <div className="camera"></div>
        <div className="display">
          <div className="no-scrollbar artboard artboard-demo phone-1 relative hidden touch-pan-y overflow-y-scroll bg-gradient-to-b from-lime-200 to-accent duration-500 selection:bg-secondary selection:text-neutral md:block">
            <div
              className={`z-10 ${isInvitationAccepted ? "hide-invitation" : "flex"} flex h-full w-full flex-col items-center gap-y-3 bg-gradient-to-b from-secondary to-accent pt-16`}
            >
              <img
                src={ownerImg}
                alt="owner image"
                className="h-50 glass w-44 rounded-full border-2 border-primary object-cover"
              />
              {!isInvitationAccepted && (
                <>
                  <p className="px-10 font-protest tracking-wider text-primary">
                    Krystian chce porozmawiać
                  </p>
                  <p className="px-10 text-center text-base tracking-wider text-primary">
                    Kliknij poniżej, by zaakceptować zaproszenie
                  </p>

                  <div className="flex items-center gap-x-6">
                    <label className="swap swap-flip justify-self-center">
                      <input
                        type="checkbox"
                        className="cursor-custom-pointer"
                        onChange={() => acceptInvitation(850)}
                      />
                      <FaRegHandshake className="glass swap-on pointer-events-none rounded-3xl p-2 text-6xl" />
                      <FaRegThumbsUp className="glass swap-off pointer-events-none rounded-3xl p-2 text-6xl" />
                    </label>
                    <div
                      className="tooltip tooltip-bottom tooltip-secondary"
                      data-tip="Nie tym razem"
                    >
                      <button
                        className="cursor-custom-pointer duration-1000 hover:rotate-180"
                        onClick={() => acceptInvitation(600)}
                      >
                        <FaRegThumbsDown className="glass pointer-events-none scale-x-[-1] rounded-3xl p-2 text-6xl" />
                      </button>
                    </div>
                  </div>
                </>
              )}

              {isInvitationAccepted && (
                <p className="px-20 pt-5 text-center font-protest text-lg tracking-wider text-secondary">
                  Zaproszenie zaakceptowane
                </p>
              )}
            </div>
            {isInvitationAccepted && (
              <>
                <div
                  className="chat chat-start mt-6 animate-fadeIn px-2 opacity-0"
                  style={{
                    animationDelay: "3s",
                  }}
                >
                  <div className="avatar chat-image">
                    <div className="w-10 rounded-full">
                      <img
                        alt="owner image"
                        className="translate-x-1/2 translate-y-2 scale-[500%] bg-accent"
                        src={heroImg}
                      />
                    </div>
                  </div>
                  <div className="chat-header mt-3 text-primary">
                    Krystian Kamer
                  </div>
                  <div className="chat-bubble text-lg">
                    Czołem! Zapraszam do zapoznania się z moim CV, które
                    znajduje się na biurku. Najpierw jednak trzeba zapalić
                    światło.
                  </div>
                </div>

                <div
                  className="chat chat-end animate-fadeIn px-2 opacity-0"
                  style={{
                    animationDelay: "5s",
                  }}
                >
                  <div className="avatar chat-image">
                    <div className="w-10 rounded-full">
                      <img
                        alt="avatar image"
                        className="scale-150"
                        src={avatarImg}
                      />
                    </div>
                  </div>
                  <div className="chat-header text-secondary">Rekruter</div>
                  <div className="chat-bubble text-lg">Witam serdecznie</div>
                </div>

                <div
                  className="chat chat-start animate-fadeIn px-2 opacity-0"
                  style={{
                    animationDelay: "7s",
                  }}
                >
                  <div className="avatar chat-image">
                    <div className="w-10 rounded-full">
                      <img
                        alt="owner image"
                        className="translate-x-1/2 translate-y-2 scale-[500%] bg-accent"
                        src={heroImg}
                      />
                    </div>
                  </div>
                  <div className="chat-header text-primary">Krystian Kamer</div>
                  <div className="chat-bubble text-lg">
                    To wspaniały moment, aby zadać mi jakieś pytanie.
                  </div>
                </div>
                {sortedMessagesByOrder.map((message) => {
                  const { question, answer, id, isAsked } = message;
                  if (!isAsked) {
                    return null;
                  }
                  return (
                    <div key={id} className="last:mb-96">
                      <div
                        className="chat chat-end animate-fadeIn px-2 opacity-0"
                        style={{
                          animationDelay: "0.3s",
                        }}
                      >
                        <div className="avatar chat-image">
                          <div className="w-10 rounded-full">
                            <img
                              alt="avatar image"
                              className="scale-150"
                              src={avatarImg}
                            />
                          </div>
                        </div>
                        <div className="chat-header text-secondary">
                          Rekruter
                        </div>
                        <div className="chat-bubble text-lg">{question}</div>
                      </div>

                      <div
                        className="chat chat-start animate-fadeIn px-2 opacity-0"
                        style={{
                          animationDelay: "2s",
                        }}
                      >
                        <div className="avatar chat-image">
                          <div className="w-10 rounded-full">
                            <img
                              alt="owner image"
                              className="translate-x-1/2 translate-y-2 scale-[500%] bg-accent"
                              src={heroImg}
                            />
                          </div>
                        </div>
                        <div className="chat-header text-primary">
                          Krystian Kamer
                        </div>
                        <div className="chat-bubble text-lg">{answer}</div>
                      </div>
                    </div>
                  );
                })}
                {isEveryQuestionAsked && (
                  <>
                    <div
                      className="chat chat-end animate-fadeIn px-2 opacity-0"
                      style={{
                        animationDelay: "6s",
                      }}
                    >
                      <div className="avatar chat-image">
                        <div className="w-10 rounded-full">
                          <img
                            alt="avatar image"
                            className="scale-150"
                            src={avatarImg}
                          />
                        </div>
                      </div>
                      <div className="chat-header text-secondary">Rekruter</div>
                      <div className="chat-bubble text-lg">
                        Dziękuję za rozmowę, odezwiemy się wkrótce.
                      </div>
                    </div>
                    <div
                      className="chat chat-start animate-fadeIn px-2 opacity-0"
                      style={{
                        animationDelay: "8s",
                      }}
                    >
                      <div className="avatar chat-image">
                        <div className="w-10 rounded-full">
                          <img
                            alt="owner image"
                            className="translate-x-1/2 translate-y-2 scale-[500%] bg-accent"
                            src={heroImg}
                          />
                        </div>
                      </div>
                      <div className="chat-header mt-3 text-primary">
                        Krystian Kamer
                      </div>
                      <div className="chat-bubble text-lg">
                        Bardzo miło mi to słyszeć.
                      </div>
                    </div>
                    <div
                      className="chat chat-start mb-96 animate-fadeIn px-2 opacity-0"
                      style={{
                        animationDelay: "10s",
                      }}
                    >
                      <div className="avatar chat-image">
                        <div className="w-10 rounded-full">
                          <img
                            alt="owner image"
                            className="translate-x-1/2 translate-y-2 scale-[500%] bg-accent"
                            src={heroImg}
                          />
                        </div>
                      </div>
                      <div className="chat-header mt-3 text-primary">
                        Krystian Kamer
                      </div>
                      <div className="chat-bubble text-lg">
                        W razie co mój numer telefonu to
                        <a
                          className="cursor-custom-pointer text-blue-700"
                          href="tel:666660128"
                        >
                          {" "}
                          666-660-128{" "}
                        </a>
                        a email
                        <a
                          className="cursor-custom-pointer text-blue-700"
                          href="mailto:texen24@gmail.com"
                        >
                          {" "}
                          texen24@gmail.com
                        </a>
                        .
                      </div>
                    </div>
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </div>
      <div
        className={`absolute hidden rounded-lg font-protest tracking-widest opacity-0 md:-bottom-40 tb:-bottom-56 ${isInvitationAccepted ? "flex-col opacity-100 md:flex md:w-full" : "md:hidden"} px-8 py-2 selection:bg-secondary`}
      >
        <div
          className="mb-2 h-[1px] animate-fadeIn bg-accent/40 opacity-0"
          style={{
            animationDelay: `9s`,
          }}
        ></div>
        <h3
          className="mb-2 animate-fadeIn text-xl uppercase text-accent opacity-0 tb:self-start tb:text-2xl lg:mb-4 lg:text-3xl"
          style={{
            animationDelay: `10s`,
          }}
        >
          Zadaj mi pytanie:
        </h3>
        <div className="grid gap-y-2 md:grid-cols-2 tb:gap-y-3 tb:text-xl lg:text-2xl">
          {recruitmentMessages.map((message) => {
            const { question, id, isAsked } = message;
            return (
              <button
                key={id}
                className={`cursor-custom-pointer pointer-events-none animate-fadeInPointerNone text-neutral opacity-0 duration-300 ${isAsked ? "cursor-custom pointer-events-none line-through" : "hover:text-neutral/70"} ${
                  (id - 1) % 2 === 0
                    ? "md:justify-self-start"
                    : "md:justify-self-end"
                } ${!isAsked ? ((id - 1) % 2 === 0 ? "hover:pl-2" : "hover:pr-2") : ""} `}
                onClick={!isAsked ? () => askQuestion(id) : undefined}
                style={{
                  animationDelay: `${id + 10}s`,
                }}
              >
                {question}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default PhoneContent;
