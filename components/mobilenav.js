import { useEffect } from "react";
import { useTransition, animated } from "react-spring";
import Link from "next/link";

const MobileNav = ({ open, navItems }) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflowY = "hidden";
      return;
    }
    document.body.style.overflowY = "auto";
  }, [open]);

  const transition = useTransition(open, {
    from: {
      opacity: 0,
      transformMain: "translateY(40px)",
      transformFoot: "translateY(200px)",
    },
    enter: {
      opacity: 1,
      transformMain: "translateY(0px)",
      transformFoot: "translateY(0px)",
    },
    leave: {
      opacity: 0,
      transformMain: "translateY(40px)",
      transformFoot: "translateY(200px)",
    },
  });

  return transition(({ opacity, transformMain, transformFoot }, visible) => {
    return visible ? (
      <animated.nav style={{ opacity }} className="mobile-nav">
        <div className="content-wrapper">
          <animated.ul style={{ transform: transformMain }} className="list">
            <Link
              href={"/"}
              className="list-item hover:text-accent-1"
              key={123}
            >
              Home
            </Link>
            {navItems.map((item) => (
              <Link
                href={item.link}
                className="list-item hover:text-accent-1"
                key={item.link}
              >
                {item.name}
              </Link>
            ))}
          </animated.ul>
        </div>
      </animated.nav>
    ) : null;
  });
};

export default MobileNav;
