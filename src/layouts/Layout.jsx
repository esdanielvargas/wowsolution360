import { Footer, Glass, Header, Main, Menu, ScrollToTop } from "../components";
import { useEffect, useState } from "react";

export default function Layout() {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
    setGlass(!glass);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === "KeyM" && event.altKey) {
        handleMenu();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === "F2") {
        setGlass(!glass);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  const [glass, setGlass] = useState(false);

  const handleGlass = () => {
    setGlass(!glass);
    setMenu(false);
  };

  return (
    <>
      <ScrollToTop />
      <Header menu={menu} handleMenu={handleMenu} />
      <Menu menu={menu} handleMenu={handleMenu} />
      <Main />
      <Footer />
      <Glass glass={glass} handleGlass={handleGlass} />
    </>
  );
}
