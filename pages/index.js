import { useState, useEffect } from "react";
import Container from "../components/container";
import Layout from "../components/layout";
import { getAllPostsForHome } from "../lib/api";
import Head from "next/head";
import data from "../data.json";
import classNames from "classnames";
import FadeInSection from "../components/fadein";
import ContactForm from "../components/contactform";

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
          <link rel="canonical" href="https://www.pinestalent.com"></link>
          <meta property="og:title" content="Home | Pines Talent"></meta>
          <meta property="og:url" content="https://www.pinestalent.com"></meta>
          <meta property="og:site_name" content="Pines Talent"></meta>
          <meta property="og:type" content="website"></meta>
          <meta name="twitter:title" content="Home | Pines Talent"></meta>
          <meta name="twitter:card" content="summary_large_image"></meta>
        </Head>
        <div className="hero mt-0 lg:mt-[72px]">
          <div className="flex flex-col text-center text-white">
            {/* <FadeInSection key={1}> */}
            <h1 className="text-[60px] lg:text-[100px]">{hero.title}</h1>
            <h2 className="text-2xl lg:text-5xl">{hero.subtitle}</h2>
            {/* </FadeInSection> */}
          </div>
        </div>
        <Container>
          <div
            className="flex flex-col justify-center items-center text-center mt-20"
            key={2}
          >
            <h3 className="text-2xl md:text-4xl mb-6">
              PEOPLE FIRST APPROACH TO STAFFING
            </h3>
            {/* <h4 className="text-2xl mb-12">
              At Pines Talent, we believe that people are at the heart of every
              successful business.
            </h4> */}
          </div>
          <div
            className="flex flex-col justify-center items-center text-center mb-20 max-w-[700px] m-auto text-xl"
            key={3}
          >
            <p className="leading-relaxed">
              Welcome to Pines Talent! We are a passionate and results-driven
              recruiting agency with a laser focus on Marketing, Creative, and
              Technology hires. Our people-first approach lies at the core of
              everything we do. We believe that successful placements aren't
              just about skills on paper; they're about finding the perfect
              match that sparks genuine professional connections. With a team of
              dedicated professionals, we go above and beyond to understand the
              unique needs and aspirations of both our candidates and clients.
              By fostering strong candidate and client engagement, we ensure
              that every step of the recruitment journey is seamless and
              rewarding. When you partner with us, you'll experience the
              difference that true collaboration can make – unlocking the
              potential of your team and business, one perfect fit at a time.
            </p>
            {/* <p className="mb-6">
              We work closely with both clients and candidates to ensure that we
              understand their unique needs, values, and goals. With our
              extensive network and personalized approach, we match the right
              people with the right opportunities to build the strongest teams.
            </p>
            <p>
              Whether you're looking for a job or looking for new talent to join
              your team, we are here to make the experience quick and simple.
              Take a look at our features and let us take the pressure off your
              search.
            </p> */}
          </div>
          <div
            className="flex flex-col justify-center items-center text-center"
            key={4}
          >
            <h4 className="text-3xl mb-4">REQUEST TALENT</h4>
            <h4 className="text-xl max-w-[700px] mb-12 leading-relaxed	">
              Talent Request Form. Please add a brief description of the role
              you are seeking to fill. We encourage users to fill out all
              sections before submitting their information.
            </h4>
          </div>
          {/* <FadeInSection key={5}> */}
          <ContactForm submitted={submitted} setSubmitted={setSubmitted} />
          {/* </FadeInSection> */}
          {typeof navigator !== "undefined" && isMobile() ? (
            <div className="flex mt-16 mb-16 lg:flex-row flex-col">
              <figure class="item">
                <div style={{ "--img": "url(/assets/img1.jpg)" }}></div>
                <div
                  class="item__cover"
                  style={{ "background-image": "url(/assets/img1.jpg)" }}
                ></div>
                <figcaption class="item__content">
                  <h3 class="item__content-title">Marketing & Sales</h3>
                </figcaption>
              </figure>
              <figure class="item">
                <div style={{ "--img": "url(/assets/img2.jpg)" }}></div>
                <div
                  class="item__cover"
                  style={{ "background-image": "url(/assets/img2.webp)" }}
                ></div>
                <figcaption class="item__content">
                  <h3 class="item__content-title">Technology</h3>
                </figcaption>
              </figure>
              <figure class="item">
                <div style={{ "--img": "url(/assets/img3.jpg)" }}></div>
                <div
                  class="item__cover"
                  style={{ "background-image": "url(/assets/img3.jpg)" }}
                ></div>
                <figcaption class="item__content">
                  <h3 class="item__content-title">Creative</h3>
                </figcaption>
              </figure>
            </div>
          ) : (
            // <FadeInSection key={6}>
            <div className="flex mt-16 mb-16 lg:flex-row flex-col">
              <figure class="item">
                <div style={{ "--img": "url(/assets/img1.jpg)" }}></div>
                <div
                  class="item__cover"
                  style={{ "background-image": "url(/assets/img1.jpg)" }}
                ></div>
                <figcaption class="item__content">
                  <h3 class="item__content-title">Marketing & Sales</h3>
                </figcaption>
              </figure>
              <figure class="item">
                <div style={{ "--img": "url(/assets/img2.webp)" }}></div>
                <div
                  class="item__cover"
                  style={{ "background-image": "url(/assets/img2.webp)" }}
                ></div>
                <figcaption class="item__content">
                  <h3 class="item__content-title">Technology</h3>
                </figcaption>
              </figure>
              <figure class="item">
                <div style={{ "--img": "url(/assets/img3.jpg)" }}></div>
                <div
                  class="item__cover"
                  style={{ "background-image": "url(/assets/img3.jpg)" }}
                ></div>
                <figcaption class="item__content">
                  <h3 class="item__content-title">Creative</h3>
                </figcaption>
              </figure>
            </div>
            // </FadeInSection>
          )}
          {/* <FadeInSection key={6}>
            <div className="flex mt-16 mb-16 lg:flex-row flex-col">
              <figure class="item">
                <div style={{ "--img": "url(/assets/img1.jpg)" }}></div>
                <div
                  class="item__cover"
                  style={{ "background-image": "url(/assets/img1.jpg)" }}
                ></div>
                <figcaption class="item__content">
                  <h3 class="item__content-title">Marketing & Sales</h3>
                </figcaption>
              </figure>
              <figure class="item">
                <div style={{ "--img": "url(/assets/img2.jpg)" }}></div>
                <div
                  class="item__cover"
                  style={{ "background-image": "url(/assets/img2.jpg)" }}
                ></div>
                <figcaption class="item__content">
                  <h3 class="item__content-title">Food & Beverage</h3>
                </figcaption>
              </figure>
              <figure class="item">
                <div style={{ "--img": "url(/assets/img3.jpg)" }}></div>
                <div
                  class="item__cover"
                  style={{ "background-image": "url(/assets/img3.jpg)" }}
                ></div>
                <figcaption class="item__content">
                  <h3 class="item__content-title">Creative</h3>
                </figcaption>
              </figure>
            </div>
          </FadeInSection> */}

          {/* <div class="content">
            <FadeInSection key={5}>
              <figure class="item">
                <div
                  class="item__img glitch"
                  style={{ "--img": "url(/assets/img1.jpg)" }}
                  data-tilt
                  data-tilt-max="15"
                  data-tilt-speed="3000"
                  data-tilt-perspective="1500"
                  data-tilt-scale="0.95"
                  data-tilt-mouse-event-element=".content .item:nth-child(1)"
                >
                  <div class="glitch__img"></div>
                  <div class="glitch__img"></div>
                  <div class="glitch__img"></div>
                  <div class="glitch__img"></div>
                  <div class="glitch__img"></div>
                </div>
                <div
                  class="item__cover"
                  style={{ "background-image": "url(/assets/img1.jpg)" }}
                ></div>
                <figcaption class="item__content">
                  <h3 class="item__content-title">Marketing & Sales</h3>
                </figcaption>
              </figure>
            </FadeInSection>
            <FadeInSection key={6}>
              <figure class="item">
                <div
                  class="item__img glitch"
                  style={{ "--img": "url(/assets/img2.jpg)" }}
                  data-tilt
                  data-tilt-max="15"
                  data-tilt-speed="3000"
                  data-tilt-perspective="1500"
                  data-tilt-scale="0.95"
                  data-tilt-mouse-event-element=".content .item:nth-child(1)"
                >
                  <div class="glitch__img"></div>
                  <div class="glitch__img"></div>
                  <div class="glitch__img"></div>
                  <div class="glitch__img"></div>
                  <div class="glitch__img"></div>
                </div>
                <div
                  class="item__cover"
                  style={{ "background-image": "url(/assets/img2.jpg)" }}
                ></div>
                <figcaption class="item__content">
                  <h3 class="item__content-title">Food & Beverage</h3>
                </figcaption>
              </figure>
            </FadeInSection>
            <FadeInSection key={7}>
              <figure class="item">
                <div
                  class="item__img glitch"
                  style={{ "--img": "url(/assets/img3.jpg)" }}
                  data-tilt
                  data-tilt-max="15"
                  data-tilt-speed="3000"
                  data-tilt-perspective="1500"
                  data-tilt-scale="0.95"
                  data-tilt-mouse-event-element=".content .item:nth-child(1)"
                >
                  <div class="glitch__img"></div>
                  <div class="glitch__img"></div>
                  <div class="glitch__img"></div>
                  <div class="glitch__img"></div>
                  <div class="glitch__img"></div>
                </div>
                <div
                  class="item__cover"
                  style={{ "background-image": "url(/assets/img3.jpg)" }}
                ></div>
                <figcaption class="item__content">
                  <h3 class="item__content-title">VFX & Post Production</h3>
                </figcaption>
              </figure>
            </FadeInSection>
          </div> */}
        </Container>
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
