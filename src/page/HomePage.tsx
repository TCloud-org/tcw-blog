import { Col, Flex, Row, Typography } from "antd";
import { Span } from "../config/LayoutConfig";
import { BlogCard } from "../dataEntryComponents/BlogCard";

const blogs = [
  {
    id: "optimize-api-with-multi-step-workflow",
    title: "Optimize API with Multi-Step Workflow",
    description:
      "Check out the most powerful technique to optimize a complex system",
    date: "05/29/24",
    readingTime: 5,
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

      <Row gutter={[64, 64]} className="py-16 px-16">
        {blogs.map((blog, i) => (
          <Col {...Span[3]} key={i}>
            <BlogCard {...blog} />
          </Col>
        ))}
      </Row>
    </Flex>
  );
};
