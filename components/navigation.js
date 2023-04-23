import { useEffect, useState } from "react";
import Container from "./container";
import Link from "next/link";
import Header from "./header";
import data from "../data.json";

export default function Navigation() {
  const [active, setActive] = useState(false);
  useEffect(() => {
    setActive(window.location.pathname.replace("/", ""));
  }, []);
  const { navItems } = data;
  return (
    <div className="absolute top-0 left-0 right-0 bg-black">
      <Container>
        <nav className="items-start justify-between flex-wrap py-6 hidden lg:flex">
          <div>
            <Link
              href="/"
              className="flex items-center flex-shrink-0 text-white mr-6 svgfun"
            >
              *logo here*
            </Link>
          </div>
          <ul className="flex flex-row">
            {navItems.map((item, i) => {
              return (
                <li key={i} className="ml-7">
                  <Link
                    href={item.link}
                    className={`${
                      active === item.link
                        ? "text-accent-1 font-bold"
                        : "text-white font-bold"
                    } no-underline duration-200 transition-colors link link-underline link-underline-black hover:text-white text-white`}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <nav className="lg:hidden relative py-3">
          {/* <div>
            <Link
              href="/"
              className="text-white max-h-[68px] max-w-[67px] absolute left-0 right-0 top-0 bottom-0 m-auto"
            >
              *logo here*
            </Link>
          </div> */}
          <Header navItems={navItems} />
        </nav>
      </Container>
    </div>
  );
}
