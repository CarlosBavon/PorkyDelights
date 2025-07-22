import React, { useEffect, useState } from "react";
import MobileApp from "./mobile/MobileApp";
import DesktopApp from "./components/DesktopApp";

const AppRouter = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 600);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile ? <MobileApp /> : <DesktopApp />;
};

export default AppRouter;
