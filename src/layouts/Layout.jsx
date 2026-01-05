import { useEffect, useState } from "react";
import ScrollToTop from "../common/ScrollToTop";
import Header from "../common/Header";
import Menu from "../common/Menu";
import Main from "../common/Main";
import Glass from "../common/Glass";
import Footer from "../common/Footer";

function Layout() {
  const [menu, setMenu] = useState(false);
  const [login, setLogin] = useState(false);

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
        setLogin(!login);
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
export default Layout;
