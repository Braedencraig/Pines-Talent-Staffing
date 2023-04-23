import { useState, useEffect } from "react";
import Container from "../components/container";
import Layout from "../components/layout";
import { getAllPostsForHome } from "../lib/api";
import Head from "next/head";
import data from "../data.json";
import classNames from "classnames";
import FadeInSection from "../components/fadein";
import ContactForm from "../components/contactform";
import Link from "next/link";

export default function Index({ preview, allPosts }) {
  const { employer } = data;

  const isMobile = () => {
    const ua = navigator.userAgent;
    return /Android|Mobi/i.test(ua);
  };

  const Cursor = () => {
    if (typeof navigator !== "undefined" && isMobile()) return null;

    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [clicked, setClicked] = useState(false);
    const [linkHovered, setLinkHovered] = useState(false);
    const [hidden, setHidden] = useState(false);
    const [bgHovered, setBgHovered] = useState(false);

    useEffect(() => {
      addEventListeners();
      handleLinkHoverEvents();
      return () => removeEventListeners();
    }, []);

    const addEventListeners = () => {
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseenter", onMouseEnter);
      document.addEventListener("mouseleave", onMouseLeave);
      document.addEventListener("mousedown", onMouseDown);
      document.addEventListener("mouseup", onMouseUp);
    };

    const removeEventListeners = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
    };

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseDown = () => {
      setClicked(true);
    };

    const onMouseUp = () => {
      setClicked(false);
    };

    const onMouseLeave = () => {
      setHidden(true);
    };

    const onMouseEnter = () => {
      setHidden(false);
    };

    const handleLinkHoverEvents = () => {
      document.querySelectorAll("a").forEach((el) => {
        el.addEventListener("mouseover", () => setLinkHovered(true));
        el.addEventListener("mouseout", () => setLinkHovered(false));
      });

      document.querySelectorAll(".getintouch").forEach((el) => {
        el.addEventListener("mouseover", () => setBgHovered(true));
        el.addEventListener("mouseout", () => setBgHovered(false));
      });

      document.querySelectorAll("button").forEach((el) => {
        el.addEventListener("mouseover", () => setLinkHovered(true));
        el.addEventListener("mouseout", () => setLinkHovered(false));
      });
    };

    const cursorClasses = classNames("cursor", {
      "cursor--clicked": clicked,
      "cursor--hidden": hidden,
      "cursor--link-hovered": linkHovered,
      "cursor--bg-hovered": bgHovered,
    });

    return (
      <div
        className={cursorClasses}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
    );
  };

  //   parts, bottom

  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>{`Employeer Services | Pines Talent Staffing & Consulting`}</title>
        </Head>
        <div className="hero-job mt-0 lg:mt-[72px]">
          <FadeInSection
            classNames="flex flex-col bg-white text-black w-full lg:w-1/2 max-w-[748px]"
            key={1}
          >
            <h1 className="text-[60px] mb-12">{employer.title}</h1>
            <h2 className="text-xl">{employer.subtitle}</h2>
          </FadeInSection>
        </div>
        <Container>
          <div className="flex flex-col justify-center items-center">
            {employer.parts.map((part, index) => (
              <div className="flex flex-col w-full lg:w-1/2" key={index}>
                <FadeInSection key={index}>
                  <h2 className="text-2xl mb-4 font-black">{part.title}</h2>
                  <p className="mb-8">{part.copy}</p>
                </FadeInSection>
              </div>
            ))}
          </div>
          <div className="w-full m-auto flex justify-center mb-16 mt-6">
            <Link
              href="/contact"
              className="text-center bg-black text-white px-4 py-2 w-[200px] hover:bg-[#a1c4a3] hover:text-black focus:outline-none focus:bg-[#a1c4a3]"
            >
              Contact
            </Link>
          </div>
        </Container>
      </Layout>
      <Cursor />
    </>
  );
}
