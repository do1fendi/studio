import { ReactNode } from "react";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";

type Children = {
  children: ReactNode;
};

const Layout = ({ children }: Children) => {
  return (
    <div>
      <Nav />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
