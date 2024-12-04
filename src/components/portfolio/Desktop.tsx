import { useRef, useState } from "react";
import { desktopIcons } from "../../data";
import { Link } from "react-router-dom";

const Desktop = () => {
  const [icons, setIcons] = useState(desktopIcons);
  const [isWindowOpen, setIsWindowOpen] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const inputsRef = useRef<{ [key: string]: HTMLInputElement | null }>({});

  const handleRenameClick = (inputName: string) => {
    setIsWindowOpen(false);
    const input = inputsRef.current[inputName];
    if (input) {
      input.placeholder = "";
      input.disabled = false;
      input.focus();
    }
  };

  const saveNameOnEnter = (
    e: React.KeyboardEvent<HTMLInputElement>,
    inputName: string,
  ) => {
    if (e.key === "Enter") {
      const input = inputsRef.current[inputName];
      if (input) {
        input.blur();
        input.disabled = true;
      }
    }
  };

  return (
    <div className="relative grid h-[70vh] grid-flow-col grid-cols-10 grid-rows-6 gap-4 selection:bg-accent selection:text-secondary">
      {icons.map((desktopIcon) => {
        const { icon, name, focus, href, to } = desktopIcon;

        return (
          <div className="dropdown dropdown-right">
            <div
              tabIndex={0}
              role="button"
              className={`cursor-custom-pointer group flex flex-col items-center justify-center rounded-btn text-primary/95 shadow-md duration-200 hover:shadow-lg ${
                focus
              } active:scale-90`}
              onClick={() => setIsDropdownOpen(true)}
            >
              <div className={`pointer-events-none mt-4 text-6xl`}>{icon}</div>
              <input
                ref={(el) => (inputsRef.current[`${name}`] = el)}
                type="text"
                className=" pointer-events-none my-1 w-full bg-neutral text-center font-protest text-sm tracking-widest text-secondary/95 placeholder:text-secondary/95 focus-visible:ring-red-600"
                placeholder={name}
                disabled={true}
                onKeyDown={(e) => saveNameOnEnter(e, `${name}`)}
              />
            </div>
            {isDropdownOpen && (
              <div
                tabIndex={0}
                className="menu dropdown-content z-[1] -ml-4 mt-2 w-40 rounded-lg bg-neutral shadow"
              >
                {name === "github" || name === "linkedIn" ? (
                  <a
                    href={href}
                    className="cursor-custom rounded-md px-2 py-2 text-start text-base hover:bg-accent/80"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Otwórz
                  </a>
                ) : name === "blog" ? (
                  <Link
                    className="cursor-custom rounded-md px-2 py-2 text-start text-base hover:bg-accent/80"
                    to={to as string}
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Otwórz
                  </Link>
                ) : (
                  <button
                    className="cursor-custom rounded-md px-2 py-2 text-start text-base hover:bg-accent/80"
                    onClick={() => {
                      setIsWindowOpen(true);
                      setIsDropdownOpen(false);
                    }}
                  >
                    Otwórz
                  </button>
                )}

                <button
                  className="cursor-custom rounded-md px-2 py-2 text-start text-base hover:bg-accent/80"
                  onClick={() => {
                    handleRenameClick(`${name}`);
                    setIsDropdownOpen(false);
                  }}
                >
                  Zmień nazwę
                </button>
                {name !== "kosz" && (
                  <button className="cursor-custom rounded-md px-2 py-2 text-start text-base hover:bg-accent/80">
                    Przenieś do kosza
                  </button>
                )}
              </div>
            )}
          </div>
        );
      })}
      {isWindowOpen && (
        <div className="mockup-browser absolute right-0 top-0 h-fit w-4/5 border-2 border-secondary/60 bg-accent">
          <div className="mockup-browser-toolbar flex justify-between">
            <button
              className="cursor-custom-pointer select-none rounded-full bg-neutral px-2 font-bold text-secondary/80"
              onClick={() => setIsWindowOpen(false)}
            >
              X
            </button>
          </div>
          <div role="tablist" className="tabs rounded-none bg-neutral p-0">
            <input
              type="radio"
              name="my_tabs_2"
              role="tab"
              className="tab my-1 text-base italic tracking-wider text-secondary"
              aria-label="Opis"
              defaultChecked
            />
            <div
              role="tabpanel"
              className="tab-content min-h-[500px] border-base-200 bg-base-100 p-10 text-2xl"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed
              nesciunt modi fugiat saepe, quisquam eligendi facilis maiores
              quaerat aut consequatur! Earum optio ut molestiae ex tempore porro
              repellat placeat excepturi officiis sit quibusdam molestias rerum,
              error eius obcaecati dolores adipisci?
            </div>

            <input
              type="radio"
              name="my_tabs_2"
              role="tab"
              className="tab rounded-box bg-base-100 text-base italic tracking-wider text-secondary"
              aria-label="Video"
            />
            <div
              role="tabpanel"
              className="tab-content min-h-[500px] border-base-200 bg-base-100 p-10 text-2xl"
            >
              Tab content 2
            </div>

            <input
              type="radio"
              name="my_tabs_2"
              role="tab"
              className="tab my-1 text-base italic tracking-wider text-secondary"
              aria-label="Technicznie"
            />
            <div
              role="tabpanel"
              className="tab-content min-h-[500px] border-base-200 bg-base-100 p-10 text-2xl"
            >
              Tab content 3
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Desktop;
