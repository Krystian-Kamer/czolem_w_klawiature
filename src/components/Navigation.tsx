import { RxHamburgerMenu } from "react-icons/rx";
import { NavLink, useLocation } from "react-router-dom";
import { useContext, useEffect } from "react";
import { ContextValue, NavLinkType } from "../types";
import { AppContext } from "../App";

const navLinks: NavLinkType[] = [
  { id: "Home", to: "/" },
  { id: "Blog", to: "/blog" },
  { id: "Portfolio", to: "/portfolio" },
  { id: "Kontakt", to: "/kontakt" },
];

const Navigation = () => {
  const { pathname } = useLocation();
  const { isBgDark, windowHeight } = useContext<ContextValue>(AppContext);

  useEffect(() => {
    if (windowHeight < 1174) {
      if (pathname === "/") {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      } else {
        const heroHeight = (document.querySelector(".hero") as HTMLElement)
          .offsetHeight;
        window.scrollTo({
          top: heroHeight,
          behavior: "smooth",
        });
      }
    } else {
      const scrollableDiv = document.querySelector(".home");
      scrollableDiv?.scrollTo({
        top: pathname === "/" ? 0 : 250,
        behavior: "smooth",
      });
    }
  }, [pathname]);

  return (
    <nav
      className={`fixed ${pathname.includes("/blog") && !isBgDark && windowHeight >= 1174 && "bg-gradient-to-r from-transparent from-50% via-neutral to-neutral"} z-50 w-full md:pb-2`}
    >
      <div className="mx-auto flex w-full max-w-7xl justify-end p-2">
        <div className={`${windowHeight < 1174 ? "flex" : "lg:hidden"}`}>
          <div className="drawer drawer-end">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              <label
                htmlFor="my-drawer-4"
                className={`cursor-custom-pointer btn btn-circle drawer-button m-1 opacity-90 md:h-16 md:w-16 ${isBgDark ? "btn-neutral" : "btn-secondary"}`}
              >
                <RxHamburgerMenu className="pointer-events-none text-2xl" />
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer-4"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu h-full w-1/2 bg-accent p-6 pt-10 text-lg font-bold text-base-content md:w-1/3 lg:w-1/4 xl:w-1/5">
                {navLinks.map((navLink) => {
                  const { id, to } = navLink;
                  return (
                    <NavLink
                      to={to}
                      key={id}
                      className={`cursor-custom-pointer my-1 border-none py-2 pl-4 duration-300 hover:rounded-md hover:bg-secondary hover:text-base-100 ${to === pathname && "rounded-md bg-secondary text-base-100"}`}
                      onClick={() => {
                        const drawer = document.getElementById(
                          "my-drawer-4",
                        ) as HTMLInputElement;
                        drawer.checked = false;
                      }}
                    >
                      {id}
                    </NavLink>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        <div className={`${windowHeight < 1174 ? "hidden" : "hidden lg:flex"}`}>
          {navLinks.map((navLink) => {
            const { id, to } = navLink;
            return (
              <div key={id} className="group relative mt-4">
                <NavLink
                  to={to}
                  className={`cursor-custom-pointer select-none px-2 py-4 font-protest text-xl tracking-wider xl:text-2xl ${isBgDark ? "text-neutral" : "text-secondary"} `}
                >
                  {id}
                </NavLink>
                <div
                  className={`pointer-events-none absolute left-1 h-2 bg-accent text-accent duration-500 ${
                    to === pathname ? "w-[55%]" : "w-0"
                  } group-hover:w-[55%]`}
                ></div>
              </div>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
export default Navigation;
