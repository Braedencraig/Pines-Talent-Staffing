import { useState, useEffect } from "react";
import Container from "../components/container";
import Layout from "../components/layout";
import { getAllPostsForHome, getAllJobs } from "../lib/api";
import Head from "next/head";
import data from "../data.json";
import classNames from "classnames";
import FadeInSection from "../components/fadein";
import ContactForm from "../components/contactform";

export default function Index({ preview, allPosts, allJobs }) {
  const { job } = data;
  console.log(allJobs);

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
          <title>{`Job Postings | Pines Talent Staffing & Consulting`}</title>
        </Head>
        <div className="hero-job mt-[40px] sm:mt-0 lg:mt-[72px]">
          <div className="flex flex-col text-center bg-white text-black">
            <FadeInSection key={1}>
              <h1 className="text-[40px] lg:text-[60px]">{job.title}</h1>
              <h2 className="text-2xl">{job.subtitle}</h2>
            </FadeInSection>
          </div>
        </div>
        <Container>
          <div className="flex flex-col lg:flex-row flex-wrap pb-[72px] lg:pb-[210px]">
            <FadeInSection key={2}>
              {allJobs.length > 0 &&
                allJobs.map((job) => {
                  return (
                    <div className="card card-4 w-full lg:w-[30%] text-black bg-black m-2">
                      <p>{job.title}</p>
                      <p>{job.subtitle}</p>
                    </div>
                  );
                })}
            </FadeInSection>
          </div>
        </Container>
      </Layout>
      <Cursor />
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = (await getAllPostsForHome(preview)) ?? [];
  const allJobs = (await getAllJobs(preview)) ?? [];
  return {
    props: { preview, allPosts, allJobs },
  };
}
