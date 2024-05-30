import { Col, Flex, Row, Typography } from "antd";
import { Span } from "../config/LayoutConfig";
import { BlogCard } from "../dataEntryComponents/BlogCard";

const blogs = [
  {
    id: "optimize-api-with-multi-step-workflow",
    title: "API Optimization With Multi-Step Workflow",
    description:
      "Check out the most powerful technique to optimize a complex system",
    date: "05/29/24",
    readingTime: 7,
  },
];

export const HomePage = () => {
  return (
    <Flex vertical>
      <div className="bg-main w-full">
        <Flex vertical justify="center" className="h-full">
          <Row className="h-full py-64 px-32">
            <Col {...Span[1]} className="flex flex-col">
              <Flex className="h-full" justify="center" align="center">
                <Typography.Title
                  level={2}
                  style={{ margin: 0, fontWeight: 800 }}
                  className="!text-white !text-4xl"
                >
                  BLOG
                </Typography.Title>
              </Flex>
            </Col>
          </Row>
        </Flex>
      </div>

      <Flex vertical className="max-w-screen-2xl ml-auto mr-auto w-full">
        <Row gutter={[32, 32]} className="py-16 px-2 lg:px-8">
          {blogs.map((blog, i) => (
            <Col {...Span[3]} key={i} className="flex flex-col">
              <BlogCard {...blog} />
            </Col>
          ))}
        </Row>
      </Flex>
    </Flex>
  );
};
