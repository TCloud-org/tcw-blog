import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { Col, Flex, Image, Row } from "antd";
import { createSpan } from "../config/LayoutConfig";
import { BlogShare } from "../dataEntryComponents/BlogShare";
import remarkToc from "remark-toc";
import remarkGfm from "remark-gfm";
import remarkHeadingId from "remark-heading-id";
import { Author } from "../dataDisplayComponents/Author";
import { AMS_GET_BLOG_INFO_ENDPOINT } from "../config/AMSEndpointConfig";
import { snakeToTitleCase } from "../utils/StringUtils";

export const BlogPage = () => {
  const { blogId } = useParams();

  const [markdownContent, setMarkdownContent] = useState<string>("");

  useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        const response = await fetch(
          `${AMS_GET_BLOG_INFO_ENDPOINT}?id=${blogId}`
        );
        const markdownText = await response.text();
        setMarkdownContent(markdownText);
      } catch (error) {
        console.error("Error fetching Markdown:", error);
      }
    };

    fetchMarkdown();
  }, [blogId]);

  return (
    <Flex vertical className="p-24 max-w-screen-2xl ml-auto mr-auto" gap={16}>
      <div className="mb-8">
        <Author
          imageUrl="https://tcw-blog.s3.us-west-2.amazonaws.com/author/tungdinh-author.png"
          name="Tung Dinh"
          date="05/29/24"
          readingTime={7}
        />
      </div>
      <Image
        src="https://tcw-blog.s3.us-west-2.amazonaws.com/images/mocule.png"
        preview={false}
        height={500}
        style={{ objectFit: "cover" }}
      />
      <Row gutter={[32, 32]}>
        <Col {...createSpan(18)}>
          <div style={{ fontSize: 18, lineHeight: 2 }}>
            <ReactMarkdown
              remarkPlugins={[
                remarkToc,
                remarkGfm,
                [remarkHeadingId, { defaults: true, uniqueDefaults: true }],
              ]}
            >
              {markdownContent}
            </ReactMarkdown>
          </div>
        </Col>

        <Col {...createSpan(6)}>
          <BlogShare title={snakeToTitleCase(blogId || "")} />
        </Col>
      </Row>
    </Flex>
  );
};
