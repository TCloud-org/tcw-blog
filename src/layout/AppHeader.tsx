import { Flex, theme } from "antd";
import { Header } from "antd/es/layout/layout";
import { CSSProperties, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const HeaderHeight = 64;

export const AppHeader = () => {
  const { token } = theme.useToken();
  const location = useLocation();

  const [scrollStart, setScrollStart] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const headerScrollStyle: CSSProperties = {
    background: token.colorBgContainer,
    boxShadow: token.boxShadowTertiary,
  };

  const headerStyle: CSSProperties = {
    background: "transparent",
    boxShadow: "none",
  };

  const controlNavbar = () => {
    if (window.scrollY > 10) {
      setScrollStart(true);
    } else {
      setScrollStart(false);
    }
  };

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  return (
    <>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          position: "fixed",
          overflow: "hidden",
          top: 0,
          zIndex: 999,
          width: "100%",
          justifyContent: "space-between",
          transition: "all 0.3s",
          ...(scrollStart || menuOpen ? headerScrollStyle : headerStyle),
        }}
        className="px-2 lg:px-8"
      >
        <Flex>
          <a href="/" className="text-white">
            The Cloud Blog
          </a>
        </Flex>
      </Header>
    </>
  );
};
