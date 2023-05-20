import { useState, useEffect } from "react";
import Container from "../components/container";
import Layout from "../components/layout";
import { getAllPostsForHome } from "../lib/api";
import Head from "next/head";
import data from "../data.json";
import Link from "next/link";
import classNames from "classnames";
import FadeInSection from "../components/fadein";

export default function Index({ preview, allPosts }) {
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
          <title>{`About | Pines Talent Staffing & Consulting`}</title>
        </Head>
        <div className="mt-0 lg:mt-[72px] pb-[72px] min-h-[100vh]">
          <div className="flex flex-col text-center text-black pt-40">
            <Container>
              <div className="flex flex-col lg:flex-row w-full m-auto justify-between">
                <div className="w-[100%] lg:w-[45%]">
                  <img
                    className="max-h-[300px] md:h-[100%] object-cover"
                    src={"/assets/about.jpg"}
                    alt="Puzzle Pieces"
                  />
                </div>
                <div className="w-[100%] lg:w-[45%]">
                  <h1 className="text-[30px] lg:text-[60px] mb-12 mt-12 lg:mt-0">
                    BUILDING BETTER TEAMS
                  </h1>
                  {/* <FadeInSection key={1}> */}
                  <p className="mb-12">
                    At Pines Talent, we understand that finding the right talent
                    is crucial to the success of your business and the
                    productivity of your teams. With a particular focus on
                    marketing, creative, and technology placements, we offer
                    tailored staffing services that support our industry-leading
                    clients secure top talent in their markets. We pride
                    ourselves on taking a people-first approach to staffing.
                    That’s why we take the time to discover the unique needs of
                    each of our clients and strive to build long-lasting
                    partnerships based on trust and transparency. Our services
                    are designed to both support, or work in lieu of, your
                    internal Talent Acquisition teams and streamline your hiring
                    process.{" "}
                  </p>
                  <p className="mb-12">
                    Our extensive network of industry professionals, multi-prong
                    vetting process, and candidate pre-screening, allows us to
                    connect clients with the right talent quickly and
                    efficiently. We take the time to get to know each
                    individual, their career goals, and their unique skill set.
                    This allows us to provide personalized, tailored services
                    that meet the specific needs of each client and candidate.
                    Whether you're a company looking for the right candidate to
                    join your team, or a professional searching for your next
                    career opportunity, we're here to help.
                  </p>
                  <Link
                    href="/contact"
                    type="submit"
                    className="bg-black text-white px-4 py-2 w-full md:w-[200px] hover:bg-[#a1c4a3] hover:text-black focus:outline-none focus:bg-[#a1c4a3]"
                  >
                    Contact
                  </Link>
                  {/* </FadeInSection> */}
                </div>
              </div>
            </Container>
          </div>
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
