import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { HomePage } from "./page/HomePage";
import { Layout, theme } from "antd";
import { Content } from "antd/es/layout/layout";
import { AppHeader } from "./layout/AppHeader";
import { BlogPage } from "./page/BlogPage";

function App() {
  const Wrapper = () => {
    const { token } = theme.useToken();
    return (
      <Layout
        style={{ minHeight: "100vh", maxWidth: "100vw" }}
        id="outer-container"
      >
        <AppHeader />
        <Content
          style={{
            background: token.colorBgContainer,
          }}
          id="page-wrap"
        >
          <Outlet />
        </Content>
        {/* <AppFooter /> */}
      </Layout>
    );
  };

  const router = createBrowserRouter([
    {
      element: <Wrapper />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/:blogId",
          element: <BlogPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
