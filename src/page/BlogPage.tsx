import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { Col, Flex, Row } from "antd";
import { createSpan } from "../config/LayoutConfig";
import { BlogShare } from "../dataEntryComponents/BlogShare";
import remarkToc from "remark-toc";
import remarkGfm from "remark-gfm";
import remarkHeadingId from "remark-heading-id";

export const BlogPage = () => {
  const { blogId } = useParams();

  const [markdownContent, setMarkdownContent] = useState<string>("");

  useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        const response = await fetch(`/blogs/${blogId}.md`);
        const markdownText = await response.text();
        setMarkdownContent(markdownText);
      } catch (error) {
        console.error("Error fetching Markdown:", error);
      }
    };

    fetchMarkdown();
  }, [blogId]);

  return (
    <Flex vertical className="p-24 max-w-screen-2xl ml-auto mr-auto">
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
          <BlogShare />
        </Col>
      </Row>
    </Flex>
  );
};
