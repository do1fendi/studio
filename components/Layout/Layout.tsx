import type { NextPage } from "next";
import { ReactNode } from "react";
import Nav from "../Nav/Nav";

type Children = {
  children: ReactNode;
};

const Layout = ({ children }: Children) => {
  return (
    <div>
      <Nav />
      {children}
    </div>
  );
};

export default Layout;
