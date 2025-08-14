"use client";

import { usePathname } from "next/navigation";

import Footer from "./footer";

const FooterWrapper = () => {
  const pathname = usePathname();
  const isAuthenticationPage = pathname === "/authentication";

  return <Footer hidden={isAuthenticationPage} />;
};

export default FooterWrapper;
