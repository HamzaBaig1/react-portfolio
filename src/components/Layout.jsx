import { useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";

function Layout({ children }) {
  useEffect(function () {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="content font-mont">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
