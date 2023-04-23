import Container from "./container";
import { EXAMPLE_PATH } from "../lib/constants";

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2 getintouch">
      <Container>
        <div className="py-4 flex flex-col items-center text-black text-md">
          <p className="mb-2 text-xl">Pines Talent</p>
          <a
            className="text-black cursor-none"
            href="mailto:darcy@pinestalent.com"
          >
            darcy@pinestalent.com
          </a>
        </div>
      </Container>
    </footer>
  );
}
