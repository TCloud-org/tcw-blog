import { Col, Flex, Row, Typography } from "antd";
import { Span } from "../config/LayoutConfig";
import { BlogCard } from "../dataEntryComponents/BlogCard";

const blogs = [{}, {}, {}];

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

      <Row gutter={[16, 16]} className="py-16 px-32">
        {blogs.map((blog, i) => (
          <Col {...Span[4]} key={i}>
            <BlogCard {...blog} />
          </Col>
        ))}
      </Row>
    </Flex>
  );
};
