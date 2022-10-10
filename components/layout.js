import Footer from "./footer/footer";
import * as React from "react";
import Meta from "../components/meta";

export default function Layout({ children }) {
  React.useEffect(() => {
    window.Webflow && window.Webflow.destroy();
    window.Webflow && window.Webflow.ready();
  }, []);
  return (
    <>
      <Meta />
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
