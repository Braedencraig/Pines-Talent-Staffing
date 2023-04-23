import Footer from "../components/footer";
import Meta from "../components/meta";
import Navigation from "./navigation";

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Navigation />
        <main className="getintouch">{children}</main>
      </div>
      <Footer />
    </>
  );
}
