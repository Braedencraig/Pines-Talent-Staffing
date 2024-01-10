import { useState, useEffect, useMemo } from "react";
import Container from "../components/container";
import Layout from "../components/layout";
import { getAllPostsForHome } from "../lib/api";
import Head from "next/head";
import data from "../data.json";
import classNames from "classnames";
import FadeInSection from "../components/fadein";
import ContactGeneral from "../components/contactgeneral";
import Map from "../components/map";
import Link from "next/link";

export default function Index({ preview, allPosts }) {
  const { hero } = data;
  const [submitted, setSubmitted] = useState(false);

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

  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>{`Home | Pines Talent Staffing & Consulting`}</title>
        </Head>
        <div className="mt-[40px] lg:mt-[72px]">
          <div className="flex flex-col text-center bg-white text-black pt-28 lg:pt-20 mb-8">
            <h1 className="text-[30px] lg:text-[60px]">Apply</h1>
            <h2 className="text-2xl mb-2">Find your dream job</h2>
            <p className="text-center text-lg mb-6 mt-4 max-w-[80%] m-auto">
              If you would like to make a general application, please feel free
              to contact us directly
            </p>
            <div className="w-full m-auto flex justify-center mb-16 mt-2">
              <Link
                href="/contact"
                className="text-center bg-black text-white px-4 py-2 w-[200px] hover:bg-[#a1c4a3] hover:text-black focus:outline-none focus:bg-[#a1c4a3]"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
        <Container>
          <div
            className="flex flex-col justify-center items-center text-center mt-4 mb-8"
            key={3}
          >
            {/* <div className="flex flex-col justify-center items-center text-center mt-4 pb-8"> */}
            <ContactGeneral submitted={submitted} setSubmitted={setSubmitted} />
            {/* </div> */}
          </div>
        </Container>
        <div className="min-h-[33vh]">
          {/* <FadeInSection key={2}> */}
          {/* <Map /> */}
          {/* </FadeInSection> */}
        </div>
      </Layout>
      {typeof navigator !== "undefined" && isMobile() ? null : <Cursor />}
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = (await getAllPostsForHome(preview)) ?? [];
  return {
    props: { preview, allPosts },
  };
}
