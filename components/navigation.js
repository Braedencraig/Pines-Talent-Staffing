import { useEffect, useState } from "react";
import Container from "./container";
import Link from "next/link";
import Header from "./header";
import data from "../data.json";
import { useRouter } from "next/router";

export default function Navigation() {
  const [active, setActive] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setActive(window.location.pathname);
  }, []);
  const { navItems } = data;
  return (
    <div className="absolute top-0 left-0 right-0 bg-black">
      <Container>
        <nav className="items-start justify-between flex-wrap hidden lg:flex">
          <div>
            <Link
              href="/"
              className="flex items-center flex-shrink-0 text-white mr-6 svgfun pt-2"
            >
              {/* Pines Talent */}
              <img src="./assets/navlogo.png" alt="" />
            </Link>
          </div>
          <ul className="flex flex-row py-6">
            {navItems.map((item, i) => {
              return (
                <li key={i} className="ml-7">
                  <Link
                    href={item.link}
                    className={`${
                      active === item.link
                        ? "text-white font-bold link-underline-active "
                        : "text-white font-bold"
                    } no-underline duration-200 transition-colors link link-underline link-underline-black hover:text-white`}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <nav className="lg:hidden relative py-3">
          <Header navItems={navItems} />
        </nav>
      </Container>
    </div>
  );
}
